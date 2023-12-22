import { logger } from "@utils/logger";
import { TypoShieldListener } from "./grammar/TypoShieldListener";
import {
  DefinesContext,
  DirectivesContext,
  EndpointsContext,
  MethodsContext,
  ObjectContext,
  ProtocolContext
} from "./grammar/TypoShieldParser";
import {
  CustomError,
  Directive,
  DirectiveObject,
  Endpoint,
  HTTPVersionType,
  Method,
  ParserListenerOptions,
  Protocol
} from "./types";

export class ParseTypoShieldListener implements TypoShieldListener {
  // service
  private protocol: Protocol;
  private protocolVersion: HTTPVersionType;
  private endpoints: Array<Endpoint>;
  private options: ParserListenerOptions;
  private errors: CustomError[];

  constructor(options?: ParserListenerOptions) {
    this.endpoints = [];
    this.protocol = "HTTP";
    this.protocolVersion = "1.1";
    this.options = options || {};
    this.errors = [];
  }

  // protocols
  public enterProtocol(ctx: ProtocolContext) {
    this.protocol = ctx.PROTOCOL().text as Protocol;

    const protocolVersion = ctx.PROTOCOL_VERSION()?.text;
    if (protocolVersion === undefined) {
      logger.log("Protocol version not found, version HTTP/1.1 was set as default", "warning");
    } else {
      this.protocolVersion = ctx.PROTOCOL_VERSION()?.text as HTTPVersionType;
    }
  }

  private parseDirectiveObjects(objects: ObjectContext[] | undefined): DirectiveObject {
    if (objects === undefined) {
      return {} as DirectiveObject;
    }

    return objects.reduce((acc, object) => {
      const key = object.ID(0).text;
      const value = object.TYPE()?.text || object.ID(1)?.text || "";

      return {
        ...acc,
        [key]: value
      };
    }, {} as DirectiveObject);
  }

  private parseDirective(directive: DirectivesContext) {
    const name = directive.DIRECTIVE().text;
    const dirName = directive.ENTITY_NAME()?.text;
    const dirType = directive.DIR_TYPE()?.text;
    const enumeration = directive.enumeration();
    const enums = enumeration?.enum().map((ctx) => ctx.ENTITY_NAME()?.text);

    const utilityDirective = directive.utilitydirective();
    const utilityDirectiveName = utilityDirective?.UTILITY_DIRECTIVE().text;
    const utilityDirectiveAtoms = utilityDirective
      ?.utilitydirectiveatom()
      .ID()
      .map((id) => id.text);
    const objects = this.parseDirectiveObjects(directive?.objects()?.object());

    return {
      name,
      dirName,
      dirType,
      objects,
      utilityDirective: {
        name: utilityDirectiveName,
        atoms: utilityDirectiveAtoms
      },
      enums
    };
  }

  private overridingDirectives(directives: Directive[], overriding: ParserListenerOptions["overrideDirectives"]): Directive[] {
    switch (overriding) {
      /**
       * None - значит, что ничего не делаем с исходным массивом
       */
      case "none":
        return directives;

      /**
       * Merge - то самое наследование директив, которое описывалось в первой задумке
       *
       * Такой мод имеет два кейса:
       * 1. Имеющий утилитарные директивы
       *
       *    Примерный подход в том, что все директивы стакаются в один таким
       *    способом, чтобы в готовые объекты попали только те значения, которые
       *    удовлетворяют некоторым требованиям, а именно: если есть хотя бы одна
       *    утилитарная директива, то все предыдущие, имеющиеся в массиве будут
       *    фильтроваться установленным способом.
       *
       *    #include(a, b) from {a, b, c, d} => {a, b}
       *    #exclude(a, b) from {a, b, c, d} => {c, d}
       *
       * 2. Неимеющий утилитарные директивы
       *
       *    Здесь все просто, поскольку не нужно думать насчет, как именно
       *    мержить объекты в директиве.
       *
       * 3. Смешанный подход (то есть случай, когда у нас есть больше одной
       *    директивы без утилитарной директивы и как минимум одна директива
       *    с утилитарной).
       *
       *    Здесь суть в том, чтобы находить все элементы с утилитарными
       *    директивами, применять для всех предыдущих элементов данную
       *    директиву и таким образом рекурсивно проходится по текущему
       *    массиву, мержа его элементы.
       */
      case "merge": {
        const baseMergeDirectivesByObjects = (subarray: Directive[]): Directive[] => {
          return subarray.reduce((acc, directive) => {
            const names = acc.map((ac) => ac.name);
            const index = names.findIndex((n) => n === directive.name);

            if (~index) {
              acc[index] = {
                ...acc[index],
                objects: { ...acc[index].objects, ...directive.objects }
              };
              return acc;
            }

            return [...acc, directive];
          }, [] as Directive[]);
        };

        const recMergeDirectivesByUtilities = (dirs: Directive[]): Directive[] => {
          const isMerged = !dirs.some((dir) => dir.utilityDirective?.name);

          if (isMerged) {
            return dirs;
          }

          const utilityDirectiveIndex = dirs.findIndex((directive) => directive.utilityDirective?.name);
          const utilityDirectiveName = dirs[utilityDirectiveIndex].utilityDirective?.name;
          const utilityDirectiveAtoms = dirs[utilityDirectiveIndex].utilityDirective?.atoms || [];
          const directiveName = dirs[utilityDirectiveIndex].name;

          const previousDirectives = dirs.slice(0, utilityDirectiveIndex);

          const mergedPreviousDirectives = baseMergeDirectivesByObjects(previousDirectives);

          switch (utilityDirectiveName) {
            case "#include": {
              const finedElementIndex = mergedPreviousDirectives.findIndex((dir) => dir.name === directiveName);

              const includedObjectAtoms = Object.entries(mergedPreviousDirectives[finedElementIndex].objects)
                .filter((obj) => {
                  const [key, value] = obj;
                  return utilityDirectiveAtoms.includes(key);
                })
                .reduce((object, entry) => ({ ...object, [entry[0]]: entry[1] }), {} as DirectiveObject);

              return recMergeDirectivesByUtilities(
                [...mergedPreviousDirectives, ...dirs.slice(utilityDirectiveIndex)].reduce((acc, dir, index) => {
                  if (index === utilityDirectiveIndex) {
                    return acc;
                  }

                  if (index === finedElementIndex) {
                    return [...acc, { ...dir, objects: includedObjectAtoms }];
                  }

                  return [...acc, dir];
                }, [] as Directive[])
              );
            }
            case "#exclude": {
              const finedElementIndex = mergedPreviousDirectives.findIndex((dir) => dir.name === directiveName);

              const includedObjectAtoms = Object.entries(mergedPreviousDirectives[finedElementIndex]?.objects)
                .filter((obj) => {
                  const [key, value] = obj;
                  return !utilityDirectiveAtoms.includes(key);
                })
                .reduce((object, entry) => ({ ...object, [entry[0]]: entry[1] }), {} as DirectiveObject);

              return recMergeDirectivesByUtilities(
                [...mergedPreviousDirectives, ...dirs.slice(utilityDirectiveIndex)].reduce((acc, dir, index) => {
                  if (index === utilityDirectiveIndex) {
                    return acc;
                  }

                  if (index === finedElementIndex) {
                    return [...acc, { ...dir, objects: includedObjectAtoms }];
                  }

                  return [...acc, dir];
                }, [] as Directive[])
              );
            }
            default:
              return dirs;
          }
        };

        // находим хотя бы один элемент с утилитарной директивой
        const utilityDirectiveExist = directives.some((directive) => directive.utilityDirective?.name);

        if (!utilityDirectiveExist) {
          return baseMergeDirectivesByObjects(directives);
        } else {
          return recMergeDirectivesByUtilities(directives);
        }
      }
      /**
       * Отбрасывает все предыдущие значения и оставляем только самые близкие
       * к конечному эндпоинту директивы.
       */
      case "override": {
        return directives.reduce((acc, directive) => {
          const directiveIndex = acc.findIndex((dir) => dir.name === directive.name);

          if (~directiveIndex) {
            if (!directive.utilityDirective?.name) acc[directiveIndex] = directive;

            return acc;
          }

          return [...acc, directive];
        }, [] as Directive[]);
      }
      default: {
        return directives;
      }
    }
  }

  // methods and endpoints
  private recEndpoint({
    pathname,
    endpoints,
    directives,
    method,
    errors
  }: {
    pathname: string;
    endpoints: EndpointsContext[];
    directives: Directive[];
    method: Method;
    errors: (CustomError | undefined)[];
  }) {
    if (endpoints.length === 0) {
      this.endpoints.push({
        pathname,
        directives,
        method,
        errors
      });

      return;
    }

    endpoints.forEach((endpoint) => {
      const name = endpoint.ID().text;
      const currentDirectives = endpoint.directives().map((directive) => this.parseDirective(directive)) as Directive[];

      // accumulating
      this.recEndpoint({
        pathname: `${pathname}/${name}`,
        endpoints: endpoint.endpoints(),
        directives: this.overridingDirectives([...directives, ...currentDirectives], this.options.overrideDirectives),
        method,
        errors:
          currentDirectives
            .find((directive) => directive.name === "@error")
            ?.enums?.map((e) => this.errors.find((error) => error.name === e)) || []
      });
    });
  }

  public enterMethods(ctx: MethodsContext) {
    const method = ctx.METHOD().text as Method;
    const endpoints = ctx.endpoints();

    this.recEndpoint({ pathname: "", endpoints, directives: [], method, errors: [] });
  }

  public enterDefines(ctx: DefinesContext) {
    const errors = ctx.errors();

    errors.forEach((error) => {
      this.errors.push({
        name: String(error.ENTITY_NAME().text),
        code: Number(error.NUMBER().text),
        object: this.parseDirectiveObjects(error.objects().object())
      });
    });
  }

  /**
   * Getters
   */

  public getProtocol(): string {
    return this.protocol;
  }

  public getEndpoints() {
    return this.endpoints;
  }

  public getProtocolVersion() {
    return this.protocolVersion;
  }

  public getErrors() {
    return this.errors;
  }
}

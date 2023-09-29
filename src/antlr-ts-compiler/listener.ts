import { logger } from "@utils/logger";
import { TypoShieldListener } from "./grammar/TypoShieldListener";
import {
  DirectivesContext,
  EndpointsContext,
  MethodsContext,
  ObjectContext,
  ProtocolContext,
} from "./grammar/TypoShieldParser";
import {
  Directive,
  DirectiveObject,
  Endpoint,
  HTTPVersionType,
  Method,
  ParserListenerOptions,
  Protocol,
} from "./types";

export class ParseTypoShieldListener implements TypoShieldListener {
  // service
  private protocol: Protocol;
  private protocolVersion: HTTPVersionType;
  private endpoints: Array<Endpoint>;
  private options: ParserListenerOptions;

  constructor(options?: ParserListenerOptions) {
    this.endpoints = [];
    this.protocol = "HTTP";
    this.protocolVersion = "1.1";
    this.options = options || {};
  }

  // protocols
  public enterProtocol(ctx: ProtocolContext) {
    this.protocol = ctx.PROTOCOL().text as Protocol;

    const protocolVersion = ctx.PROTOCOL_VERSION()?.text;
    if (protocolVersion === undefined) {
      logger.log(
        "Protocol version not found, version HTTP/1.1 was set as default",
        "warning"
      );
    } else {
      this.protocolVersion = ctx.PROTOCOL_VERSION()?.text as HTTPVersionType;
    }
  }

  private parseDirectiveObjects(
    objects: ObjectContext[] | undefined
  ): DirectiveObject {
    if (objects === undefined) {
      return {} as DirectiveObject;
    }

    return objects.reduce((acc, object) => {
      const key = object.ENDPOINT_NAME().text;
      const value = object.TYPE().text;

      return {
        ...acc,
        [key]: value,
      };
    }, {} as DirectiveObject);
  }

  private parseDirective(directive: DirectivesContext) {
    const name = directive.DIRECTIVE().text;
    const dirName = directive.DIR_NAME()?.text;
    const dirType = directive.DIR_TYPE()?.text;
    const objects = this.parseDirectiveObjects(directive?.objects()?.object());

    return {
      name,
      dirName,
      dirType,
      objects,
    };
  }

  private overridingDirectives(
    directives: Directive[],
    overriding: ParserListenerOptions["overrideDirectives"]
  ): Directive[] {
    if (overriding === "none" || overriding === undefined) {
      return directives;
    }

    if (overriding === "merge") {
      return directives.reduce((acc, directive) => {
        const names = acc.map((ac) => ac.name);
        const index = names.findIndex((n) => n === directive.name);

        if (~index) {
          acc[index] = {
            ...acc[index],
            objects: { ...acc[index].objects, ...directive.objects },
          };
          return acc;
        }

        return [...acc, directive];
      }, [] as Directive[]);
    }

    // TODO: поправить логику оверрайдинга (сейчас наоборот)
    return directives.reduce((acc, directive) => {
      if (acc.map((ac) => ac.name).includes(directive.name)) {
        return acc;
      }

      return [...acc, directive];
    }, [] as Directive[]);
  }
  // methods and endpoints
  private recEndpoint({
    pathname,
    endpoints,
    directives,
    method,
  }: {
    pathname: string;
    endpoints: EndpointsContext[];
    directives: Directive[];
    method: Method;
  }) {
    if (endpoints.length === 0) {
      this.endpoints.push({
        pathname,
        directives,
        method,
      });

      return;
    }

    endpoints.forEach((endpoint) => {
      const name = endpoint.ENDPOINT_NAME().text;
      const currentDirectives = endpoint
        .directives()
        .map((directive) => this.parseDirective(directive));

      // accumulating
      this.recEndpoint({
        pathname: `${pathname}/${name}`,
        endpoints: endpoint.endpoints(),
        directives: this.overridingDirectives(
          [...directives, ...currentDirectives],
          this.options.overrideDirectives
        ),
        method,
      });
    });
  }

  public enterMethods(ctx: MethodsContext) {
    const method = ctx.METHOD().text as Method;
    const endpoints = ctx.endpoints();

    this.recEndpoint({ pathname: "", endpoints, directives: [], method });
  }

  public getProtocol(): string {
    return this.protocol;
  }

  public getEndpoints() {
    return this.endpoints;
  }

  public getProtocolVersion() {
    return this.protocolVersion;
  }
}

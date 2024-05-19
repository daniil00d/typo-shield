import { ParserError } from '../core/errors/parserError';
import { ParseWarning } from '../core/errors/parseWarning';
import { parseProtocol } from './08.protocol_parser';
import { getDirective, getDirectiveByName } from './10.getDirective';

const et_ParamsUserTree1 = `
  |> HTTP/1.1
    <|> POST
      <|> user
        @body json {a: Number}
        <|> consumer
          @serve CreateConsumer
          @body json #include(a)
        <|> admin
          @serve CreateAdmin
        <|> manager
          @serve CreateManager
    <|> GET
      :> user
        <|> list
          @serve GetList
        <|> @param 'login' as String
          :> get
` as const;

export const StartSeparator = '|>' as const;
export const StartSeparatorRegExp = String.raw`\|>`;
export const OrSeparator = '<|>' as const;
export const ForwardSeparator = ':>' as const;
export const RowSeparator = '\n' as const;
export const Tab = '  ' as const;
export const Protocol = ['HTTP'] as const;
export const HTTPVersion = ['1', '1.1', '2', '3'] as const;
export const Method = ['GET', 'POST'] as const;

export type ProtocolType = (typeof Protocol)[number];
export type MethodType = (typeof Method)[number];
export type HTTPVersionType = (typeof HTTPVersion)[number];
export type DSL = string;
export type DSLLexeme = string;

export type DSLTree = {
  root: DSLLexeme;
  subtree?: DSLTree[];
};

export type EndpointTree = {
  protocol: ProtocolType;
  protocolVersion?: HTTPVersionType;
  endpoints: {
    pathname: string;
    method: MethodType;
    imp: string | undefined;
  }[];
};

const parser = (dsl: string): EndpointTree => {
  const normalizeDSL = (subTreeDSL: DSL[]): DSL[] => {
    return subTreeDSL.map((tree) => tree.replace(Tab, ''));
  };

  const recParser = (subTreeDSL: DSL[]): DSLTree => {
    // как правило, всегда первый элемент - это корень дерева
    const root = subTreeDSL[0];

    // берем все остальное поддерево без корня
    const otherLexemes = subTreeDSL.slice(1);

    // если поддерево пустое, то просто возвращаем корень как {root}
    if (otherLexemes.length === 0) {
      return { root };
    }
    // ...
    // извлекаем индексы всех ближайших корней поддерева
    const indexes = otherLexemes.reduce((ind, lex, index) => {
      if (lex.match(/^\s\s[|:><@A-Za-z]/)?.length) {
        return [...ind, index];
      }

      return ind;
    }, [] as number[]);

    // объявляем главное дерева как ветвь дерева на предыдущем этапе рекурсии
    const mainTree = {
      root,
      subtree: [] as string[][],
    };

    // заполняем ветви в виде поддеревьев
    indexes.forEach((ind, index) => {
      const subArrayOfSubTrees = otherLexemes.slice(ind, indexes[index + 1]);
      mainTree.subtree.push(normalizeDSL(subArrayOfSubTrees));
    });
    // ...

    return {
      ...mainTree,
      subtree: mainTree.subtree.map((sub: any) => recParser(sub)),
    };
  };

  // нормализуем дерево
  const lexemes = dsl
    .split(RowSeparator)
    .map((row) => row.replace(Tab, ''))
    .filter((row) => row);

  /**
   * Введем некоторые правила, чтобы установить, как правильно интерпретировать
   * дерево в виде дсл лексем:
   *
   * 1. [x] Самый первый корень - протокол, если там не содержится протокол -> Error('Protocol type')
   * 2. [ ] На втором уровне находятся протоколы, если нет - ошибка
   * 3. [ ] Обходим поддерево обходом в глубину
   * 4. [ ] проверка на директивы
   * 5. [ ] проверка на сепараторы ветвления
   */

  const parseTreeToEndpoints = (tree: DSLTree): EndpointTree => {
    const { protocol, version } = parseProtocol(tree.root);

    let mainArray = [] as { pathname: string; serveImp: string | undefined }[];
    let parentPrefix = '';
    const endpoints = [] as {
      pathname: string;
      method: MethodType;
      imp: string | undefined;
    }[];

    const getEndpointName = (name: string): string => {
      return name.match(/\w+/)?.[0] || 'unknown';
    };

    const parseEndpoints = (_tree: DSLTree) => {
      if (!_tree.root.match(/<?\||:>/)?.length) {
        return;
      }

      if (_tree.subtree === undefined || _tree.subtree.every((__tree) => getDirective(__tree.root).type !== undefined)) {
        mainArray.push({
          pathname: `${parentPrefix}/${getEndpointName(_tree.root)}`,
          serveImp: getDirectiveByName(_tree.subtree?.[0].root, 'serve'),
        });

        return;
      }

      parentPrefix = `${parentPrefix}/${getEndpointName(_tree.root)}`;
      _tree.subtree.forEach(parseEndpoints);
    };

    tree.subtree?.forEach((_tree) => {
      const method = _tree.root;
      mainArray = [];
      parentPrefix = '';
      _tree.subtree?.forEach(parseEndpoints);

      mainArray.forEach((endpoint) => {
        endpoints.push({
          pathname: endpoint.pathname,
          method: getEndpointName(method) as MethodType,
          imp: endpoint.serveImp,
        });
      });
    });

    return {
      protocol,
      protocolVersion: version || '1.1',
      endpoints: endpoints,
    };
  };

  const parseTree = recParser(lexemes);

  const endpointTree = parseTreeToEndpoints(parseTree);

  // console.log(parseTree);
  console.log(endpointTree);

  return endpointTree;
};

export const ex_endpoint_tree = parser(et_ParamsUserTree1);

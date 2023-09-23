import { Tab } from "./constants";
import { parseDirective, parseDirectiveByName } from "./directives";
import { parseProtocol } from "./protocol";
import { DSL, DSLTree, MethodType, EndpointTree } from "./types";

abstract class AParser {
  /** нормализация дсл*/
  abstract normalizeDSL(subTreeDSL: DSL[]): DSL[];

  /** нормализация дсл*/
  abstract recParser(subTreeDSL: DSL[]): DSLTree;

  /** нормализация дсл*/
  abstract parse(tree: DSLTree): EndpointTree;
}

// TODO: разнести на два
export class Parser extends AParser {
  public normalizeDSL(subTreeDSL: DSL[]): DSL[] {
    return subTreeDSL.map((tree) => tree.replace(Tab, ""));
  }

  public recParser(subTreeDSL: DSL[]): DSLTree {
    // как правило, всегда первый элемент - это корень дерева
    const root = subTreeDSL[0];

    // берем все остальное поддерево без корня
    const otherLexemes = subTreeDSL.slice(1);

    // если поддерево пустое, то просто возвращаем корень как {root}
    if (otherLexemes.length === 0) {
      return { root };
    }

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
      mainTree.subtree.push(this.normalizeDSL(subArrayOfSubTrees));
    });

    return {
      ...mainTree,
      subtree: mainTree.subtree.map((sub: any) => this.recParser(sub)),
    };
  }

  public parse(tree: DSLTree): EndpointTree {
    const { protocol, version } = parseProtocol(tree.root);

    let mainArray = [] as { pathname: string; serveImp: string | undefined }[];
    let parentPrefix = "";
    const endpoints = [] as EndpointTree["endpoints"];

    const getEndpointName = (name: string): string => {
      return name.match(/\w+/)?.[0] || "unknown";
    };

    const parseEndpoints = (_tree: DSLTree) => {
      if (!_tree.root.match(/<?\||:>/)?.length) {
        return;
      }

      if (
        _tree.subtree === undefined ||
        _tree.subtree.every(
          (__tree) => parseDirective(__tree.root).type !== undefined
        )
      ) {
        mainArray.push({
          pathname: `${parentPrefix}/${getEndpointName(_tree.root)}`,
          serveImp: parseDirectiveByName(_tree.subtree?.[0].root, "serve")?.[0],
        });

        return;
      }

      parentPrefix = `${parentPrefix}/${getEndpointName(_tree.root)}`;
      _tree.subtree.forEach(parseEndpoints);
    };

    tree.subtree?.forEach((_tree) => {
      const method = _tree.root;
      mainArray = [];
      parentPrefix = "";
      _tree.subtree?.forEach(parseEndpoints);

      mainArray.forEach((endpoint) => {
        endpoints.push({
          pathname: endpoint.pathname,
          method: getEndpointName(method) as MethodType,
          implementationFuncName: endpoint.serveImp,
        });
      });
    });

    return {
      protocol,
      protocolVersion: version || "1.1",
      endpoints: endpoints,
    };
  }
}

import { Tab } from './constants';
import { parseDirective, parseDirectiveByName } from './directives';
import { parseProtocol } from './protocol';
import { DSL, DSLTree, EndpointTree, MethodType } from './types';

abstract class AParser {
  /** парсинг дсл */
  abstract parse(tree: DSLTree): EndpointTree;
}

export class Parser extends AParser {
  public parse(tree: DSLTree): EndpointTree {
    const { protocol, version } = parseProtocol(tree.root);

    let mainArray = [] as { pathname: string; serveImp: string | undefined }[];
    let parentPrefix = '';
    const endpoints = [] as EndpointTree['endpoints'];

    const getEndpointName = (name: string): string => {
      return name.match(/\w+/)?.[0] || 'unknown';
    };

    const parseEndpoints = (_tree: DSLTree) => {
      if (!_tree.root.match(/<?\||:>/)?.length) {
        return;
      }

      if (
        _tree.subtree === undefined
        || _tree.subtree.every(
          (__tree) => parseDirective(__tree.root).type !== undefined,
        )
      ) {
        mainArray.push({
          pathname: `${parentPrefix}/${getEndpointName(_tree.root)}`,
          serveImp: parseDirectiveByName(_tree.subtree?.[0].root, 'serve')?.[0],
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
          implementationFuncName: endpoint.serveImp,
        });
      });
    });

    return {
      protocol,
      protocolVersion: version || '1.1',
      endpoints: endpoints,
    };
  }
}

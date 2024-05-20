import { EndpointTree, ImplementationMap } from 'typo-shield-parsers';
import logger from 'typo-shield-logger';

export const bindImplementation = (
  imps: ImplementationMap,
  endpointTree: EndpointTree,
): EndpointTree => {
  return {
    ...endpointTree,
    endpoints: endpointTree.endpoints.map((endpoint) => {
      const implementationName = endpoint.directives?.find(
        (directive) => directive.name === '@serve',
      )?.dirName;

      if (implementationName && imps[implementationName]) {
        logger.log(`Endpoint ${endpoint.pathname} is running!`, 'success');
      }

      return {
        ...endpoint,
        implementationFunc: implementationName
          ? imps[implementationName]
          : undefined,
      };
    }),
  };
};

import { ImplementationMap, EndpointTree } from "./types";

export const bindImplementation = (
  imps: ImplementationMap,
  endpointTree: EndpointTree
): EndpointTree => {
  return {
    ...endpointTree,
    endpoints: endpointTree.endpoints.map((endpoint) => {
      const impName = endpoint.implementationFuncName;

      return {
        ...endpoint,
        implementationFunc: impName ? imps[impName] : undefined,
      };
    }),
  };
};

import { logger } from "../utils/logger";
import { ImplementationMap, EndpointTree } from "./types";

export const bindImplementation = (
  imps: ImplementationMap,
  endpointTree: EndpointTree
): EndpointTree => {
  return {
    ...endpointTree,
    endpoints: endpointTree.endpoints.map((endpoint) => {
      const implementationName = endpoint.implementationFuncName;

      if (implementationName) {
        logger.log(`Endpoint ${endpoint.pathname} is running!`, "success");
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

import { Compiler } from "@compiler/index";
import { DSL, ImplementationMap } from "@compiler/types/common";
import { bindImplementation } from "./bind";
import { ExpressServer } from "./express-integration";

export const getServer = (dsl: DSL, implementations: ImplementationMap) => {
  const endpointTree = new Compiler(dsl);
  const boundEndpoints = bindImplementation(
    implementations,
    endpointTree.getEndpointTree()
  );

  const server = new ExpressServer(3000);

  server.bindEndpoint(boundEndpoints);

  return server;
};

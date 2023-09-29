import { Compiler } from "../antlr-ts-compiler";
import { ExpressServer } from "../server/express-intagration";
import { bindImplementation } from "./bind";
import { DSL, ImplementationMap } from "./types";

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

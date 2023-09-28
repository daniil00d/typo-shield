import { ExpressServer } from "../server/express-intagration";
import { bindImplementation } from "./bind";
import { Lexer } from "./lexer";
import { Parser } from "./parser";
import { ImplementationMap, DSL } from "./types";

export const getServer = (dsl: DSL, implementations: ImplementationMap) => {
  const lexer = new Lexer();
  const parser = new Parser();

  const lexemes = lexer.getLexemes(dsl);
  const tokenTree = lexer.recParser(lexemes);
  const endpointTree = parser.parse(tokenTree);
  console.log(endpointTree.endpoints);

  const boundEndpoints = bindImplementation(implementations, endpointTree);

  const server = new ExpressServer(3000);

  server.bindEndpoint(boundEndpoints);

  return server;
};

import { Compiler } from "@compiler/index";
import { EndpointTree } from "@compiler/types";
import { ExpressServer } from "./express-integration";
import { ParserListenerOptions } from "@compiler/types";
import { DirectiveServeName } from "../level-type-compiler";
import { Request, Response } from "express";
import { logger } from "@utils/logger";

export class App<T extends string> {
  private DSL: T;
  private endpointTree: EndpointTree;
  public server: ExpressServer;

  constructor(dsl: T, options?: ParserListenerOptions) {
    this.DSL = dsl;

    const endpointTree = new Compiler(dsl, options);
    const server = new ExpressServer(3000);

    this.endpointTree = endpointTree.getEndpointTree();
    this.server = server;
  }

  public registerImplementation(name: DirectiveServeName<T>, callback: (req: Request, res: Response) => void) {
    const endpoints = this.endpointTree.endpoints.filter((endpoint) => {
      return endpoint.directives?.some((directive) => directive.name === "@serve" && directive.dirName === name);
    });

    endpoints.forEach((endpoint) => {
      logger.log(`Endpoint ${endpoint.pathname} is running!`, "success");
      this.server.registerRoute(endpoint.method, endpoint.pathname, callback);
    });
  }
}

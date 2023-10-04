import { Compiler } from "@compiler/index";
import { EndpointTree } from "@compiler/types";
import { ExpressServer } from "./express-integration";
import { ParserListenerOptions } from "@compiler/types";
import { DirectiveServeName } from "../level-type-compiler";
import { Request, Response } from "express";
import { logger } from "@utils/logger";
import { ExpressServerOptions } from "./types";

export const PORT = 3000;

type ExpressFunction = (req: Request, res: Response) => void;
type Implementation<T extends string> = { name: T; callback: ExpressFunction };

export class App<T extends string> extends ExpressServer {
  private DSL: T;
  private endpointTree: EndpointTree;

  constructor(dsl: T, options?: ParserListenerOptions & ExpressServerOptions) {
    super(options?.port || PORT);
    this.DSL = dsl;

    const endpointTree = new Compiler(dsl, options);

    this.endpointTree = endpointTree.getEndpointTree();
  }

  public registerImplementation(imps: Implementation<DirectiveServeName<T>>[]): void;
  public registerImplementation(name: DirectiveServeName<T>, callback?: ExpressFunction): void;

  public registerImplementation(
    nameOrImps: DirectiveServeName<T> | Implementation<DirectiveServeName<T>>[],
    callback?: (req: Request, res: Response) => void
  ) {
    const registerOneImplementation = (name: string, cb: ExpressFunction) => {
      const endpoints = this.endpointTree.endpoints.filter((endpoint) => {
        return endpoint.directives?.some((directive) => directive.name === "@serve" && directive.dirName === name);
      });

      endpoints.forEach((endpoint) => {
        logger.log(`Endpoint ${endpoint.pathname} is running!`, "success");
        this.registerRoute(endpoint.method, endpoint.pathname, cb);
      });
    };

    if (Array.isArray(nameOrImps)) {
      nameOrImps.forEach((imp) => registerOneImplementation(imp.name, imp.callback));
    } else {
      callback && registerOneImplementation(nameOrImps, callback);
    }
  }
}

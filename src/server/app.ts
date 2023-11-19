import { Compiler } from "@compiler/index";
import { EndpointTree } from "@compiler/types";
import { ExpressServer, NextFunc } from "./express-integration";
import { ParserListenerOptions } from "@compiler/types";
import { DirectiveServeName } from "../level-type-compiler";
import { logger } from "@utils/logger";
import { EPRequest, EPResponse, ExpressServerOptions } from "./types";
import { DefineError, GetErrorNames, ObjectsToRecord } from "@type-compiler/lexer";
import { Request, Response } from "express";

export const PORT = 3000;

type ExpressFunction<T extends string> = (req: EPRequest, res: EPResponse<T>) => void;
type Implementation<T extends string> = { name: T; callback: ExpressFunction<T> };

export class App<T extends string> extends ExpressServer {
  private DSL: T;
  private endpointTree: EndpointTree;

  constructor(dsl: T, options?: ParserListenerOptions & ExpressServerOptions) {
    const endpointTree = new Compiler(dsl, options);

    super({
      protocolVersion: endpointTree.getProtocolVersion(),
      port: options?.port || PORT
    });

    this.DSL = dsl;

    this.endpointTree = endpointTree.getEndpointTree();
  }

  public registerImplementation(imps: Implementation<T>[]): void;
  public registerImplementation(name: DirectiveServeName<T>, callback?: ExpressFunction<T>): void;

  public registerImplementation(nameOrImps: DirectiveServeName<T> | Implementation<T>[], callback?: ExpressFunction<T>) {
    const cbWrapper = (cb: ExpressFunction<T>) => {
      const sendError = (response: Response, source: { name: string; json: Record<string, any> }) => {
        const error = this.endpointTree.errors.find((error) => error.name === source.name);
        if (!error) return;

        response.statusCode = error.code;
        response.json({ name: source.name, ...source.json });
      };

      return (request: Request, response: Response) => {
        cb(request, {
          ...response,
          sendError: <ErrorName extends string>(name: ErrorName, json: ObjectsToRecord<DefineError<T>>) =>
            sendError(response, { name, json })
        } as Parameters<ExpressFunction<T>>[1]);
      };
    };

    const registerOneImplementation = (name: string, cb: ExpressFunction<T>) => {
      const endpoints = this.endpointTree.endpoints.filter((endpoint) => {
        return endpoint.directives?.some((directive) => directive.name === "@serve" && directive.dirName === name);
      });

      endpoints.forEach((endpoint) => {
        logger.log(`Endpoint ${endpoint.pathname} is running!`, "success");

        this.registerRoute(endpoint.method, endpoint.pathname, cbWrapper(cb));
      });
    };

    if (Array.isArray(nameOrImps)) {
      nameOrImps.forEach((imp) => registerOneImplementation(imp.name, cbWrapper(imp.callback)));
    } else {
      callback && registerOneImplementation(nameOrImps, callback);
    }
  }
}

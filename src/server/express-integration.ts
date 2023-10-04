import express, { NextFunction, Request, Response } from "express";
import { MethodType } from "../drafts/ts-parser/types";
import { EndpointTree } from "@compiler/types";

type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

export class ExpressServer {
  private port = 3000;
  private server: express.Express;
  private endpoints: string[];

  constructor(port: number) {
    this.server = express();
    this.port = port;
    this.endpoints = [];
  }

  private initRegistration() {
    this.registerRoute("GET", "/", (req, res) => {
      //  Типа SSR
      res.send(`<ul>${this.endpoints.map((pathname) => `<li><a href=${pathname}>${pathname}</a></li>`).join("")}</ul>`);
    });
  }

  public registerRoute(method: MethodType, pathname: string, nextFunc: (req: Request, res: Response) => void) {
    if (!this.endpoints.includes(pathname)) this.endpoints.push(pathname);

    switch (method) {
      case "POST":
        return this.server.get(pathname, nextFunc);
      case "GET":
        return this.server.get(pathname, nextFunc);
    }
  }

  public registerMiddleware(middleware: MiddlewareFunction): void;
  public registerMiddleware(pathname: string, middleware?: MiddlewareFunction): void;
  public registerMiddleware(pathnameOrMiddleware: string | MiddlewareFunction, middleware?: MiddlewareFunction) {
    if (typeof pathnameOrMiddleware === "string") {
      middleware !== undefined && this.server.use(pathnameOrMiddleware, middleware);
    } else {
      this.server.use(pathnameOrMiddleware);
    }
  }

  public bindEndpoint(endpointTree: EndpointTree) {
    endpointTree.endpoints.forEach((endpoint) => {
      const implementation = endpoint.implementationFunc;

      if (endpoint.pathname && implementation !== undefined) {
        this.endpoints.push(endpoint.pathname);
        this.registerRoute(endpoint.method, endpoint.pathname, (req, res) => res.json(implementation()));
      }
    });
  }

  start(callback?: () => void) {
    this.initRegistration();

    this.server.listen(this.port, () => {
      console.log(`[server]: Server is running at http://localhost:${this.port}`);
      callback && callback();
    });
  }
}

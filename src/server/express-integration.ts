import express, { Request, Response } from "express";
import { MethodType } from "../drafts/ts-parser/types";
import { EndpointTree } from "@compiler/types";

export class ExpressServer {
  private port = 3000;
  private app: express.Express;
  private endpoints: string[];

  constructor(port: number) {
    this.app = express();
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
    this.endpoints.push(pathname);

    switch (method) {
      case "POST":
        return this.app.get(pathname, nextFunc);
      case "GET":
        return this.app.get(pathname, nextFunc);
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

    this.app.listen(this.port, () => {
      console.log(`[server]: Server is running at http://localhost:${this.port}`);
      callback && callback();
    });
  }
}

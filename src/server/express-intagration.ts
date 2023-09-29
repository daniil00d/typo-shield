import express, { Request, Response } from "express";
import { MethodType } from "../ts-parser/types";
import { EndpointTree } from "../antlr-ts-compiler/types";

export class ExpressServer {
  private port = 3000;
  private app: express.Express;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  public registerRoute(
    method: MethodType,
    pathname: string,
    nextFunc: (req: Request, res: Response) => void
  ) {
    switch (method) {
      case "POST":
        return this.app.post(pathname, nextFunc);
      case "GET":
        return this.app.get(pathname, nextFunc);
    }
  }

  public bindEndpoint(endpointTree: EndpointTree) {
    endpointTree.endpoints.forEach((endpoint) => {
      const implementation = endpoint.implementationFunc;

      if (endpoint.pathname && implementation !== undefined) {
        this.registerRoute(endpoint.method, endpoint.pathname, (req, res) =>
          res.json(implementation())
        );
      }
    });
  }

  start(callback?: () => void) {
    this.app.listen(this.port, () => {
      console.log(
        `[server]: Server is running at http://localhost:${this.port}`
      );
      callback && callback();
    });
  }
}

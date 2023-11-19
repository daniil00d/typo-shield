import fs from "fs";
import path from "path";
import express, { NextFunction, Request, Response } from "express";
import spdy from "spdy";

import { MethodType } from "../drafts/ts-parser/types";
import { EndpointTree, HTTPVersionType } from "@compiler/types";

const CERT_DIR = path.resolve(__dirname, "../../cert");

type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

export interface ExpressServerOptions {
  port: number;
  host: string;
  protocolVersion: HTTPVersionType;
}

export type NextFunc = (req: Request, res: Response) => void;

export class ExpressServer {
  // config
  private port = 3000;
  private httpVersion: HTTPVersionType = "1.1";
  private host = "localhost"; // unused
  // server
  private app: express.Express;
  private endpoints: string[];

  constructor(options: Partial<ExpressServerOptions>) {
    this.app = express();
    this.port = options.port ?? this.port;
    this.httpVersion = options.protocolVersion ?? this.httpVersion;
    this.endpoints = [];
  }

  private initRegistration() {
    this.registerRoute("GET", "/", (req, res) => {
      //  Типа SSR
      res.send(`<ul>${this.endpoints.map((pathname) => `<li><a href=${pathname}>${pathname}</a></li>`).join("")}</ul>`);
    });
  }
  /**
   * Поддержка только версий HTTP/1.1 & HTTP/2
   *
   * Для того, чтобы поддержать HTTP/3 нужно использовать https://github.com/aaronik/node-quic
   * На данный момент нет поддержки для Express
   */
  private getServerByHTTPVersion(httpVersion: HTTPVersionType) {
    switch (httpVersion) {
      case "1.1":
        return this.app;
      case "2": {
        // TODO: вынести в папку ./http2
        return spdy.createServer(
          {
            key: fs.readFileSync(`${CERT_DIR}/server.key`),
            cert: fs.readFileSync(`${CERT_DIR}/server.cert`)
          },
          this.app
        );
      }
      default:
        return this.app;
    }
  }

  public registerRoute(method: MethodType, pathname: string, nextFunc: NextFunc) {
    if (!this.endpoints.includes(pathname)) this.endpoints.push(pathname);

    switch (method) {
      case "POST":
        return this.app.get(pathname, nextFunc);
      case "GET":
        return this.app.get(pathname, nextFunc);
    }
  }

  public registerMiddleware(middleware: MiddlewareFunction): void;
  public registerMiddleware(pathname: string, middleware?: MiddlewareFunction): void;
  public registerMiddleware(pathnameOrMiddleware: string | MiddlewareFunction, middleware?: MiddlewareFunction) {
    if (typeof pathnameOrMiddleware === "string") {
      middleware !== undefined && this.app.use(pathnameOrMiddleware, middleware);
    } else {
      this.app.use(pathnameOrMiddleware);
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

    const server = this.getServerByHTTPVersion(this.httpVersion);
    server.listen(this.port, () => {
      console.log(`[server]: Server is running at http://localhost:${this.port}`);
      callback && callback();
    });
  }
}

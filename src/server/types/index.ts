import { GetErrorNames } from "@type-compiler/lexer";
import { Request, Response } from "express";

export type ExpressServerOptions = {
  /**
   * @default 3000
   */
  port?: number;
};

export interface EPResponse<DSL extends string> extends Response {
  sendError: (name: GetErrorNames<DSL>, obj: Record<string, any>) => void;
}

export interface EPRequest extends Request {}

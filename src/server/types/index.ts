import { DefineError, GetErrorNames, ObjectsToRecord } from "@type-compiler/index";
import { GetAllQueries } from "@type-compiler/query";
import { Request, Response } from "express";

export type ExpressServerOptions = {
  /**
   * @default 3000
   */
  port?: number;
};

type SpecType<DSL extends string> = ObjectsToRecord<DefineError<DSL>>;
type SpecEnumType<DSL extends string, P extends string> = SpecType<DSL> extends Record<string, any>
  ? SpecType<DSL>[P]["object"]
  : {};

export interface EPResponse<DSL extends string> extends Response {
  sendError: <ErrorName extends GetErrorNames<DSL>>(name: ErrorName, obj: SpecEnumType<DSL, ErrorName>) => void;
}

export interface EPRequest<DSL extends string> extends Request {
  query: GetAllQueries<DSL>;
}

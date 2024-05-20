export type SwaggerFileType = 'json' | 'yaml';

export interface SwaggerRoot {
  /**
   * The OpenAPI version that the OpenAPI document uses.
   */
  openapi: string;
  /**
   * The information about the API.
   */
  info: Info;
  /**
   * An array of Server Objects, which provide connectivity information to a target server.
   */
  servers: Server[];
  /**
   * The available paths and operations for the API.
   */
  paths: Paths;
}

export interface Info {
  title: string;
  description: string;
  version: string;
}

export type Paths = Record<string, Method>;

export type Method = Record<string, MethodBody>;

export interface MethodBody {
  summary: string;
  description: string;
  responses: Responses;
}

export type Responses = Record<string, Response>;

export interface Response {
  description: string;
  content: Content;
}

export interface Content {
  'application/json': ApplicationJSON;
}

export interface ApplicationJSON {
  schema: Schema | Ref;
}

export type Ref = {
  '$ref': string;
};

export interface Schema {
  type: string;
  items: Items;
}

export interface Items {
  type: string;
}

export interface Server {
  url: string;
  description: string;
}

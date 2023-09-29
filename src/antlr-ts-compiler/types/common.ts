import { Directive, HTTPVersion, Method, Protocol } from "../constants";

/**
 * Common
 */

export type Protocol = (typeof Protocol)[number];
export type Method = (typeof Method)[number];
export type HTTPVersionType = (typeof HTTPVersion)[number];
export type DSL = string;
export type DSLLexeme = string;
export type DSLToken = string;

export type DirectiveType = (typeof Directive)[number];

export type DSLTree = {
  root: DSLLexeme;
  subtree?: DSLTree[];
};

/**
 * Implementions
 */

// TODO: пока что так
export type ImplementationFunc = () => Record<string, any>;

export type ImplementationMap = Record<string, ImplementationFunc>;

/**
 * Directives
 */
export type DirectiveObject = Record<string, string>;
export type Directive = {
  name: string;
  dirName: string | undefined;
  dirType: string | undefined;
  objects: DirectiveObject;
};

/**
 * Endpoints
 */

export type Endpoint = {
  pathname: string;
  method: Method;
  directives?: Directive[];
  implementationFuncName?: string;
  implementationFunc?: () => void;
};

export type EndpointTree = {
  protocol: Protocol;
  endpoints: Endpoint[];
};

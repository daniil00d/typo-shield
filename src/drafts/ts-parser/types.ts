import { Directive, HTTPVersion, Method, Protocol } from './constants';

export type ProtocolType = (typeof Protocol)[number];
export type MethodType = (typeof Method)[number];
export type HTTPVersionType = (typeof HTTPVersion)[number];
export type DSL = string;
export type DSLLexeme = string;
export type DSLToken = string;

export type DirectiveType = (typeof Directive)[number];

export type DSLTree = {
  root: DSLLexeme;
  subtree?: DSLTree[];
};

// TODO: пока что так
export type ImplementationFunc = () => Record<string, any>;

export type ImplementationMap = Record<string, ImplementationFunc>;

export type EndpointTree = {
  protocol: ProtocolType;
  protocolVersion?: HTTPVersionType;
  endpoints: {
    pathname: string;
    method: MethodType;
    implementationFuncName: string | undefined;
    implementationFunc?: ImplementationFunc;
  }[];
};

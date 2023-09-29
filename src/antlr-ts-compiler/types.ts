// parser

export type ParserListenerOptions = {
  /**
   * Затирание директив с одинаковыми именами
   * @default 'none'
   */
  overrideDirectives?: "override" | "merge" | "none";
};

export type Protocol = "HTTP";
export type Method = "POST" | "GET" | "PUT";
export type DirectiveObject = Record<string, string>;
export type Directive = {
  name: string;
  dirName: string | undefined;
  dirType: string | undefined;
  objects: DirectiveObject;
};

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

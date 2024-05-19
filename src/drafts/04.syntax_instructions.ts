import { Lexemes } from './03.lexeme_instructions';

type Protocols = 'HTTP' | 'gRPC' | 'WS';
type Methods = 'POST' | 'GET' | 'DELETE';
type Headers = any;

type Schema = {
  input: Record<string, any>;
  output: Record<string, any>;
  headers: Headers;
};

type PartSchema = {
  input: { id: string };
  output: { login: string; email: string };
  headers: {};
};

type GetProtocol<I extends string[]> = I extends [
  infer First extends string,
  ...infer Other,
]
  ? First extends `${infer Protocol extends Protocols} ~> ${infer Method extends Methods}`
    ? { protocol: Protocol; method: Method; meta: Other }
  : never
  : never;

type GetDirectives<I extends Record<string, any>> = I extends { meta: string[] }
  ? I['meta'] extends [infer First extends string, ...infer Other]
    ? First extends `#includes $${infer DirectiveName extends string}` ? Omit<I, 'meta'> & { directive: DirectiveName; meta: Other }
    : I
  : never
  : never;

// @ /user/get/{id: Number}
type ParameterType = 'Number' | 'String';
type GetURLParameters<URL extends string> = URL extends
  `${infer smt extends string}/{${infer Name extends string}: ${infer Type extends ParameterType}}`
  ? { name: Name; type: Type extends 'Number' ? number : string }
  : undefined;

type GetURL<I extends Record<string, any>> = I extends { meta: string[] }
  ? I['meta'] extends [infer First extends string, ...infer Other]
    ? First extends `@ ${infer URL extends string}` ? Omit<I, 'meta'> & { url: URL; meta: Other } & {
        parameters: GetURLParameters<URL>;
      }
    : I
  : never
  : never;

// > json::body::UserInput

type GetInput<
  I extends Record<string, any>,
  _Schema extends Schema,
> = I extends { meta: string[] }
  ? I['meta'] extends [infer First extends string, ...infer Other]
    ? First extends `> json::body::${infer InputSchemeName extends string}` ? Omit<I, 'meta'> & { input: _Schema['input']; meta: Other }
    : I
  : never
  : never;

// < json::output::UserOutput
type GetOutput<
  I extends Record<string, any>,
  _Schema extends Schema,
> = I extends { meta: string[] }
  ? I['meta'] extends [infer First extends string, ...infer Other]
    ? First extends `< json::output::${infer InputSchemeName extends string}` ? Omit<I, 'meta'> & { output: _Schema['output']; meta: Other }
    : I
  : never
  : never;

type GetHeaders<I extends Record<string, any>> = I;

export type Syntax = GetHeaders<
  GetOutput<
    GetInput<GetURL<GetDirectives<GetProtocol<Lexemes>>>, PartSchema>,
    PartSchema
  >
>['directive'];

export type DirectiveServeName<DSL extends string> = DSL extends `${string}@serve ${infer Name extends string};${infer Tail extends string}`
  ? Name | DirectiveServeName<Tail>
  : never;

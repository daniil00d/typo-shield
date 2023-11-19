export type DirectiveServeName<DSL extends string> =
  DSL extends `${string}@serve ${infer Name extends string};${infer Tail extends string}`
    ? Name | DirectiveServeName<Tail>
    : never;

type CError = {
  name: string;
  code: number;
};

type SwitchType<Type extends string> = Type extends "String" ? string : number;

type GetObject<PartOfObject extends string> = PartOfObject extends `${infer Name}:${infer Type extends "String" | "Number"}`
  ? { name: Name; type: SwitchType<Type> }
  : false;

type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

type GetSplittedObjects<DSL extends string> = Split<DSL, ",">;

type GetObjects<Objects extends string[], Acc extends any[] = []> = Objects extends [
  infer First extends string,
  ...infer Tail extends string[]
]
  ? GetObjects<Tail, [...Acc, GetObject<First>]>
  : Acc;

type ObjectToRecord<T extends any[], Acc = {}> = T extends [
  infer First extends { name: string; type: string | number },
  ...infer Tail extends { name: string; type: string | number }[]
]
  ? ObjectToRecord<Tail, Acc & Record<First["name"], First["type"]>>
  : Acc;

export type ObjectsToRecord<T extends any[], Acc = {}> = T extends [
  infer First extends { name: string },
  ...infer Tail extends any[]
]
  ? ObjectsToRecord<Tail, Acc & Record<First["name"], First>>
  : Acc;

export type DefineError<DSL extends string> =
  DSL extends `${string}error(${infer Code extends CError["name"]}, ${infer ErrorName extends CError["name"]}): JSON {${infer Object}}${infer Tail}`
    ? [
        {
          name: ErrorName;
          code: Code;
          object: ObjectToRecord<GetObjects<GetSplittedObjects<Object>>>;
        },
        ...(DefineError<Tail> extends any[] ? DefineError<Tail> : [])
      ]
    : [];

export type GetErrorNames<DSL extends string> = DefineError<DSL> extends any[] ? DefineError<DSL>[number]["name"] : string;

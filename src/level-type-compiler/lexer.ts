export type DirectiveServeName<DSL extends string> =
  DSL extends `${string}@serve ${infer Name extends string};${infer Tail extends string}`
    ? Name | DirectiveServeName<Tail>
    : never;

type CError = {
  name: string;
  code: number;
};

type GetObject<PartOfObject extends string> = PartOfObject extends `${infer Name}: ${infer Type extends "String" | "Number"}`
  ? { name: Name; type: Type }
  : false;

type GetObjects<PartDSL extends string> = PartDSL extends `${infer Object}${infer Tail}`
  ? [GetObject<Object>, ...(Tail extends `, ${infer NextObject}` ? GetObject<NextObject> : [])]
  : never;

export type DefineError<DSL extends string> =
  DSL extends `${string}error(${infer Code extends CError["name"]}, ${infer ErrorName extends CError["name"]}): JSON {${infer Object}}${infer Tail}`
    ? [
        {
          name: ErrorName;
          code: Code;
          // TODO: доделать
          object: GetObjects<Object>;
        },
        ...(DefineError<Tail> extends any[] ? DefineError<Tail> : [])
      ]
    : false;

export type GetErrorNames<DSL extends string> = DefineError<DSL> extends any[] ? DefineError<DSL>[number]["name"] : string;

type a = `
HTTP/1.1: {
  $define: {
    /// здесь описываем ошибки, которые могут потенциально исполниться во время
    /// работы эндпоинта
    error(404, EntityNotFound): JSON {message: String, fields: Number};
    error(409, EntityNameConflict): JSON {message: String};
    error(501, UndefinedError): JSON {message: String};
  };

  $GET: {
    > user: {
    @input JSON {a: Number, b: String};
      > get: {
        @serve GetUser;
        @error [EntityNameConflict, EntityNotFound, UndefinedError];
      };
    };
  };
};
`;
type b = DefineError<a>;
type c = GetErrorNames<a>;

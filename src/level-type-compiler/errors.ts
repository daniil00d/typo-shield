import { GetObjects, GetSplittedObjects, ObjectToRecord } from './objects';

type CError = {
  name: string;
  code: number;
};

export type DefineError<DSL extends string> = DSL extends
  `${string}error(${infer Code extends CError['name']}, ${infer ErrorName extends CError['name']}): JSON {${infer Object}}${infer Tail}` ? [
    {
      name: ErrorName;
      code: Code;
      object: ObjectToRecord<GetObjects<GetSplittedObjects<Object>>>;
    },
    ...(DefineError<Tail> extends any[] ? DefineError<Tail> : []),
  ]
  : [];

export type GetErrorNames<DSL extends string> = DefineError<DSL> extends any[] ? DefineError<DSL>[number]['name'] : string;

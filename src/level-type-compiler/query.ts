// export type GetAllQueries<DSL extends string> = DSL extends `${string}      > ${string}: {${infer U}      };${string}`
//   ? U
//   : string;

import { GetObjects, GetSplittedObjects, ObjectToRecord } from './objects';

type GetAllObjectQueries<
  DSL extends string,
  Acc extends string[] = [],
> = DSL extends `${string}@query JSON {${infer Object extends string}};${infer Tail extends string}`
  ? [...Acc, ...GetSplittedObjects<Object>, ...GetAllObjectQueries<Tail, Acc>]
  : Acc;

export type GetAllQueries<DSL extends string> = ObjectToRecord<GetObjects<GetAllObjectQueries<DSL>>>;

// ------------------------------ Test ----------------------------------

const test = `
HTTP/1.1: {
  $define: {
    /// здесь описываем ошибки, которые могут потенциально исполниться во время
    /// работы эндпоинта
    error(404, EntityNotFound): JSON { message: String };
    error(409, EntityNameConflict): JSON { message:String, fields: Number };
    error(501, UndefinedError): JSON { message: String };
  };

  $GET: {
    > user: {
    @body JSON {a: Number, b: String};
      > get: {
        @serve GetUser;
        @error [EntityNameConflict, EntityNotFound, UndefinedError];
        @query JSON {id1: String, id3: Number};
      };
      > get1: {
        @serve GetUser;
        @error [EntityNameConflict, UndefinedError];
        @query JSON { id2: String };
      };
    };
  };
};
` as const;

export type _GetAllQueries<DSL extends string> = GetAllObjectQueries<DSL>;

type a = GetAllQueries<typeof test>;

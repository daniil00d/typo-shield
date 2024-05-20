import { Compiler } from '../src/index';

const eptreedsl = (dsl: string) => dsl;

const endpoints = eptreedsl(`
HTTP/1.1: {
  $define: {
    /// здесь описываем ошибки, которые могут потенциально исполниться во время
    /// работы эндпоинта
    error(404, EntityNotFound): JSON { message: String };
    error(409, EntityNameConflict): JSON { message: String, fields: Number};
    error(501, UndefinedError): JSON { message: String };

    dto(UserDto): JSON { message: String };
  }

  $GET: {
    > user: {
    @body JSON {a: Number, b: String};
      > get: {
        @serve GetUser;
        @error [EntityNameConflict, EntityNotFound, UndefinedError];
        @query [UserDto];
      }
      > list: {
        @serve UserList;
        @body JSON #include(a);
        @error [EntityNameConflict, UndefinedError];
        @meta JSON {swaggerTag: "tas", swaggerTagDescription: "desc"};
      }
    }
  }

  $POST: {
    > user: {
    @body JSON {a: Number, b: String};
      > get: {
        @serve GetUser;
        @error [EntityNameConflict, EntityNotFound, UndefinedError];
        @query JSON { id: String, std: Number };
      }
      > list: {
        @serve UserList;
        @body JSON #include(a);
        @error [EntityNameConflict, UndefinedError];
        @meta JSON {swaggerTag: "__UserTag__"};
      }
    }
  }
}
`);

const tree = new Compiler(endpoints).getEndpointTree();
// console.log(tree.dtos);
console.log(tree.endpoints[1].directives?.find((directive) => directive.name === '@meta'));

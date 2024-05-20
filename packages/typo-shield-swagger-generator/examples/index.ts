// import { Compiler } from '../src/index';

const eptreedsl = (dsl: string) => dsl;

const endpoints = eptreedsl(`
HTTP/1.1: {
  $define: {
    /// здесь описываем ошибки, которые могут потенциально исполниться во время
    /// работы эндпоинта
    error(404, EntityNotFound): JSON { message: String };
    error(409, EntityNameConflict): JSON { message: String, fields: Number};
    error(501, UndefinedError): JSON { message: String };

    dto(UserDto): JSON { message: String, lolkek: Number };
  }

  $GET: {
    > user: {
    @query [UserDto];
    @body JSON {a: Number, b: String};
    @meta JSON {swaggerTagName: "user", swaggerTagDescription: "user_desc"};
      > get: {
        @serve GetUser;
        @error [EntityNameConflict, EntityNotFound, UndefinedError];
        @body JSON #include(b);
      }
      > list: {
        @serve UserList;
        @body JSON #include(a);
        @error [EntityNameConflict, UndefinedError];
      }
    }
    > orders: {
      @query [UserDto];
      > list: {
        @serve OrderList;
        @body JSON {a: Number, b: String};
        @meta JSON {swaggerTagName: "orders", swaggerTagDescription: "orders_desc"};
      }
    }
  }

  $POST: {
    > user: {
    @body JSON {a: Number, b: String};
    @meta JSON {swaggerTagName: "user", swaggerTagDescription: "user_desc"};
      > get: {
        @serve GetUser;
        @error [EntityNameConflict, EntityNotFound, UndefinedError];
        @query JSON { id: String, std: Number };
      }
      > list: {
        @serve UserList;
        @body JSON #include(a);
        @error [EntityNameConflict, UndefinedError];
      }
    }
  }
}
`);

const tree = new Compiler(endpoints).getEndpointTree();
console.log(tree.dtos);
console.log(tree.endpoints[0].directives?.find((directive) => directive.name === '@query'));

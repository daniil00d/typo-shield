import { getServer } from "@server/app";

// Определяем некоторое дерево эндпоинтов на дсл-языке
const endpoints = `
HTTP: {
  $GET: {
    > user: {
    @input JSON {a: Number, b: String};
      > list: {
        /// yes, you can write like that
        @input 
          JSON {
            g: Number, 
            x: String
          };
        @input JSON {c: Number, d: String};
        > get_1: {
          @input JSON {s: Number, p: String};
          @input JSON #exclude(c, p);
          > smt: {
            @input JSON {e: Number, f: String};
            > last_1: {
              @input JSON #include(s, a);
              @serve GetUser;
            };
            > last_2: {
              @input JSON #include(s, a);
              @serve GetUserList;
            };
          };
        };
      };
      > get: {
        @serve GetUser;
      };
    };
  };
};
` as const;

export const imps = {
  GetUserList: () => ({ users: [{ id: 1, name: "daniil" }] }),
  GetUser: () => ({ id: 123 })
};

const server = getServer(endpoints, imps, { overrideDirectives: "merge" });

server.start();

import { getServer } from "@server/app";

// Определяем некоторое дерево эндпоинтов на дсл-языке
const endpoints = `
HTTP: {
  $GET: {
    > user: {
    @input JSON {a: Number, b: String};
      > list: {
        @serve GetUserList;
        @input JSON {c: Number};
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
  GetUser: () => ({ id: 123 }),
};

const server = getServer(endpoints, imps);

server.start();

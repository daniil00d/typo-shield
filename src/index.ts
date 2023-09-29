import { getServer } from "./ts-parser/app";

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
  CreateAdmin: () => ({ user: "admin" }),
  CreateManager: () => ({ user: "manager" }),
  CreateConsumer: () => ({ user: "consumer" }),
  GetUserList: () => ({ users: [{ id: 1, name: "daniil" }] }),
};

const server = getServer(endpoints, imps);

server.start();

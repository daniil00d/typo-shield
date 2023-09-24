import { getServer } from "./ts-parser/app";

// Определяем некоторое дерево эндпоинтов на дсл-языке
const endpoints = `
  |> HTTP
    <|> POST
      <|> user
        @body json {a: Number}
        <|> consumer
          @serve CreateConsumer
          @body json #include(a)
        <|> admin
          @serve CreateAdmin
        <|> manager
          @serve CreateManager
    <|> GET
      :> user
        <|> list
          @serve GetList
        <|> @param 'login' as String
          :> get
` as const;

export const imps = {
  CreateAdmin: () => ({ user: "admin" }),
  CreateManager: () => ({ user: "manager" }),
  CreateConsumer: () => ({ user: "consumer" }),
  GetList: () => ({ users: [{ id: 1, name: "daniil" }] }),
};

const server = getServer(endpoints, imps);

server.start();

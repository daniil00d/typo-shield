import { ExpressServer } from "./server/express-intagration";
import { bindImplementation } from "./ts-parser/binds";
import { RowSeparator, Tab } from "./ts-parser/constants";
import { Parser } from "./ts-parser/parser";

// Определяем некоторое дерево эндпоинтов на дсл-языке
const endpoints = `
  |> HTTP/1.1
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

// парсим дсл:

const lexemes = endpoints
  .split(RowSeparator)
  .map((row) => row.replace(Tab, ""))
  .filter((row) => row);

const parser = new Parser();

const endpointTree = parser.parse(parser.recParser(lexemes));

// пишем свои имплементации

export const imps = {
  CreateAdmin: () => ({ user: "admin" }),
  CreateManager: () => ({ user: "manager" }),
  CreateConsumer: () => ({ user: "consumer" }),
  GetList: () => ({ users: [{ id: 1, name: "daniil" }] }),
};

const bindedEndpoints = bindImplementation(imps, endpointTree);

const server = new ExpressServer(3000);

server.bindEndpoint(bindedEndpoints);

server.start();

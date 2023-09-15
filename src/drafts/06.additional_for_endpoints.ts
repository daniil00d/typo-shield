/**
 * Вопрос тогда следующий: а зачем нам в принципе наследовать какие-то
 * поддеревья? Если можно описывать отдельные эндпоинты и на этом все
 *
 * Идея в том, что при каждом описании какой-то ноды, то есть описывание
 * для нее заголовков, инпуты, аутпуты, мы будем наследовать эти данные
 * уже для потомков с возможностью оверайдить эти поля
 */

// пусть у нас есть некоторое пустое дерево эндпоинтов
const et_UserTree = `
  |> HTTP/2
    <|> POST
      <|> user
        <|> consumer
        <|> admin
        <|> manager
    <|> GET
      :> user
        <|> list
        <|> @param 'login' as String
          :> get
` as const;

/**
 * TODO: 1. Необходимо его заполнить метаинформацией так, чтобы потомки понятно
 * наследовали поля описания их родителей
 */

const et_ParamsUserTree = `
  |> HTTP/2
    <|> POST
      <|> user
        @meta         { swaggerTag: "User" }
        @headers      { token: String }
        @input json   { login?: String, email: String }
        @output json  { id: String }

        <|> consumer
          @input json { location: String }

        <|> admin
          @input json { rules: String }

        <|> manager
          @input json { managerRang: Number }
    <|> GET
      :> user
        <|> list
          @input json merge(#ListPaginationInput, #ListSortInput)
        <|> @param 'login' as String
          :> get
` as const;

/**
 * TODO: 2. Далее парсим дсл и превращаем его в дерево
 */

type EndpointTree = void;

function getEndpointTree(mergeDSL: string): EndpointTree {}

/**
 * TODO: 3. Связываем имплементацию эндпоинтов с их сигнатурой из дерева эндпоинтов
 */

type UserDto = void;
type UserList = void;
type PageParams = { a: 10; b: 10 };

function ex_getUser(login: string): UserDto {}
function ex_getUserList(pageParams: PageParams): UserList {}

/**
 * Пусть у нас будет написан интерпретатор на тайп-левеле, который будет
 * возвращать некоторые типы для инпутов и аутпутов
 *
 * Тогда можно так:
 */

type GetUserEndpointType = {
  input: { login: string };
  output: { email: string };
};
type GetUserEndpointFunctionType = (
  input: GetUserEndpointType["input"]
) => GetUserEndpointType["output"];

function getUser_functionDeclaration(
  input: GetUserEndpointType["input"]
): GetUserEndpointType["output"] {
  return { email: "" };
}
// or
const getUser_functionExpression: GetUserEndpointFunctionType = () => ({
  email: "",
});

/**
 * TODO: 4. Если мы получили описание эндпоинтов, их сигнатуры и имплементации,
 * мы можем с этими данными
 *  - поднять сервер
 *  - сгенерировать спеку
 *  - засервить сваггер спеку, другими словами получить сваггер
 *
 * Для первого варианта можно использовать express
 */

const endpointTreeWithImplementation = {
  serve: () => {},
  generateSwaggerSpec: () => {},
  serveSwagger: () => {},
};

endpointTreeWithImplementation.serve();
endpointTreeWithImplementation.generateSwaggerSpec();
endpointTreeWithImplementation.serveSwagger();

/**
 * DONE! 5. Получаем профит небольшими усилиями + сильную типизацию
 */

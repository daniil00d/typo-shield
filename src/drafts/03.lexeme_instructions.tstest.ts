type Schema = any;

/**
 *    HTTP ~> POST :>
 *    #includes $BaseUserDto :>
 *    @ /user/get/{id: Number} :>
 *    > json::body::UserInput :>
 *    < json::output::UserOutput :>
 *    ---
 *    headers<CommonHeaders> -> Authorization, token, user-agent :>
 *    comments:|
 *      Данная ручка предназначена для получения информации о пользователе
 *      ## Так же здесь можно будет использовать MD
 *    <:>
 */

type AuthorizationHeader = string;

type Syntax = {
  protocol: "HTTP";
  method: "POST";
  URL: "/user/get/{id: Number}";
  parameters: {
    name: "id";
    type: number;
  };
  input: { id: number };
  output: {
    login: string;
    email: string;
  };
  headers: {
    Authorization: AuthorizationHeader;
    token: string;
    "user-agent": string;
  };
  comments: "Данная ручка предназначена для получения информации о \
    пользователе \n ## Так же здесь можно будет использовать MD";
  meta: [];
  schema: Schema;
};

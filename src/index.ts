import { App } from "@server/app";
import { logger } from "@utils/logger";

// Определяем некоторое дерево эндпоинтов на дсл-языке
const endpoints = `
HTTP/1.1: {
  $GET: {
    > user: {
    @input JSON {a: Number, b: String};
      > list: {
        /// yes, you can write comment like that
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
        @serve GetUserA;
      };
    };
  };
};
`;

const app = new App(endpoints, { overrideDirectives: "merge" });

/**
 * Пример регистрации миддлавары
 */
app.registerMiddleware((req, res, next) => {
  logger.log(`Visit ${req.path}`, "info");
  next();
});

/**
 * Пример регистрации имплементации
 */
app.registerImplementation("GetUser", (req, res) => {
  throw new Error("error!!!");
});

app.registerImplementation([
  {
    name: "GetUserA",
    callback: (_, res) => res.json({ name: "Danya from list 123" })
  },
  {
    name: "GetUserList",
    callback: (_, res) => res.json([{ name: "Danya" }])
  }
]);

app.start();

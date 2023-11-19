import { App } from "@server/app";
import { logger } from "@utils/logger";
import { eptreedsl } from "@core/parser";

// Определяем некоторое дерево эндпоинтов на дсл-языке
const endpoints = eptreedsl(`
HTTP/1.1: {
  $define: {
    /// здесь описываем ошибки, которые могут потенциально исполниться во время
    /// работы эндпоинта
    error(404, EntityNotFound): JSON {message: String};
    error(409, EntityNameConflict): JSON {message: String};
    error(501, UndefinedError): JSON {message: String};
  };

  $GET: {
    > user: {
    @input JSON {a: Number, b: String};
      > get: {
        @serve GetUser;
        @error [EntityNameConflict, EntityNotFound, UndefinedError];
      };
    };
  };
};
`);

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
  res.sendError("EntityNameConflict", { message: "1234" });
});

app.start();

import { App } from "@server/app";
import { logger } from "@utils/logger";
import { eptreedsl } from "@core/parser";

// const a = '123123' as const
// const b = '456sdf' as const
// type ct = `${typeof a}${typeof b}`
// const cc = (a + b) as ct

// Определяем некоторое дерево эндпоинтов на дсл-языке
const endpoints = eptreedsl(`
HTTP/1.1: {
  $define: {
    /// здесь описываем ошибки, которые могут потенциально исполниться во время
    /// работы эндпоинта
    error(404, EntityNotFound): JSON { message: String };
    error(409, EntityNameConflict): JSON { message: String, fields: Number };
    error(501, UndefinedError): JSON { message: String };
  }

  $GET: {
    > user: {
    @body JSON {a: Number, b: String};
      > get: {
        @serve GetUser;
        @error [EntityNameConflict, EntityNotFound, UndefinedError];
        @query JSON { id: String, std: Number };
      }
      > list: {
        @serve UserList;
        @body JSON #include(a);
        @error [EntityNameConflict, UndefinedError];
        @meta JSON {swaggerTag: "__UserTag__"};
      }
    }
  }
}
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
  const { id, std } = req.query;
  /**
   * TODO:
   * 1. Выводить ошибку, если ожидалось, что query будет передано, но его нет
   * 2. Доделать обработку объектов
   *  - опциональные поля
   *  - дополнить типы хотя бы до множества примитивов
   *  - вложенные объекты
   */
  console.log({ id, std });
  res.sendError("EntityNameConflict", { message: "User not found", fields: 1 });
});

app.registerImplementation("UserList", (req, res) => {
  const { id, std } = req.query;
  /**
   * TODO:
   * 1. Выводить ошибку, если ожидалось, что query будет передано, но его нет
   * 2. Доделать обработку объектов
   *  - опциональные поля
   *  - дополнить типы хотя бы до множества примитивов
   *  - вложенные объекты
   */
  console.log({ id, std });
  res.sendError("UndefinedError", { message: "User not found" });
});

app.start();

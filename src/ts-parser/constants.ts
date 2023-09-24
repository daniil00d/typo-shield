export const StartSeparator = "|>" as const;
export const StartSeparatorRegExp = String.raw`\|>`;
export const OrSeparator = "<|>" as const;
export const ForwardSeparator = ":>" as const;
export const RowSeparator = "\n" as const;
export const Tab = "  " as const;
// Пока что поддерживаем только http
export const Protocol = ["HTTP"] as const;

// По дефолту пока что всегда HTTP/1.1 (TODO)
export const HTTPVersion = ["1", "1.1", "2", "3"] as const;
export const Method = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

// via @
export const Directive = [
  "params", // Параметры для pathname: GET /user/:login/get -> {login: string}
  "meta", // передача некоторых метапараметров, нужных, например для генерации сваггера
  "headers", // передача некоторых заголовков, которые мы ожидаем на входе ручки
  "serve", // сервинг ручки (линк названия на имплементацию)
  "paramSearch", // директива для указания в строке поиска после pathname
  "body", // директива для указания http body
  "output", // директива, указывающая на то, что мы должны вернуть от ручки
] as const;

// via #
export const UtilityDirective = ["include", "exclude"];

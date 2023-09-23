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

// TODO: дополнить до полного списка с описанием каждого
export const Directive = ["serve", "param", "body", "output"] as const;

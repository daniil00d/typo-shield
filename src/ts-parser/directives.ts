import { Directive } from "./constants";
import { DSLLexeme, DirectiveType } from "./types";

type DirectiveContent = {
  type: DirectiveType | undefined;
  payload: string[] | undefined;
};

/**
 * Метод для парсинга директив вида
 * @example `@serve GetUser` -> {type: 'serve', payload: ['GetUser']}
 * @example `@body json {a: Number}` -> {type: 'body', payload: ['json', '{a: Number}']}
 */
export const parseDirective = (lexeme: string): DirectiveContent => {
  const lexemeMatch = lexeme.match(
    String.raw`^@(?<type>${Directive.join("|")}) (?<payload>(\w+\s?)+)`
  );

  const lexemeGroups = lexemeMatch?.groups as {
    type: DirectiveType;
    payload: string;
  };

  return {
    type: lexemeGroups?.type,
    payload: lexemeGroups?.payload.split(" "),
  };
};

export const parseDirectiveByName = (
  lexeme: DSLLexeme | undefined,
  name: string
): string[] | undefined => {
  if (lexeme === undefined) {
    return undefined;
  }

  const { type, payload } = parseDirective(lexeme);

  return type === name ? payload : undefined;
};

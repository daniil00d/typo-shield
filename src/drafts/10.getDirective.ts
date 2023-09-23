export const Directive = ["serve", "param", "body", "output"] as const;

export type DirectiveType = (typeof Directive)[number];

export const getDirective = (
  lexeme: string
): { type: DirectiveType | undefined; payload: string | undefined } => {
  const lexemeMatch = lexeme.match(
    String.raw`^@(?<type>${Directive.join("|")}) (?<payload>\w+)`
  );
  const lexemeGroups = lexemeMatch?.groups as {
    type: DirectiveType;
    payload: string;
  };

  return {
    type: lexemeGroups?.type,
    payload: lexemeGroups?.payload,
  };
};

export const getDirectiveByName = (
  lexeme: string | undefined,
  dirName: string
): string | undefined => {
  if (lexeme === undefined) {
    return undefined;
  }

  const { type, payload } = getDirective(lexeme);

  return type === dirName ? payload : undefined;
};

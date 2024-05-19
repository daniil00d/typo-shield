// creates a string literal type that's the first
// character of the T string
export type FirstCharacter<T> = T extends `${infer First}${string}` ? First
  : never;

// same thing, just with the last character.
// due to how these template types work,
// we need to use recursive types to achieve this.
export type LastCharacter<T> = T extends `${string}${infer Rest}` ? Rest extends '' ? T
  : LastCharacter<Rest>
  : never;

// this is our FirstCharacter type
export type Head<T> = T extends `${infer R}${string}` ? R : never;

// this is different.
// the type returns a string made up of
// all but the first character of the string.
export type Tail<T> = T extends `${string}${infer R extends string}` ? R extends '' ? never
  : R
  : never;

export type Whitespace = ' ' | '\t' | '\r' | '\n';

export type TrimLeft<
  Text extends string,
  Chars extends string | number = Whitespace,
> = Text extends `${Chars}${infer Rest}` ? TrimLeft<Rest, Chars> : Text;

export type TrimRight<
  Text extends string,
  Chars extends string | number = Whitespace,
> = Text extends `${infer Rest}${Chars}` ? TrimRight<Rest, Chars> : Text;

export type Trim<
  Text extends string,
  Chars extends string | number = Whitespace,
> = TrimRight<TrimLeft<Text, Chars>, Chars>;

export type ReplaceAll<
  Text extends string,
  Pattern extends string | number,
  Replacement extends string = '',
> = Text extends `${infer Start extends string}${Pattern}${infer Rest extends string}`
  ? `${Start}${Replacement}${ReplaceAll<Rest, Pattern, Replacement>}`
  : Text;

// creates a string literal type that's the first
// character of the T string
export type FirstCharacter<T> = T extends `${infer First}${string}`
  ? First
  : never;

// same thing, just with the last character.
// due to how these template types work,
// we need to use recursive types to achieve this.
export type LastCharacter<T> = T extends `${string}${infer Rest}`
  ? Rest extends ""
    ? T
    : LastCharacter<Rest>
  : never;

// this is our FirstCharacter type
export type Head<T> = T extends `${infer R}${string}` ? R : never;

// this is different.
// the type returns a string made up of
// all but the first character of the string.
export type Tail<T> = T extends `${string}${infer R extends string}`
  ? R extends ""
    ? never
    : R
  : never;

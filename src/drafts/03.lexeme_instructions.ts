/**
 * Цель: разбить данный код на лексемы и правильно интерпретировать их значение
 */

import { Trim } from '@core/utils/string';

const someEndpoint = `
  <:>
  HTTP ~> POST :>
  #includes $BaseUserDto :>
  @ /user/get/{id: Number} :>
  > json::body::UserInput :>
  < json::output::UserOutput :>
  ---
  headers<CommonHeaders> -> Authorization, token, user-agent :>
  comments:|
    Данная ручка предназначена для получения информации о пользователе
    ## Так же здесь можно будет использовать MD
  <:>
` as const;

type ExDSL = typeof someEndpoint;

type Split<S extends string, D extends string> = string extends S ? string[]
  : S extends '' ? []
  : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>]
  : [S];

type Separator = ':>';
type ListSeparator = '<:>';
type PartSeparator = '---';
type Whitespace = ' ' | '\t' | '\r' | '\n';
type SpecialWhitespace = Whitespace | Separator | ListSeparator | PartSeparator;

type DeleteEmptyStrings<Lexemes extends string[]> = Lexemes extends [
  infer Item extends string,
  ...infer Other extends string[],
] ? Trim<Item, SpecialWhitespace> extends '' ? DeleteEmptyStrings<Other>
  : [Trim<Item, SpecialWhitespace>, ...DeleteEmptyStrings<Other>]
  : Lexemes;

type MainSeparator = '\n';

export type Lexemes = DeleteEmptyStrings<Split<ExDSL, MainSeparator>>;

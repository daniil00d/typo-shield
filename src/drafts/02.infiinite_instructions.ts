/**
 * Задача: написать дженерик-тип для аккумулятивного калькулятора первых символов операндов
 *
 * Cкилл: бесконечные строки в типе
 */

import { FirstCharacter } from "@core/utils/string";

type Delimiter = ":>";
type StartFinish = "<:>";

type TrimStartAndFinish<DSL> =
  DSL extends `${StartFinish} ${infer Middle} ${StartFinish}` ? Middle : never;

type Concat<
  leftString extends string,
  rightString extends string
> = `${leftString}${rightString}`;

type ParseDSL<DSL> =
  DSL extends `${infer HeadString extends string} ${infer DelimiterString extends Delimiter} ${infer TailString extends string}`
    ? Concat<FirstCharacter<HeadString>, ParseDSL<TailString>>
    : FirstCharacter<DSL>;

export type InfiniteConcat<DSL> = ParseDSL<TrimStartAndFinish<DSL>>;

type ConcatStrings =
  InfiniteConcat<`<:> 11111 :> 22222 :> 33333 :> 4444234234234 <:>`>;
// ^? '1234'

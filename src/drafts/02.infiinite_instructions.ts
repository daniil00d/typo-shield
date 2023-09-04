/**
 * Задача: написать дженерик-тип для аккумулятивного калькулятора
 *
 * Cкилл: бесконечные строки в типе
 */

type Delimiter = ":>";
type StartFinish = "<:>";

type TrimStartAndFinish<DSL> =
  DSL extends `${StartFinish} ${infer Middle} ${StartFinish}` ? Middle : never;

type Concat<
  leftString extends string,
  rightString extends string
> = `${leftString}${rightString}`;

type ParseDSL<DSL> =
  DSL extends `${infer HeadString extends string} ${Delimiter} ${infer TailString extends string}`
    ? Concat<HeadString, ParseDSL<TailString>>
    : "";

type InfiniteConcat<DSL> = TrimStartAndFinish<ParseDSL<DSL>>;

type ConcatStrings = InfiniteConcat<`<:> 11111 :> 22222 :> 33333 <:>`>;
// ^? '111112222233333'

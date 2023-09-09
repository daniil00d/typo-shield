import { Equal, Expect } from "@core/utils/test";
import { InfiniteConcat } from "./02.infiinite_instructions";

type dsl_1 = InfiniteConcat<'<:> 11212313 :> 344324 :> 3231 :> 123123 <:>'>

type dsl_1__test = Expect<Equal<dsl_1,'1331'>>;

type dsl_2 = InfiniteConcat<'<:> 11212313 <:>'>

type dsl_2__test = Expect<Equal<dsl_2,'1'>>;

type dsl_3 = InfiniteConcat<'<:> a :> 23 <:>'>

type dsl_3__test = Expect<Equal<dsl_3,'a2'>>;
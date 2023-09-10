import {
  Apply,
  args,
  Call,
  Fn,
  PartialApply,
  Pipe,
  unset,
  _,
} from "@core/helpers";

export type Call<
  fn extends Fn,
  arg0 = _,
  arg1 = _,
  arg2 = _,
  arg3 = _
> = (fn & {
  [rawArgs]: ExcludePlaceholders<[arg0, arg1, arg2, arg3]>;
})["return"];

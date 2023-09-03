export type Expect<T extends true> = T;
export type Equal<X, Y> = Expect<
  X extends Y ? (Y extends X ? true : false) : false
>;

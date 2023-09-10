type MutateBaseGeneric<I = any> = any

/**
 * @example type Mapped = Map<[' a', 'b '], Trim> = ['a', 'b']
 */
export type Map<_Array extends any[], MutateGeneric> = _Array extends [(infer Item extends any), ...(infer Other extends any[])]
? [MutateGeneric<Item>, ...()]
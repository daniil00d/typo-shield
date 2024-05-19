/**
 * Определение типа строки
 * @param type string
 *
 * @returns string | number
 */
export type SwitchType<Type extends string> = Type extends 'String' ? string : number;

/**
 * Удаляет все пробельные символы в строке
 * @param string string
 *
 * @returns string
 */
export type DeleteAllWhiteSpaces<ObjectPart extends string> = ObjectPart extends `${infer First} ${infer Tail extends string}`
  ? `${First}${DeleteAllWhiteSpaces<Tail>}`
  : ObjectPart;

/**
 * Разбивает строку на подстроки
 * @param string string
 * @param delimiter string
 *
 * @returns string[]
 */
export type Split<S extends string, D extends string> = string extends S ? string[]
  : S extends '' ? []
  : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>]
  : [S];

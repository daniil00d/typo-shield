import { DeleteAllWhiteSpaces, Split, SwitchType } from "./strings";

/**
 * Возвращает массив параметров объекта из строки
 *
 * @param {string} objectString - строка с параметрами объекта
 * @returns {string[]} - массив параметров объекта
 */
export type GetSplittedObjects<DSL extends string> = Split<DSL, ",">;

/**
 * Возвращает {name, type} параметра объекта
 *
 * @param {string} partOfObject - часть строки с параметром объекта
 * @returns {{name: string, type: string}} - объект с именем и типом параметра
 */
export type GetObject<PartOfObject extends string> = PartOfObject extends `${infer Name}:${infer Type extends
  | "String"
  | "Number"}`
  ? { name: Name; type: SwitchType<Type> }
  : false;

/**
 * Возвращает массив объектов из массива параметров объекта
 *
 * @param {string[]} objects - массив параметров объекта
 * @returns {any[]} - массив объектов
 */
export type GetObjects<Objects extends string[], Acc extends any[] = []> = Objects extends [
  infer First extends string,
  ...infer Tail extends string[]
]
  ? GetObjects<Tail, [...Acc, GetObject<DeleteAllWhiteSpaces<First>>]>
  : Acc;

/**
 * Возвращает объект из массива параметра объекта
 *
 * @param {string[]} objects - массив параметров объекта
 * @returns {any} - объект
 */
export type ObjectToRecord<T extends any[], Acc = {}> = T extends [
  infer First extends { name: string; type: string | number },
  ...infer Tail extends { name: string; type: string | number }[]
]
  ? ObjectToRecord<Tail, Acc & Record<First["name"], First["type"]>>
  : Acc;

/**
 * Возвращает объект из массива параметров объекта
 *
 * @param {string[]} objects - массив параметров объекта
 * @returns {any} - объект
 */
export type ObjectsToRecord<T extends any[], Acc = {}> = T extends [
  infer First extends { name: string },
  ...infer Tail extends any[]
]
  ? ObjectsToRecord<Tail, Acc & Record<First["name"], First>>
  : Acc;

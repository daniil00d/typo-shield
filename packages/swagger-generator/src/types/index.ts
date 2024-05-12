import { QEW } from "./hello"


export type Def = {
    hello1?: 123123
} & QEW


export type Index = {
    hello: string
} & Def
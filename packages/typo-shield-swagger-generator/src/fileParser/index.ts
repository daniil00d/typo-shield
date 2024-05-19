import { ParseResults } from "src/types";
import * as fs from 'node:fs';
import * as path from 'node:path';
import { Compiler } from "typo-shield-parsers";

export type EndpointTreeFromCode = {
    folder: string
    entrypoint: string
}

export const getEndpointTreeFromCode = ({folder, entrypoint}: EndpointTreeFromCode) => {
    // Объект для хранения обработанных файлов
    const result: ParseResults = {};

    // Получить список файлов в указанной папке
    const files = fs.readdirSync(path.resolve(process.cwd(), folder));

    // Регулярное выражение для поиска eptreedsl строк
    const regex = /eptreedsl\(`([^`]+)`\)/;

    // Обработать каждый файл
    for (const fileName of files) {
    // Пропустить файлы, который не являются файлами .ts
    if (path.extname(fileName) !== '.ts') continue;

    const content = fs.readFileSync(path.join(folder, fileName), 'utf8');
    const match = regex.exec(content);

    // Если совпадение было найдено, добавить содержимое в объект result
    if (match && match[1]) {
        result[fileName] = match[1];
    }
    }

    return new Compiler(result[entrypoint]).getEndpointTree()
}
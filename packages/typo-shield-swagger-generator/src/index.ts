#!/usr/bin/env node

import { program } from 'commander'
import * as fs from 'node:fs';
import * as path from 'node:path';
import { ParseResults } from './types';
import { Compiler } from 'typo-shield-parsers';
import { createSpecFile } from './generator/helpers/fs';
import {getMainYAMLTemplate} from './generator/templates/yaml/main.template'
import { getMainJSONTemplate } from './generator/templates/json/main.template';

program
  .option('-f, --folder <type>', 'Folder for finding filed with typo-shield code', 'src')

program.parse();

const options = program.opts();

const folderPath = options.folder; // замените на путь к вашей папке

// Объект для хранения обработанных файлов
const result: ParseResults = {};

// Получить список файлов в указанной папке
const files = fs.readdirSync(path.resolve(__dirname, '../', folderPath));

// Регулярное выражение для поиска eptreedsl строк
const regex = /eptreedsl\(`([^`]+)`\)/;

// Обработать каждый файл
for (const fileName of files) {
  // Пропустить файлы, который не являются файлами .ts
  if (path.extname(fileName) !== '.ts') continue;

  const content = fs.readFileSync(path.join(folderPath, fileName), 'utf8');
  const match = regex.exec(content);

  // Если совпадение было найдено, добавить содержимое в объект result
  if (match && match[1]) {
    result[fileName] = match[1];
  }
}

const endpointTree = new Compiler(result['index.ts'])

console.log(endpointTree.getEndpointTree().endpoints[0]);

// createSpecFile({
//   name: 'swagger',
//   content: getMainJSONTemplate({paths: ''}),
//   path: './',
//   type: 'json'
// })
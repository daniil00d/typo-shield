#!/usr/bin/env node

import { Command } from 'commander'
import { generateSwagger } from './generator';
import {version} from '../package.json'
import { getEndpointTreeFromCode } from './fileParser';

const program = new Command();

program
  .name('npx typo-shield-swagger-generator')
  .description('CLI to generate swagger file from typo-shield DSL code')
  .version(version);

program.command('generate')
  .option('-f, --folder <type>', 'Folder for finding filed with typo-shield code', 'src')
  .option('-e, --entrypoint <type>', 'Entrypoint file', 'index.ts')
  .option('-t, --type <type>', 'Type of swagger file (yaml or json)', 'yaml')
  .option('-n, --name <type>', 'Name of swagger file', 'swagger')
  .option('-p, --path <type>', 'Path to folder where swagger file will be created', 'dist')
  .action((options) => {
    const folderPath = options.folder;
    const entrypoint = options.entrypoint;
    const type = options.type;
    const filename = options.name;
    const pathToFolder = options.path;
    
    const endpointTree = getEndpointTreeFromCode({folder: folderPath, entrypoint})

    generateSwagger({
      type,
      endpointTree,
      fileOptions: {
        name: filename,
        folder: pathToFolder,
      }
    })
  })

program.parse();
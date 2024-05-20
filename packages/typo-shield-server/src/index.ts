#!/usr/bin/env node

import { Command } from 'commander';
import * as express from 'express';
import * as path from 'node:path';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import { version } from '../package.json';

const program = new Command();

program
  .name('npx typo-shield-server')
  .description('CLI for serving swagger file')
  .version(version);

program.command('serve')
  .option('-f, --file <type>', 'File pathname: for example `swagger.yaml`', 'swagger.yaml')
  .option('-p, --port <type>', 'Port', '8080')
  .option('-e, --endpoint <type>', 'Endpoint for documentation', '/')
  .action((options) => {
    const pathname = options.file; // замените на путь к вашей папке
    const port = Number(options.port);
    const endpoint = options.endpoint;

    const swaggerDocument = YAML.load(path.resolve(process.cwd(), pathname));

    const app = express();
    app.use(endpoint, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.listen(port, function() {
      console.log(`Listening on port ${port}\nVisit http://localhost:${port}${endpoint} to view the documentation`);
    });
  });

program.parse();

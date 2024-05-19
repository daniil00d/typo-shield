#!/usr/bin/env node

import { program } from 'commander';
import * as express from 'express';
import * as path from 'node:path';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';

program
  .option('-f, --file <type>', 'File pathname: for example `swagger.yaml`', 'swagger.yaml')
  .option('-p, --port <type>', 'Port', '8080')
  .option('-e, --endpoint <type>', 'Endpoint for documentation', '/');

program.parse();

const options = program.opts();

const pathname = options.file; // замените на путь к вашей папке
const port = Number(options.port);
const endpoint = options.endpoint;

const swaggerDocument = YAML.load(path.resolve(process.cwd(), pathname));

const app = express();
app.use(endpoint, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, function() {
  console.log(`Listening on port ${port}\nVisit http://localhost:${port}${endpoint} to view the documentation`);
});

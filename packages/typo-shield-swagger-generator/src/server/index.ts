import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'node:path'

const swaggerDocument = YAML.load(path.resolve(__dirname, '../../swagger.yaml'));

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8080, function () {
  console.log('Listening on port 8080');
});
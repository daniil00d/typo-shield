import { MainTemplateOptions } from '../types/main.template';
import { getServersYAMLTemplate } from './servers.template';

// https://swagger.io/docs/specification/basic-structure/
export const getMainYAMLTemplate = (options: MainTemplateOptions) => {
  return String.raw`openapi: ${options.version || '3.0.0'}
info:
    title: ${options.info?.title || 'Sample API'}
    description: ${
    options.info?.description || 'Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.'
  }
    version: ${options.info?.version || '0.0.0'}

${getServersYAMLTemplate(options.servers)}

${options.paths}`;
};

/**
 * Common fields for all endpoints
 *
 * TODO: add params
 */
export const getCommonFields = () => {
  return {
    openapi: '3.1.0',
    info: {
      title: 'Sample API',
      description: 'Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Localhost',
      },
    ],
  };
};

import { EndpointTree } from 'typo-shield-parsers';

export const getComponentsFields = (endpointTree: EndpointTree) => {
  return {
    components: {
      schemas: {
        Hello: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: '123123123',
            },
          },
        },
      },
    },
  };
};

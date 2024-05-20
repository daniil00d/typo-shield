import { Endpoint, EndpointTree } from 'typo-shield-parsers';
import { Method } from './types';

export type PathField = Record<string, Method[]>;

export const getPathsFields = (endpointTree: EndpointTree) => {
  const pathMap = (endpoint: Endpoint) => {
    return {
      [endpoint.method.toLowerCase()]: {
        summary: 'hello sum',
        description: 'hello desc',
        responses: {
          '200': {
            description: 'hello desc',
            content: {
              'application/json': {
                schema: {
                  '$ref': '#/components/schemas/Hello',
                },
              },
            },
          },
          ...endpoint.errors.reduce((errors, error) => {
            return {
              ...errors,
              [error?.code.toString() || '500']: {
                description: 'hello desc',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        message: error?.name,
                      },
                    },
                  },
                },
              },
            };
          }, {} as any),
        },
      },
    };
  };

  const paths = endpointTree.endpoints.reduce((paths, endpoint) => {
    if (paths[endpoint.pathname]) {
      return {
        ...paths,
        [endpoint.pathname]: {
          ...paths[endpoint.pathname],
          ...pathMap(endpoint),
        },
      };
    }
    return {
      ...paths,
      [endpoint.pathname]: pathMap(endpoint),
    };
  }, {} as any);

  return {
    paths,
  };
};

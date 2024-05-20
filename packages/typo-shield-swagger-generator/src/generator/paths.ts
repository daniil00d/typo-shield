import { Endpoint, EndpointTree } from 'typo-shield-parsers';
import { getProp, getProps } from './components';
import { Method } from './types';

export type PathField = Record<string, Method[]>;

export const getPathsFields = (endpointTree: EndpointTree) => {
  const pathMap = (endpoint: Endpoint) => {
    const body = endpoint.directives?.find((directive) => directive.name === '@body');
    const query = endpoint.directives?.find((directive) => directive.name === '@query');
    const tag = endpoint.directives?.find((directive) => directive.name === '@meta')?.objects['swaggerTagName'];

    const getInput = () => {
      const queryMap = (object: Record<string, string>) => {
        return Object.entries(object).map(([key, value]) => {
          return {
            name: key,
            in: 'query',
            schema: {
              type: value.toLowerCase(),
            },
          };
        });
      };

      if (endpoint.method === 'GET') {
        return {
          parameters: (query?.enums || [])?.length > 0
            ? queryMap(endpointTree.dtos?.[query?.enums?.[0] || ''] || {})
            : queryMap(query?.objects || {}),
        };
      }

      return {
        requestBody: {
          description: 'hello desc',
          content: {
            'application/json': {
              schema: (query?.enums || []).length > 0
                ? {
                  '$ref': `#/components/schemas/${query?.enums?.[0]}`,
                }
                : {
                  type: 'object',
                  properties: getProp(query?.objects || {}),
                },
            },
          },
        },
      };
    };

    return {
      [endpoint.method.toLowerCase()]: {
        ...(tag ? { tags: [tag] } : {}),
        summary: 'hello sum',
        description: 'hello desc',
        ...getInput(),
        responses: {
          '200': {
            description: 'hello desc',
            content: {
              'application/json': {
                schema: (body?.enums || []).length > 0
                  ? {
                    '$ref': `#/components/schemas/${body?.enums?.[0]}`,
                  }
                  : {
                    type: 'object',
                    properties: getProp(body?.objects || {}),
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

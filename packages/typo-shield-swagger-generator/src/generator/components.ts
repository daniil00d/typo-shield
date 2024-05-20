import { EndpointTree } from 'typo-shield-parsers';

export const getProp = (object: Record<string, string>) => {
  return Object.entries(object).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: {
        type: value.toLowerCase(),
      },
    };
  }, {});
};

export const getProps = (dto: Record<string, Record<string, string>>) => {
  return Object.entries(dto).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: {
        type: 'object',
        properties: getProp(value),
      },
    };
  }, {});
};

export const getComponentsFields = (endpointTree: EndpointTree) => {
  const dtos = endpointTree.dtos;
  if (dtos === undefined) return {};

  return {
    components: {
      schemas: getProps(dtos),
    },
  };
};

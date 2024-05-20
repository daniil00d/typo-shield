import { EndpointTree } from 'typo-shield-parsers';

type SwaggerTag = {
  name: string;
  description: string;
};

export const getTagsFields = (endpointTree: EndpointTree) => {
  const tags: SwaggerTag[] = [];

  endpointTree.endpoints.forEach(endpoint => {
    const meta = endpoint.directives?.find(directive => directive.name === '@meta');
    if (meta && meta.objects['swaggerTagName'] && !tags.find(tag => tag.name === meta.objects['swaggerTagName'])) {
      tags.push({
        name: meta.objects['swaggerTagName'],
        description: meta.objects['swaggerTagDescription'] || '',
      });
    }
  });

  return {
    tags,
  };
};

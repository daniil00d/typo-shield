import { ServersTemplateOptions } from '../types/servers.template';

export const getServersYAMLTemplate = (servers: ServersTemplateOptions | undefined) => {
  if (servers === undefined) return '';

  const getServer = (server: ServersTemplateOptions[number]) => {
    return `
- url: ${server.url}
    description: ${server.description || ''}
`;
  };

  return `
servers:
    ${servers.map(getServer).join('\n')}
    `;
};

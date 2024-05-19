import { ServersTemplateOptions } from './servers.template';

export type MainTemplateOptions = {
    version?: '3.0.0';
    info?: {
        title: string;
        description?: string;
        version?: string;
    };
    servers?: ServersTemplateOptions;
    paths: string;
};

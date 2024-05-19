import { MainTemplateOptions } from "../types/main.template"

export const getMainJSONTemplate = (options: MainTemplateOptions) => {
    return `
{
    "openapi": "${options.version || '3.0.0'}",
    "info": {
        "title": "${options.info?.title || 'Sample API'}",
        "description": "${options.info?.description || 'Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.'}",
        "version": "${options.info?.version || '0.0.0'}"
    },
    "servers": [
        ${options.servers}
    ],
    ${options.paths}
}
    `
}
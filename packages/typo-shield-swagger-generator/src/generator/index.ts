import { EndpointTree } from "typo-shield-parsers";
import { generateJSONSwagger } from "./jsonSpec";
import { SwaggerFileType } from "./types"
import { generateYAMLSwagger } from "./yamlSpec";
import { SpecFileOptions } from "./helpers/fs";

export type GenerateSwagger = {
    type: SwaggerFileType
    endpointTree: EndpointTree
    fileOptions?: Pick<SpecFileOptions, 'name' | 'folder'>
}

export const generateSwagger = (options: GenerateSwagger) => {
    switch(options.type){
        case 'yaml':
            return generateYAMLSwagger();
        case 'json':
            return generateJSONSwagger();
        default:
            return generateYAMLSwagger();
    }
}
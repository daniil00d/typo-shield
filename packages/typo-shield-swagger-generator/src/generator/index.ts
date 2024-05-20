import { EndpointTree } from 'typo-shield-parsers';
import { createSpecFile, SpecFileOptions } from '../helpers/fs';
import { getCommonFields } from './commonFields';
import { getComponentsFields } from './components';
import { getPathsFields } from './paths';
import { SwaggerFileType } from './types';

export type GenerateSwagger = {
  type: SwaggerFileType;
  endpointTree: EndpointTree;
  fileOptions?: Pick<SpecFileOptions, 'name' | 'folder'>;
};

export const generateSwagger = ({ type, endpointTree, fileOptions }: GenerateSwagger) => {
  /**
   * 1. [x] get common fields
   * 2. [ ] get paths and components from endpointTree
   * 3. [x] save to file (add common params)
   */
  const commonFields = getCommonFields();
  const paths = getPathsFields(endpointTree);
  const components = getComponentsFields(endpointTree);

  const doc = {
    ...commonFields,
    ...paths,
    ...components,
  };

  createSpecFile({ folder: fileOptions?.folder || 'dist', name: fileOptions?.name || 'swagger', content: doc, type });
};

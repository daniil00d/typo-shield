import * as fs from 'node:fs';
import * as yaml from 'yaml';

export type SpecFileOptions = {
  name: string;
  content: Record<string, any>;
  folder?: string;
  type: 'json' | 'yaml';
};

export const createSpecFile = (options: SpecFileOptions) => {
  const fullPath = `${options.folder || '.'}/${options.name}.${options.type}`;

  const getDocString = () => {
    if (options.type === 'json') {
      return JSON.stringify(options.content, null, 2);
    }

    const doc = new yaml.Document();
    doc.contents = options.content as any;

    return doc.toString();
  };

  fs.writeFile(fullPath, getDocString(), (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Файл ${fullPath} успешно создан`);
  });
};

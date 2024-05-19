import * as fs from 'node:fs'

export type SpecFileOptions = {
    name: string
    content: string
    folder?: string
    type: 'json' | 'yaml'
}

export const createSpecFile = (options: SpecFileOptions) => {
    const fullPath = `${options.folder || '.'}/${options.name}.${options.type}`;

    // fs.writeFile(fullPath, options.content, (err) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }

    //     console.log(`Файл ${fullPath} успешно создан`);
    // });

    console.log(`Creating file with name '${fullPath}'...\n\n`);

    console.log(options.content);
}
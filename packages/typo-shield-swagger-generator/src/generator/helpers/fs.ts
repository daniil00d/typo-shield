import * as fs from 'node:fs'

export type SpecFile = {
    name: string
    content: string
    path: string
    type: 'json' | 'yaml'
}

export const createSpecFile = (options: SpecFile) => {
    const fullPath = `${options.path}/${options.name}.${options.type}`;

    // fs.writeFile(fullPath, options.content, (err) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }

    //     console.log(`Файл ${fullPath} успешно создан`);
    // });

    console.log(`Creating file with name '${fullPath}'...`);

    console.log(options.content);
}
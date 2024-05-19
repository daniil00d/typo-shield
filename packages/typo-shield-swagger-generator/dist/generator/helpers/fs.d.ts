export type SpecFile = {
    name: string;
    content: string;
    path: string;
    type: 'json' | 'yaml';
};
export declare const createSpecFile: (options: SpecFile) => void;

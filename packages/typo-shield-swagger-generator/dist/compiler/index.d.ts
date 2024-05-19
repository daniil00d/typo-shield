import { EndpointTree, HTTPVersionType, ParserListenerOptions } from './types';

export declare class Compiler {
    private tree;
    constructor(dsl: string, options?: ParserListenerOptions | undefined);
    getEndpointTree(): EndpointTree;
    getProtocolVersion(): HTTPVersionType;
}

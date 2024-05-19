import { TypoShieldListener } from './grammar/TypoShieldListener';
import { DefinesContext, MethodsContext, ProtocolContext } from './grammar/TypoShieldParser';
import { CustomError, Endpoint, ParserListenerOptions } from './types';

export declare class ParseTypoShieldListener implements TypoShieldListener {
    private protocol;
    private protocolVersion;
    private endpoints;
    private options;
    private errors;
    constructor(options?: ParserListenerOptions);
    enterProtocol(ctx: ProtocolContext): void;
    private parseDirectiveObjects;
    private parseDirective;
    private overridingDirectives;
    private recEndpoint;
    enterMethods(ctx: MethodsContext): void;
    enterDefines(ctx: DefinesContext): void;
    /**
     * Getters
     */
    getProtocol(): string;
    getEndpoints(): Endpoint[];
    getProtocolVersion(): "1" | "2" | "3" | "1.1";
    getErrors(): CustomError[];
}

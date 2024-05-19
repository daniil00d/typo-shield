import { ATN } from 'antlr4ts/atn/ATN';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { TypoShieldListener } from './TypoShieldListener';
import { TypoShieldVisitor } from './TypoShieldVisitor';

export declare class TypoShieldParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly DIR_TYPE = 5;
    static readonly START_SYM = 6;
    static readonly METHOD_START = 7;
    static readonly PROTOCOL = 8;
    static readonly NUMBER = 9;
    static readonly PROTOCOL_VERSION = 10;
    static readonly PROTOCOL_VERSION_DEL = 11;
    static readonly METHOD = 12;
    static readonly DEFINE = 13;
    static readonly DEFINE_ERROR = 14;
    static readonly LCURLY = 15;
    static readonly LBRACKET = 16;
    static readonly RBRACKET = 17;
    static readonly RCURLY = 18;
    static readonly SEMI = 19;
    static readonly COMA = 20;
    static readonly WS = 21;
    static readonly TYPE = 22;
    static readonly UTILITY_DIRECTIVE = 23;
    static readonly ENTITY_NAME = 24;
    static readonly DIRECTIVE = 25;
    static readonly COMMENT = 26;
    static readonly ID = 27;
    static readonly RULE_start = 0;
    static readonly RULE_utilitydirectiveatom = 1;
    static readonly RULE_utilitydirective = 2;
    static readonly RULE_object = 3;
    static readonly RULE_objects = 4;
    static readonly RULE_enum = 5;
    static readonly RULE_enumeration = 6;
    static readonly RULE_directives = 7;
    static readonly RULE_methods = 8;
    static readonly RULE_endpoints = 9;
    static readonly RULE_errors = 10;
    static readonly RULE_defines = 11;
    static readonly RULE_protocol = 12;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    start(): StartContext;
    utilitydirectiveatom(): UtilitydirectiveatomContext;
    utilitydirective(): UtilitydirectiveContext;
    object(): ObjectContext;
    objects(): ObjectsContext;
    enum(): EnumContext;
    enumeration(): EnumerationContext;
    directives(): DirectivesContext;
    methods(): MethodsContext;
    endpoints(): EndpointsContext;
    errors(): ErrorsContext;
    defines(): DefinesContext;
    protocol(): ProtocolContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class StartContext extends ParserRuleContext {
    protocol(): ProtocolContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class UtilitydirectiveatomContext extends ParserRuleContext {
    ID(): TerminalNode[];
    ID(i: number): TerminalNode;
    COMA(): TerminalNode[];
    COMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class UtilitydirectiveContext extends ParserRuleContext {
    UTILITY_DIRECTIVE(): TerminalNode;
    LBRACKET(): TerminalNode;
    utilitydirectiveatom(): UtilitydirectiveatomContext;
    RBRACKET(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class ObjectContext extends ParserRuleContext {
    ID(): TerminalNode[];
    ID(i: number): TerminalNode;
    TYPE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class ObjectsContext extends ParserRuleContext {
    LCURLY(): TerminalNode;
    object(): ObjectContext[];
    object(i: number): ObjectContext;
    RCURLY(): TerminalNode;
    COMA(): TerminalNode[];
    COMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class EnumContext extends ParserRuleContext {
    ENTITY_NAME(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class EnumerationContext extends ParserRuleContext {
    enum(): EnumContext[];
    enum(i: number): EnumContext;
    COMA(): TerminalNode[];
    COMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class DirectivesContext extends ParserRuleContext {
    DIRECTIVE(): TerminalNode;
    SEMI(): TerminalNode;
    ENTITY_NAME(): TerminalNode | undefined;
    DIR_TYPE(): TerminalNode | undefined;
    objects(): ObjectsContext | undefined;
    utilitydirective(): UtilitydirectiveContext | undefined;
    enumeration(): EnumerationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class MethodsContext extends ParserRuleContext {
    METHOD_START(): TerminalNode;
    METHOD(): TerminalNode;
    LCURLY(): TerminalNode;
    RCURLY(): TerminalNode;
    endpoints(): EndpointsContext[];
    endpoints(i: number): EndpointsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class EndpointsContext extends ParserRuleContext {
    START_SYM(): TerminalNode;
    ID(): TerminalNode;
    LCURLY(): TerminalNode;
    RCURLY(): TerminalNode;
    endpoints(): EndpointsContext[];
    endpoints(i: number): EndpointsContext;
    directives(): DirectivesContext[];
    directives(i: number): DirectivesContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class ErrorsContext extends ParserRuleContext {
    DEFINE_ERROR(): TerminalNode;
    LBRACKET(): TerminalNode;
    NUMBER(): TerminalNode;
    COMA(): TerminalNode;
    ENTITY_NAME(): TerminalNode;
    RBRACKET(): TerminalNode;
    DIR_TYPE(): TerminalNode;
    objects(): ObjectsContext;
    SEMI(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class DefinesContext extends ParserRuleContext {
    METHOD_START(): TerminalNode;
    DEFINE(): TerminalNode;
    LCURLY(): TerminalNode;
    RCURLY(): TerminalNode;
    errors(): ErrorsContext[];
    errors(i: number): ErrorsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}
export declare class ProtocolContext extends ParserRuleContext {
    PROTOCOL(): TerminalNode;
    LCURLY(): TerminalNode;
    RCURLY(): TerminalNode;
    PROTOCOL_VERSION_DEL(): TerminalNode | undefined;
    PROTOCOL_VERSION(): TerminalNode | undefined;
    defines(): DefinesContext[];
    defines(i: number): DefinesContext;
    methods(): MethodsContext[];
    methods(i: number): MethodsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TypoShieldListener): void;
    exitRule(listener: TypoShieldListener): void;
    accept<Result>(visitor: TypoShieldVisitor<Result>): Result;
}

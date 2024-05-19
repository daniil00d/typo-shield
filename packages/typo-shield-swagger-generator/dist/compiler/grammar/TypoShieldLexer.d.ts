import { ATN } from 'antlr4ts/atn/ATN';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { Vocabulary } from 'antlr4ts/Vocabulary';

export declare class TypoShieldLexer extends Lexer {
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
    static readonly channelNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    constructor(input: CharStream);
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    get channelNames(): string[];
    get modeNames(): string[];
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}

// Generated from src/antlr-ts-compiler/grammar/TypoShield.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TypoShieldLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly DIR_TYPE = 4;
	public static readonly START_SYM = 5;
	public static readonly METHOD_START = 6;
	public static readonly PROTOCOL = 7;
	public static readonly NUMBER = 8;
	public static readonly PROTOCOL_VERSION = 9;
	public static readonly PROTOCOL_VERSION_DEL = 10;
	public static readonly METHOD = 11;
	public static readonly DEFINE = 12;
	public static readonly DEFINE_ERROR = 13;
	public static readonly LCURLY = 14;
	public static readonly LBRACKET = 15;
	public static readonly RBRACKET = 16;
	public static readonly RCURLY = 17;
	public static readonly SEMI = 18;
	public static readonly COMA = 19;
	public static readonly WS = 20;
	public static readonly TYPE = 21;
	public static readonly ENTITY_NAME = 22;
	public static readonly DIRECTIVE = 23;
	public static readonly UTILITY_DIRECTIVE = 24;
	public static readonly COMMENT = 25;
	public static readonly ID = 26;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "DIR_TYPE", "START_SYM", "METHOD_START", "PROTOCOL", 
		"NUMBER", "PROTOCOL_VERSION", "PROTOCOL_VERSION_DEL", "METHOD", "DEFINE", 
		"DEFINE_ERROR", "LCURLY", "LBRACKET", "RBRACKET", "RCURLY", "SEMI", "COMA", 
		"WS", "TYPE", "ENTITY_NAME", "DIRECTIVE", "UTILITY_DIRECTIVE", "COMMENT", 
		"ID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'['", "']'", "'JSON'", "'>'", "'$'", undefined, undefined, 
		undefined, "'/'", undefined, "'define'", "'error'", "'{'", "'('", "')'", 
		"'}'", "';'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "DIR_TYPE", "START_SYM", "METHOD_START", 
		"PROTOCOL", "NUMBER", "PROTOCOL_VERSION", "PROTOCOL_VERSION_DEL", "METHOD", 
		"DEFINE", "DEFINE_ERROR", "LCURLY", "LBRACKET", "RBRACKET", "RCURLY", 
		"SEMI", "COMA", "WS", "TYPE", "ENTITY_NAME", "DIRECTIVE", "UTILITY_DIRECTIVE", 
		"COMMENT", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TypoShieldLexer._LITERAL_NAMES, TypoShieldLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TypoShieldLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TypoShieldLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "TypoShield.g4"; }

	// @Override
	public get ruleNames(): string[] { return TypoShieldLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TypoShieldLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TypoShieldLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TypoShieldLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1C\xF8\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\bP\n\b\x03\t\x06\tS\n\t\r\t\x0E\tT\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n[\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fl\n\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x15\x06\x15\x88\n\x15\r\x15\x0E\x15\x89" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\x9A\n\x16\x03\x17\x03" +
		"\x17\x06\x17\x9E\n\x17\r\x17\x0E\x17\x9F\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\xD4\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\xE6\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x07\x1A\xED\n\x1A\f\x1A\x0E\x1A\xF0\v\x1A\x03\x1A\x03\x1A\x03\x1B\x06" +
		"\x1B\xF5\n\x1B\r\x1B\x0E\x1B\xF6\x02\x02\x02\x1C\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!" +
		"\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x19" +
		"1\x02\x1A3\x02\x1B5\x02\x1C\x03\x02\b\x03\x022;\x05\x02\v\f\x0E\x0F\"" +
		"\"\x03\x02C\\\x04\x02C\\c|\b\x02\"\"..00C\\c|\u0412\u0451\x06\x022;C\\" +
		"aac|\x02\u0109\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
		"\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
		"\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03" +
		"\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03" +
		"\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02" +
		"\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02" +
		"-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x037\x03\x02\x02\x02\x059\x03\x02\x02\x02" +
		"\x07;\x03\x02\x02\x02\t=\x03\x02\x02\x02\vB\x03\x02\x02\x02\rD\x03\x02" +
		"\x02\x02\x0FO\x03\x02\x02\x02\x11R\x03\x02\x02\x02\x13Z\x03\x02\x02\x02" +
		"\x15\\\x03\x02\x02\x02\x17k\x03\x02\x02\x02\x19m\x03\x02\x02\x02\x1Bt" +
		"\x03\x02\x02\x02\x1Dz\x03\x02\x02\x02\x1F|\x03\x02\x02\x02!~\x03\x02\x02" +
		"\x02#\x80\x03\x02\x02\x02%\x82\x03\x02\x02\x02\'\x84\x03\x02\x02\x02)" +
		"\x87\x03\x02\x02\x02+\x99\x03\x02\x02\x02-\x9B\x03\x02\x02\x02/\xD3\x03" +
		"\x02\x02\x021\xE5\x03\x02\x02\x023\xE7\x03\x02\x02\x025\xF4\x03\x02\x02" +
		"\x0278\x07<\x02\x028\x04\x03\x02\x02\x029:\x07]\x02\x02:\x06\x03\x02\x02" +
		"\x02;<\x07_\x02\x02<\b\x03\x02\x02\x02=>\x07L\x02\x02>?\x07U\x02\x02?" +
		"@\x07Q\x02\x02@A\x07P\x02\x02A\n\x03\x02\x02\x02BC\x07@\x02\x02C\f\x03" +
		"\x02\x02\x02DE\x07&\x02\x02E\x0E\x03\x02\x02\x02FG\x07J\x02\x02GH\x07" +
		"V\x02\x02HI\x07V\x02\x02IP\x07R\x02\x02JK\x07J\x02\x02KL\x07V\x02\x02" +
		"LM\x07V\x02\x02MN\x07R\x02\x02NP\x07U\x02\x02OF\x03\x02\x02\x02OJ\x03" +
		"\x02\x02\x02P\x10\x03\x02\x02\x02QS\t\x02\x02\x02RQ\x03\x02\x02\x02ST" +
		"\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\x12\x03\x02\x02" +
		"\x02VW\t\x02\x02\x02WX\v\x02\x02\x02X[\t\x02\x02\x02Y[\t\x02\x02\x02Z" +
		"V\x03\x02\x02\x02ZY\x03\x02\x02\x02[\x14\x03\x02\x02\x02\\]\x071\x02\x02" +
		"]\x16\x03\x02\x02\x02^_\x07I\x02\x02_`\x07G\x02\x02`l\x07V\x02\x02ab\x07" +
		"R\x02\x02bc\x07Q\x02\x02cd\x07U\x02\x02dl\x07V\x02\x02ef\x07F\x02\x02" +
		"fg\x07G\x02\x02gh\x07N\x02\x02hi\x07G\x02\x02ij\x07V\x02\x02jl\x07G\x02" +
		"\x02k^\x03\x02\x02\x02ka\x03\x02\x02\x02ke\x03\x02\x02\x02l\x18\x03\x02" +
		"\x02\x02mn\x07f\x02\x02no\x07g\x02\x02op\x07h\x02\x02pq\x07k\x02\x02q" +
		"r\x07p\x02\x02rs\x07g\x02\x02s\x1A\x03\x02\x02\x02tu\x07g\x02\x02uv\x07" +
		"t\x02\x02vw\x07t\x02\x02wx\x07q\x02\x02xy\x07t\x02\x02y\x1C\x03\x02\x02" +
		"\x02z{\x07}\x02\x02{\x1E\x03\x02\x02\x02|}\x07*\x02\x02} \x03\x02\x02" +
		"\x02~\x7F\x07+\x02\x02\x7F\"\x03\x02\x02\x02\x80\x81\x07\x7F\x02\x02\x81" +
		"$\x03\x02\x02\x02\x82\x83\x07=\x02\x02\x83&\x03\x02\x02\x02\x84\x85\x07" +
		".\x02\x02\x85(\x03\x02\x02\x02\x86\x88\t\x03\x02\x02\x87\x86\x03\x02\x02" +
		"\x02\x88\x89\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02" +
		"\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\b\x15\x02\x02\x8C*\x03\x02\x02\x02" +
		"\x8D\x8E\x07P\x02\x02\x8E\x8F\x07w\x02\x02\x8F\x90\x07o\x02\x02\x90\x91" +
		"\x07d\x02\x02\x91\x92\x07g\x02\x02\x92\x9A\x07t\x02\x02\x93\x94\x07U\x02" +
		"\x02\x94\x95\x07v\x02\x02\x95\x96\x07t\x02\x02\x96\x97\x07k\x02\x02\x97" +
		"\x98\x07p\x02\x02\x98\x9A\x07i\x02\x02\x99\x8D\x03\x02\x02\x02\x99\x93" +
		"\x03\x02\x02\x02\x9A,\x03\x02\x02\x02\x9B\x9D\t\x04\x02\x02\x9C\x9E\t" +
		"\x05\x02\x02\x9D\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x9D\x03" +
		"\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0.\x03\x02\x02\x02\xA1\xA2\x07" +
		"B\x02\x02\xA2\xA3\x07u\x02\x02\xA3\xA4\x07g\x02\x02\xA4\xA5\x07t\x02\x02" +
		"\xA5\xA6\x07x\x02\x02\xA6\xD4\x07g\x02\x02\xA7\xA8\x07B\x02\x02\xA8\xA9" +
		"\x07k\x02\x02\xA9\xAA\x07p\x02\x02\xAA\xAB\x07r\x02\x02\xAB\xAC\x07w\x02" +
		"\x02\xAC\xD4\x07v\x02\x02\xAD\xAE\x07B\x02\x02\xAE\xAF\x07o\x02\x02\xAF" +
		"\xB0\x07g\x02\x02\xB0\xB1\x07v\x02\x02\xB1\xD4\x07c\x02\x02\xB2\xB3\x07" +
		"B\x02\x02\xB3\xB4\x07v\x02\x02\xB4\xB5\x07g\x02\x02\xB5\xB6\x07u\x02\x02" +
		"\xB6\xD4\x07v\x02\x02\xB7\xB8\x07B\x02\x02\xB8\xB9\x07j\x02\x02\xB9\xBA" +
		"\x07g\x02\x02\xBA\xBB\x07c\x02\x02\xBB\xBC\x07f\x02\x02\xBC\xBD\x07g\x02" +
		"\x02\xBD\xBE\x07t\x02\x02\xBE\xD4\x07u\x02\x02\xBF\xC0\x07B\x02\x02\xC0" +
		"\xC1\x07q\x02\x02\xC1\xC2\x07w\x02\x02\xC2\xC3\x07v\x02\x02\xC3\xC4\x07" +
		"r\x02\x02\xC4\xC5\x07w\x02\x02\xC5\xD4\x07v\x02\x02\xC6\xC7\x07B\x02\x02" +
		"\xC7\xC8\x07u\x02\x02\xC8\xC9\x07g\x02\x02\xC9\xCA\x07c\x02\x02\xCA\xCB" +
		"\x07t\x02\x02\xCB\xCC\x07e\x02\x02\xCC\xD4\x07j\x02\x02\xCD\xCE\x07B\x02" +
		"\x02\xCE\xCF\x07g\x02\x02\xCF\xD0\x07t\x02\x02\xD0\xD1\x07t\x02\x02\xD1" +
		"\xD2\x07q\x02\x02\xD2\xD4\x07t\x02\x02\xD3\xA1\x03\x02\x02\x02\xD3\xA7" +
		"\x03\x02\x02\x02\xD3\xAD\x03\x02\x02\x02\xD3\xB2\x03\x02\x02\x02\xD3\xB7" +
		"\x03\x02\x02\x02\xD3\xBF\x03\x02\x02\x02\xD3\xC6\x03\x02\x02\x02\xD3\xCD" +
		"\x03\x02\x02\x02\xD40\x03\x02\x02\x02\xD5\xD6\x07%\x02\x02\xD6\xD7\x07" +
		"k\x02\x02\xD7\xD8\x07p\x02\x02\xD8\xD9\x07e\x02\x02\xD9\xDA\x07n\x02\x02" +
		"\xDA\xDB\x07w\x02\x02\xDB\xDC\x07f\x02\x02\xDC\xE6\x07g\x02\x02\xDD\xDE" +
		"\x07%\x02\x02\xDE\xDF\x07g\x02\x02\xDF\xE0\x07z\x02\x02\xE0\xE1\x07e\x02" +
		"\x02\xE1\xE2\x07n\x02\x02\xE2\xE3\x07w\x02\x02\xE3\xE4\x07f\x02\x02\xE4" +
		"\xE6\x07g\x02\x02\xE5\xD5\x03\x02\x02\x02\xE5\xDD\x03\x02\x02\x02\xE6" +
		"2\x03\x02\x02\x02\xE7\xE8\x071\x02\x02\xE8\xE9\x071\x02\x02\xE9\xEA\x07" +
		"1\x02\x02\xEA\xEE\x03\x02\x02\x02\xEB\xED\t\x06\x02\x02\xEC\xEB\x03\x02" +
		"\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02" +
		"\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\b\x1A" +
		"\x02\x02\xF24\x03\x02\x02\x02\xF3\xF5\t\x07\x02\x02\xF4\xF3\x03\x02\x02" +
		"\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02" +
		"\x02\xF76\x03\x02\x02\x02\x0E\x02OTZk\x89\x99\x9F\xD3\xE5\xEE\xF6\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TypoShieldLexer.__ATN) {
			TypoShieldLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TypoShieldLexer._serializedATN));
		}

		return TypoShieldLexer.__ATN;
	}

}


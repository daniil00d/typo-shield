// Generated from /Users/d.shenyagin/TypoShield/src/antlr-ts-compiler/grammar/TypoShield.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TypoShieldListener } from "./TypoShieldListener";

export class TypoShieldParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly DIR_TYPE = 2;
	public static readonly START_SYM = 3;
	public static readonly METHOD_START = 4;
	public static readonly PROTOCOL = 5;
	public static readonly PROTOCOL_VERSION = 6;
	public static readonly PROTOCOL_VERSION_DEL = 7;
	public static readonly METHOD = 8;
	public static readonly LCURLY = 9;
	public static readonly LBRACKET = 10;
	public static readonly RBRACKET = 11;
	public static readonly RCURLY = 12;
	public static readonly SEMI = 13;
	public static readonly COMA = 14;
	public static readonly WS = 15;
	public static readonly TYPE = 16;
	public static readonly DIR_NAME = 17;
	public static readonly DIRECTIVE = 18;
	public static readonly UTILITY_DIRECTIVE = 19;
	public static readonly COMMENT = 20;
	public static readonly ID = 21;
	public static readonly RULE_start = 0;
	public static readonly RULE_utilitydirectiveatom = 1;
	public static readonly RULE_utilitydirective = 2;
	public static readonly RULE_object = 3;
	public static readonly RULE_objects = 4;
	public static readonly RULE_directives = 5;
	public static readonly RULE_protocol = 6;
	public static readonly RULE_methods = 7;
	public static readonly RULE_endpoints = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "utilitydirectiveatom", "utilitydirective", "object", "objects", 
		"directives", "protocol", "methods", "endpoints",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'JSON'", "'>'", "'$'", "'HTTP'", undefined, "'/'", 
		undefined, "'{'", "'('", "')'", "'}'", "';'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "DIR_TYPE", "START_SYM", "METHOD_START", "PROTOCOL", 
		"PROTOCOL_VERSION", "PROTOCOL_VERSION_DEL", "METHOD", "LCURLY", "LBRACKET", 
		"RBRACKET", "RCURLY", "SEMI", "COMA", "WS", "TYPE", "DIR_NAME", "DIRECTIVE", 
		"UTILITY_DIRECTIVE", "COMMENT", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TypoShieldParser._LITERAL_NAMES, TypoShieldParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TypoShieldParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TypoShield.g4"; }

	// @Override
	public get ruleNames(): string[] { return TypoShieldParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TypoShieldParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TypoShieldParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TypoShieldParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.protocol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public utilitydirectiveatom(): UtilitydirectiveatomContext {
		let _localctx: UtilitydirectiveatomContext = new UtilitydirectiveatomContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TypoShieldParser.RULE_utilitydirectiveatom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.match(TypoShieldParser.ID);
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.COMA) {
				{
				{
				this.state = 21;
				this.match(TypoShieldParser.COMA);
				this.state = 22;
				this.match(TypoShieldParser.ID);
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public utilitydirective(): UtilitydirectiveContext {
		let _localctx: UtilitydirectiveContext = new UtilitydirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TypoShieldParser.RULE_utilitydirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.match(TypoShieldParser.UTILITY_DIRECTIVE);
			this.state = 29;
			this.match(TypoShieldParser.LBRACKET);
			this.state = 30;
			this.utilitydirectiveatom();
			this.state = 31;
			this.match(TypoShieldParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TypoShieldParser.RULE_object);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.match(TypoShieldParser.ID);
			this.state = 34;
			this.match(TypoShieldParser.T__0);
			this.state = 35;
			this.match(TypoShieldParser.TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objects(): ObjectsContext {
		let _localctx: ObjectsContext = new ObjectsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TypoShieldParser.RULE_objects);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.match(TypoShieldParser.LCURLY);
			this.state = 38;
			this.object();
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.COMA) {
				{
				{
				this.state = 39;
				this.match(TypoShieldParser.COMA);
				this.state = 40;
				this.object();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 46;
			this.match(TypoShieldParser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directives(): DirectivesContext {
		let _localctx: DirectivesContext = new DirectivesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TypoShieldParser.RULE_directives);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(TypoShieldParser.DIRECTIVE);
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 49;
				this.match(TypoShieldParser.DIR_NAME);
				}
				break;

			case 2:
				{
				this.state = 50;
				this.match(TypoShieldParser.DIR_TYPE);
				this.state = 51;
				this.objects();
				}
				break;

			case 3:
				{
				this.state = 52;
				this.match(TypoShieldParser.DIR_TYPE);
				this.state = 53;
				this.utilitydirective();
				}
				break;
			}
			this.state = 56;
			this.match(TypoShieldParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocol(): ProtocolContext {
		let _localctx: ProtocolContext = new ProtocolContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TypoShieldParser.RULE_protocol);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(TypoShieldParser.PROTOCOL);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypoShieldParser.PROTOCOL_VERSION_DEL) {
				{
				this.state = 59;
				this.match(TypoShieldParser.PROTOCOL_VERSION_DEL);
				this.state = 60;
				this.match(TypoShieldParser.PROTOCOL_VERSION);
				}
			}

			this.state = 63;
			this.match(TypoShieldParser.T__0);
			this.state = 64;
			this.match(TypoShieldParser.LCURLY);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.METHOD_START) {
				{
				{
				this.state = 65;
				this.methods();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this.match(TypoShieldParser.RCURLY);
			this.state = 72;
			this.match(TypoShieldParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methods(): MethodsContext {
		let _localctx: MethodsContext = new MethodsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TypoShieldParser.RULE_methods);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(TypoShieldParser.METHOD_START);
			this.state = 75;
			this.match(TypoShieldParser.METHOD);
			this.state = 76;
			this.match(TypoShieldParser.T__0);
			this.state = 77;
			this.match(TypoShieldParser.LCURLY);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.START_SYM) {
				{
				{
				this.state = 78;
				this.endpoints();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 84;
			this.match(TypoShieldParser.RCURLY);
			this.state = 85;
			this.match(TypoShieldParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endpoints(): EndpointsContext {
		let _localctx: EndpointsContext = new EndpointsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TypoShieldParser.RULE_endpoints);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(TypoShieldParser.START_SYM);
			this.state = 88;
			this.match(TypoShieldParser.ID);
			this.state = 89;
			this.match(TypoShieldParser.T__0);
			this.state = 90;
			this.match(TypoShieldParser.LCURLY);
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.START_SYM || _la === TypoShieldParser.DIRECTIVE) {
				{
				this.state = 93;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TypoShieldParser.START_SYM:
					{
					this.state = 91;
					this.endpoints();
					}
					break;
				case TypoShieldParser.DIRECTIVE:
					{
					this.state = 92;
					this.directives();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 98;
			this.match(TypoShieldParser.RCURLY);
			this.state = 99;
			this.match(TypoShieldParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17h\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x07\x06,\n\x06\f\x06\x0E\x06/\v\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x079\n\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x05\b@\n\b\x03\b\x03\b\x03\b\x07\bE\n\b\f\b\x0E\bH\v\b" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x07\tR\n\t\f\t\x0E\t" +
		"U\v\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n`\n\n" +
		"\f\n\x0E\nc\v\n\x03\n\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x02\x02g\x02\x14" +
		"\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b#\x03" +
		"\x02\x02\x02\n\'\x03\x02\x02\x02\f2\x03\x02\x02\x02\x0E<\x03\x02\x02\x02" +
		"\x10L\x03\x02\x02\x02\x12Y\x03\x02\x02\x02\x14\x15\x05\x0E\b\x02\x15\x03" +
		"\x03\x02\x02\x02\x16\x1B\x07\x17\x02\x02\x17\x18\x07\x10\x02\x02\x18\x1A" +
		"\x07\x17\x02\x02\x19\x17\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19" +
		"\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1B" +
		"\x03\x02\x02\x02\x1E\x1F\x07\x15\x02\x02\x1F \x07\f\x02\x02 !\x05\x04" +
		"\x03\x02!\"\x07\r\x02\x02\"\x07\x03\x02\x02\x02#$\x07\x17\x02\x02$%\x07" +
		"\x03\x02\x02%&\x07\x12\x02\x02&\t\x03\x02\x02\x02\'(\x07\v\x02\x02(-\x05" +
		"\b\x05\x02)*\x07\x10\x02\x02*,\x05\b\x05\x02+)\x03\x02\x02\x02,/\x03\x02" +
		"\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02\x02\x02/-\x03\x02" +
		"\x02\x0201\x07\x0E\x02\x021\v\x03\x02\x02\x0228\x07\x14\x02\x0239\x07" +
		"\x13\x02\x0245\x07\x04\x02\x0259\x05\n\x06\x0267\x07\x04\x02\x0279\x05" +
		"\x06\x04\x0283\x03\x02\x02\x0284\x03\x02\x02\x0286\x03\x02\x02\x029:\x03" +
		"\x02\x02\x02:;\x07\x0F\x02\x02;\r\x03\x02\x02\x02<?\x07\x07\x02\x02=>" +
		"\x07\t\x02\x02>@\x07\b\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x03" +
		"\x02\x02\x02AB\x07\x03\x02\x02BF\x07\v\x02\x02CE\x05\x10\t\x02DC\x03\x02" +
		"\x02\x02EH\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02" +
		"\x02\x02HF\x03\x02\x02\x02IJ\x07\x0E\x02\x02JK\x07\x0F\x02\x02K\x0F\x03" +
		"\x02\x02\x02LM\x07\x06\x02\x02MN\x07\n\x02\x02NO\x07\x03\x02\x02OS\x07" +
		"\v\x02\x02PR\x05\x12\n\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02" +
		"\x02\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02US\x03\x02\x02\x02VW\x07\x0E" +
		"\x02\x02WX\x07\x0F\x02\x02X\x11\x03\x02\x02\x02YZ\x07\x05\x02\x02Z[\x07" +
		"\x17\x02\x02[\\\x07\x03\x02\x02\\a\x07\v\x02\x02]`\x05\x12\n\x02^`\x05" +
		"\f\x07\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`c\x03\x02\x02\x02a_\x03" +
		"\x02\x02\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ca\x03\x02\x02\x02de\x07" +
		"\x0E\x02\x02ef\x07\x0F\x02\x02f\x13\x03\x02\x02\x02\n\x1B-8?FS_a";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TypoShieldParser.__ATN) {
			TypoShieldParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TypoShieldParser._serializedATN));
		}

		return TypoShieldParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public protocol(): ProtocolContext {
		return this.getRuleContext(0, ProtocolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_start; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
}


export class UtilitydirectiveatomContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypoShieldParser.ID);
		} else {
			return this.getToken(TypoShieldParser.ID, i);
		}
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypoShieldParser.COMA);
		} else {
			return this.getToken(TypoShieldParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_utilitydirectiveatom; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterUtilitydirectiveatom) {
			listener.enterUtilitydirectiveatom(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitUtilitydirectiveatom) {
			listener.exitUtilitydirectiveatom(this);
		}
	}
}


export class UtilitydirectiveContext extends ParserRuleContext {
	public UTILITY_DIRECTIVE(): TerminalNode { return this.getToken(TypoShieldParser.UTILITY_DIRECTIVE, 0); }
	public LBRACKET(): TerminalNode { return this.getToken(TypoShieldParser.LBRACKET, 0); }
	public utilitydirectiveatom(): UtilitydirectiveatomContext {
		return this.getRuleContext(0, UtilitydirectiveatomContext);
	}
	public RBRACKET(): TerminalNode { return this.getToken(TypoShieldParser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_utilitydirective; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterUtilitydirective) {
			listener.enterUtilitydirective(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitUtilitydirective) {
			listener.exitUtilitydirective(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TypoShieldParser.ID, 0); }
	public TYPE(): TerminalNode { return this.getToken(TypoShieldParser.TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_object; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
}


export class ObjectsContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(TypoShieldParser.LCURLY, 0); }
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	public RCURLY(): TerminalNode { return this.getToken(TypoShieldParser.RCURLY, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypoShieldParser.COMA);
		} else {
			return this.getToken(TypoShieldParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_objects; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterObjects) {
			listener.enterObjects(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitObjects) {
			listener.exitObjects(this);
		}
	}
}


export class DirectivesContext extends ParserRuleContext {
	public DIRECTIVE(): TerminalNode { return this.getToken(TypoShieldParser.DIRECTIVE, 0); }
	public SEMI(): TerminalNode { return this.getToken(TypoShieldParser.SEMI, 0); }
	public DIR_NAME(): TerminalNode | undefined { return this.tryGetToken(TypoShieldParser.DIR_NAME, 0); }
	public DIR_TYPE(): TerminalNode | undefined { return this.tryGetToken(TypoShieldParser.DIR_TYPE, 0); }
	public objects(): ObjectsContext | undefined {
		return this.tryGetRuleContext(0, ObjectsContext);
	}
	public utilitydirective(): UtilitydirectiveContext | undefined {
		return this.tryGetRuleContext(0, UtilitydirectiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_directives; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterDirectives) {
			listener.enterDirectives(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitDirectives) {
			listener.exitDirectives(this);
		}
	}
}


export class ProtocolContext extends ParserRuleContext {
	public PROTOCOL(): TerminalNode { return this.getToken(TypoShieldParser.PROTOCOL, 0); }
	public LCURLY(): TerminalNode { return this.getToken(TypoShieldParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(TypoShieldParser.RCURLY, 0); }
	public SEMI(): TerminalNode { return this.getToken(TypoShieldParser.SEMI, 0); }
	public PROTOCOL_VERSION_DEL(): TerminalNode | undefined { return this.tryGetToken(TypoShieldParser.PROTOCOL_VERSION_DEL, 0); }
	public PROTOCOL_VERSION(): TerminalNode | undefined { return this.tryGetToken(TypoShieldParser.PROTOCOL_VERSION, 0); }
	public methods(): MethodsContext[];
	public methods(i: number): MethodsContext;
	public methods(i?: number): MethodsContext | MethodsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodsContext);
		} else {
			return this.getRuleContext(i, MethodsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_protocol; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterProtocol) {
			listener.enterProtocol(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitProtocol) {
			listener.exitProtocol(this);
		}
	}
}


export class MethodsContext extends ParserRuleContext {
	public METHOD_START(): TerminalNode { return this.getToken(TypoShieldParser.METHOD_START, 0); }
	public METHOD(): TerminalNode { return this.getToken(TypoShieldParser.METHOD, 0); }
	public LCURLY(): TerminalNode { return this.getToken(TypoShieldParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(TypoShieldParser.RCURLY, 0); }
	public SEMI(): TerminalNode { return this.getToken(TypoShieldParser.SEMI, 0); }
	public endpoints(): EndpointsContext[];
	public endpoints(i: number): EndpointsContext;
	public endpoints(i?: number): EndpointsContext | EndpointsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndpointsContext);
		} else {
			return this.getRuleContext(i, EndpointsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_methods; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterMethods) {
			listener.enterMethods(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitMethods) {
			listener.exitMethods(this);
		}
	}
}


export class EndpointsContext extends ParserRuleContext {
	public START_SYM(): TerminalNode { return this.getToken(TypoShieldParser.START_SYM, 0); }
	public ID(): TerminalNode { return this.getToken(TypoShieldParser.ID, 0); }
	public LCURLY(): TerminalNode { return this.getToken(TypoShieldParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(TypoShieldParser.RCURLY, 0); }
	public SEMI(): TerminalNode { return this.getToken(TypoShieldParser.SEMI, 0); }
	public endpoints(): EndpointsContext[];
	public endpoints(i: number): EndpointsContext;
	public endpoints(i?: number): EndpointsContext | EndpointsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndpointsContext);
		} else {
			return this.getRuleContext(i, EndpointsContext);
		}
	}
	public directives(): DirectivesContext[];
	public directives(i: number): DirectivesContext;
	public directives(i?: number): DirectivesContext | DirectivesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DirectivesContext);
		} else {
			return this.getRuleContext(i, DirectivesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_endpoints; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterEndpoints) {
			listener.enterEndpoints(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitEndpoints) {
			listener.exitEndpoints(this);
		}
	}
}



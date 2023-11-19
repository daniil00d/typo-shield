// Generated from src/antlr-ts-compiler/grammar/TypoShield.g4 by ANTLR 4.9.0-SNAPSHOT


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
import { TypoShieldVisitor } from "./TypoShieldVisitor";


export class TypoShieldParser extends Parser {
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
	public static readonly RULE_start = 0;
	public static readonly RULE_utilitydirectiveatom = 1;
	public static readonly RULE_utilitydirective = 2;
	public static readonly RULE_object = 3;
	public static readonly RULE_objects = 4;
	public static readonly RULE_enum = 5;
	public static readonly RULE_enumeration = 6;
	public static readonly RULE_directives = 7;
	public static readonly RULE_methods = 8;
	public static readonly RULE_endpoints = 9;
	public static readonly RULE_errors = 10;
	public static readonly RULE_defines = 11;
	public static readonly RULE_protocol = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "utilitydirectiveatom", "utilitydirective", "object", "objects", 
		"enum", "enumeration", "directives", "methods", "endpoints", "errors", 
		"defines", "protocol",
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
			this.state = 26;
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
			this.state = 28;
			this.match(TypoShieldParser.ID);
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.COMA) {
				{
				{
				this.state = 29;
				this.match(TypoShieldParser.COMA);
				this.state = 30;
				this.match(TypoShieldParser.ID);
				}
				}
				this.state = 35;
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
			this.state = 36;
			this.match(TypoShieldParser.UTILITY_DIRECTIVE);
			this.state = 37;
			this.match(TypoShieldParser.LBRACKET);
			this.state = 38;
			this.utilitydirectiveatom();
			this.state = 39;
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
			this.state = 41;
			this.match(TypoShieldParser.ID);
			this.state = 42;
			this.match(TypoShieldParser.T__0);
			this.state = 43;
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
			this.state = 45;
			this.match(TypoShieldParser.LCURLY);
			this.state = 46;
			this.object();
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.COMA) {
				{
				{
				this.state = 47;
				this.match(TypoShieldParser.COMA);
				this.state = 48;
				this.object();
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 54;
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
	public enum(): EnumContext {
		let _localctx: EnumContext = new EnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TypoShieldParser.RULE_enum);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(TypoShieldParser.ENTITY_NAME);
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
	public enumeration(): EnumerationContext {
		let _localctx: EnumerationContext = new EnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TypoShieldParser.RULE_enumeration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(TypoShieldParser.T__1);
			this.state = 59;
			this.enum();
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.COMA) {
				{
				{
				this.state = 60;
				this.match(TypoShieldParser.COMA);
				this.state = 61;
				this.enum();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.match(TypoShieldParser.T__2);
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
		this.enterRule(_localctx, 14, TypoShieldParser.RULE_directives);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(TypoShieldParser.DIRECTIVE);
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 70;
				this.match(TypoShieldParser.ENTITY_NAME);
				}
				break;

			case 2:
				{
				this.state = 71;
				this.match(TypoShieldParser.DIR_TYPE);
				this.state = 72;
				this.objects();
				}
				break;

			case 3:
				{
				this.state = 73;
				this.match(TypoShieldParser.DIR_TYPE);
				this.state = 74;
				this.utilitydirective();
				}
				break;

			case 4:
				{
				this.state = 75;
				this.enumeration();
				}
				break;
			}
			this.state = 78;
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
		this.enterRule(_localctx, 16, TypoShieldParser.RULE_methods);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(TypoShieldParser.METHOD_START);
			this.state = 81;
			this.match(TypoShieldParser.METHOD);
			this.state = 82;
			this.match(TypoShieldParser.T__0);
			this.state = 83;
			this.match(TypoShieldParser.LCURLY);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.START_SYM) {
				{
				{
				this.state = 84;
				this.endpoints();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 90;
			this.match(TypoShieldParser.RCURLY);
			this.state = 91;
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
		this.enterRule(_localctx, 18, TypoShieldParser.RULE_endpoints);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(TypoShieldParser.START_SYM);
			this.state = 94;
			this.match(TypoShieldParser.ID);
			this.state = 95;
			this.match(TypoShieldParser.T__0);
			this.state = 96;
			this.match(TypoShieldParser.LCURLY);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.START_SYM || _la === TypoShieldParser.DIRECTIVE) {
				{
				this.state = 99;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TypoShieldParser.START_SYM:
					{
					this.state = 97;
					this.endpoints();
					}
					break;
				case TypoShieldParser.DIRECTIVE:
					{
					this.state = 98;
					this.directives();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 104;
			this.match(TypoShieldParser.RCURLY);
			this.state = 105;
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
	public errors(): ErrorsContext {
		let _localctx: ErrorsContext = new ErrorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TypoShieldParser.RULE_errors);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(TypoShieldParser.DEFINE_ERROR);
			this.state = 108;
			this.match(TypoShieldParser.LBRACKET);
			this.state = 109;
			this.match(TypoShieldParser.NUMBER);
			this.state = 110;
			this.match(TypoShieldParser.COMA);
			this.state = 111;
			this.match(TypoShieldParser.ENTITY_NAME);
			this.state = 112;
			this.match(TypoShieldParser.RBRACKET);
			this.state = 113;
			this.match(TypoShieldParser.T__0);
			this.state = 114;
			this.match(TypoShieldParser.DIR_TYPE);
			this.state = 115;
			this.objects();
			this.state = 116;
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
	public defines(): DefinesContext {
		let _localctx: DefinesContext = new DefinesContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TypoShieldParser.RULE_defines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(TypoShieldParser.METHOD_START);
			this.state = 119;
			this.match(TypoShieldParser.DEFINE);
			this.state = 120;
			this.match(TypoShieldParser.T__0);
			this.state = 121;
			this.match(TypoShieldParser.LCURLY);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.DEFINE_ERROR) {
				{
				{
				this.state = 122;
				this.errors();
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 128;
			this.match(TypoShieldParser.RCURLY);
			this.state = 129;
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
		this.enterRule(_localctx, 24, TypoShieldParser.RULE_protocol);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(TypoShieldParser.PROTOCOL);
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypoShieldParser.PROTOCOL_VERSION_DEL) {
				{
				this.state = 132;
				this.match(TypoShieldParser.PROTOCOL_VERSION_DEL);
				this.state = 133;
				this.match(TypoShieldParser.PROTOCOL_VERSION);
				}
			}

			this.state = 136;
			this.match(TypoShieldParser.T__0);
			this.state = 137;
			this.match(TypoShieldParser.LCURLY);
			this.state = 141;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 138;
					this.defines();
					}
					}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.METHOD_START) {
				{
				{
				this.state = 144;
				this.methods();
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 150;
			this.match(TypoShieldParser.RCURLY);
			this.state = 151;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\x9C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\"\n\x03\f\x03" +
		"\x0E\x03%\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x064\n\x06\f\x06" +
		"\x0E\x067\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x07\bA\n\b\f\b\x0E\bD\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x05\tO\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\nX\n\n\f\n\x0E\n[\v\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x07\vf\n\v\f\v\x0E\vi\v\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x07\r~\n\r\f\r\x0E\r\x81\v\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\x89\n\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x8E\n\x0E\f\x0E" +
		"\x0E\x0E\x91\v\x0E\x03\x0E\x07\x0E\x94\n\x0E\f\x0E\x0E\x0E\x97\v\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x02\x02\x02\x9B\x02\x1C\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x06&" +
		"\x03\x02\x02\x02\b+\x03\x02\x02\x02\n/\x03\x02\x02\x02\f:\x03\x02\x02" +
		"\x02\x0E<\x03\x02\x02\x02\x10G\x03\x02\x02\x02\x12R\x03\x02\x02\x02\x14" +
		"_\x03\x02\x02\x02\x16m\x03\x02\x02\x02\x18x\x03\x02\x02\x02\x1A\x85\x03" +
		"\x02\x02\x02\x1C\x1D\x05\x1A\x0E\x02\x1D\x03\x03\x02\x02\x02\x1E#\x07" +
		"\x1C\x02\x02\x1F \x07\x15\x02\x02 \"\x07\x1C\x02\x02!\x1F\x03\x02\x02" +
		"\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$\x05\x03\x02" +
		"\x02\x02%#\x03\x02\x02\x02&\'\x07\x1A\x02\x02\'(\x07\x11\x02\x02()\x05" +
		"\x04\x03\x02)*\x07\x12\x02\x02*\x07\x03\x02\x02\x02+,\x07\x1C\x02\x02" +
		",-\x07\x03\x02\x02-.\x07\x17\x02\x02.\t\x03\x02\x02\x02/0\x07\x10\x02" +
		"\x0205\x05\b\x05\x0212\x07\x15\x02\x0224\x05\b\x05\x0231\x03\x02\x02\x02" +
		"47\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x0268\x03\x02\x02\x02" +
		"75\x03\x02\x02\x0289\x07\x13\x02\x029\v\x03\x02\x02\x02:;\x07\x18\x02" +
		"\x02;\r\x03\x02\x02\x02<=\x07\x04\x02\x02=B\x05\f\x07\x02>?\x07\x15\x02" +
		"\x02?A\x05\f\x07\x02@>\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02" +
		"\x02BC\x03\x02\x02\x02CE\x03\x02\x02\x02DB\x03\x02\x02\x02EF\x07\x05\x02" +
		"\x02F\x0F\x03\x02\x02\x02GN\x07\x19\x02\x02HO\x07\x18\x02\x02IJ\x07\x06" +
		"\x02\x02JO\x05\n\x06\x02KL\x07\x06\x02\x02LO\x05\x06\x04\x02MO\x05\x0E" +
		"\b\x02NH\x03\x02\x02\x02NI\x03\x02\x02\x02NK\x03\x02\x02\x02NM\x03\x02" +
		"\x02\x02OP\x03\x02\x02\x02PQ\x07\x14\x02\x02Q\x11\x03\x02\x02\x02RS\x07" +
		"\b\x02\x02ST\x07\r\x02\x02TU\x07\x03\x02\x02UY\x07\x10\x02\x02VX\x05\x14" +
		"\v\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02" +
		"\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\]\x07\x13\x02\x02]^\x07" +
		"\x14\x02\x02^\x13\x03\x02\x02\x02_`\x07\x07\x02\x02`a\x07\x1C\x02\x02" +
		"ab\x07\x03\x02\x02bg\x07\x10\x02\x02cf\x05\x14\v\x02df\x05\x10\t\x02e" +
		"c\x03\x02\x02\x02ed\x03\x02\x02\x02fi\x03\x02\x02\x02ge\x03\x02\x02\x02" +
		"gh\x03\x02\x02\x02hj\x03\x02\x02\x02ig\x03\x02\x02\x02jk\x07\x13\x02\x02" +
		"kl\x07\x14\x02\x02l\x15\x03\x02\x02\x02mn\x07\x0F\x02\x02no\x07\x11\x02" +
		"\x02op\x07\n\x02\x02pq\x07\x15\x02\x02qr\x07\x18\x02\x02rs\x07\x12\x02" +
		"\x02st\x07\x03\x02\x02tu\x07\x06\x02\x02uv\x05\n\x06\x02vw\x07\x14\x02" +
		"\x02w\x17\x03\x02\x02\x02xy\x07\b\x02\x02yz\x07\x0E\x02\x02z{\x07\x03" +
		"\x02\x02{\x7F\x07\x10\x02\x02|~\x05\x16\f\x02}|\x03\x02\x02\x02~\x81\x03" +
		"\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03" +
		"\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x82\x83\x07\x13\x02\x02\x83\x84\x07" +
		"\x14\x02\x02\x84\x19\x03\x02\x02\x02\x85\x88\x07\t\x02\x02\x86\x87\x07" +
		"\f\x02\x02\x87\x89\x07\v\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02" +
		"\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x07\x03\x02\x02\x8B\x8F\x07\x10" +
		"\x02\x02\x8C\x8E\x05\x18\r\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02" +
		"\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x95\x03\x02" +
		"\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x94\x05\x12\n\x02\x93\x92\x03\x02" +
		"\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02" +
		"\x02\x02\x96\x98\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x99\x07\x13" +
		"\x02\x02\x99\x9A\x07\x14\x02\x02\x9A\x1B\x03\x02\x02\x02\r#5BNYeg\x7F" +
		"\x88\x8F\x95";
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
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitUtilitydirectiveatom) {
			return visitor.visitUtilitydirectiveatom(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitUtilitydirective) {
			return visitor.visitUtilitydirective(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitObjects) {
			return visitor.visitObjects(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumContext extends ParserRuleContext {
	public ENTITY_NAME(): TerminalNode { return this.getToken(TypoShieldParser.ENTITY_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_enum; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterEnum) {
			listener.enterEnum(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitEnum) {
			listener.exitEnum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitEnum) {
			return visitor.visitEnum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationContext extends ParserRuleContext {
	public enum(): EnumContext[];
	public enum(i: number): EnumContext;
	public enum(i?: number): EnumContext | EnumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumContext);
		} else {
			return this.getRuleContext(i, EnumContext);
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
	public get ruleIndex(): number { return TypoShieldParser.RULE_enumeration; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterEnumeration) {
			listener.enterEnumeration(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitEnumeration) {
			listener.exitEnumeration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitEnumeration) {
			return visitor.visitEnumeration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectivesContext extends ParserRuleContext {
	public DIRECTIVE(): TerminalNode { return this.getToken(TypoShieldParser.DIRECTIVE, 0); }
	public SEMI(): TerminalNode { return this.getToken(TypoShieldParser.SEMI, 0); }
	public ENTITY_NAME(): TerminalNode | undefined { return this.tryGetToken(TypoShieldParser.ENTITY_NAME, 0); }
	public DIR_TYPE(): TerminalNode | undefined { return this.tryGetToken(TypoShieldParser.DIR_TYPE, 0); }
	public objects(): ObjectsContext | undefined {
		return this.tryGetRuleContext(0, ObjectsContext);
	}
	public utilitydirective(): UtilitydirectiveContext | undefined {
		return this.tryGetRuleContext(0, UtilitydirectiveContext);
	}
	public enumeration(): EnumerationContext | undefined {
		return this.tryGetRuleContext(0, EnumerationContext);
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
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitDirectives) {
			return visitor.visitDirectives(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitMethods) {
			return visitor.visitMethods(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitEndpoints) {
			return visitor.visitEndpoints(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorsContext extends ParserRuleContext {
	public DEFINE_ERROR(): TerminalNode { return this.getToken(TypoShieldParser.DEFINE_ERROR, 0); }
	public LBRACKET(): TerminalNode { return this.getToken(TypoShieldParser.LBRACKET, 0); }
	public NUMBER(): TerminalNode { return this.getToken(TypoShieldParser.NUMBER, 0); }
	public COMA(): TerminalNode { return this.getToken(TypoShieldParser.COMA, 0); }
	public ENTITY_NAME(): TerminalNode { return this.getToken(TypoShieldParser.ENTITY_NAME, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(TypoShieldParser.RBRACKET, 0); }
	public DIR_TYPE(): TerminalNode { return this.getToken(TypoShieldParser.DIR_TYPE, 0); }
	public objects(): ObjectsContext {
		return this.getRuleContext(0, ObjectsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(TypoShieldParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_errors; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterErrors) {
			listener.enterErrors(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitErrors) {
			listener.exitErrors(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitErrors) {
			return visitor.visitErrors(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinesContext extends ParserRuleContext {
	public METHOD_START(): TerminalNode { return this.getToken(TypoShieldParser.METHOD_START, 0); }
	public DEFINE(): TerminalNode { return this.getToken(TypoShieldParser.DEFINE, 0); }
	public LCURLY(): TerminalNode { return this.getToken(TypoShieldParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(TypoShieldParser.RCURLY, 0); }
	public SEMI(): TerminalNode { return this.getToken(TypoShieldParser.SEMI, 0); }
	public errors(): ErrorsContext[];
	public errors(i: number): ErrorsContext;
	public errors(i?: number): ErrorsContext | ErrorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ErrorsContext);
		} else {
			return this.getRuleContext(i, ErrorsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypoShieldParser.RULE_defines; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterDefines) {
			listener.enterDefines(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitDefines) {
			listener.exitDefines(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitDefines) {
			return visitor.visitDefines(this);
		} else {
			return visitor.visitChildren(this);
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
	public defines(): DefinesContext[];
	public defines(i: number): DefinesContext;
	public defines(i?: number): DefinesContext | DefinesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinesContext);
		} else {
			return this.getRuleContext(i, DefinesContext);
		}
	}
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
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitProtocol) {
			return visitor.visitProtocol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



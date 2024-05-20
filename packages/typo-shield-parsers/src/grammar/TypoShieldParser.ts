// Generated from src/grammar/TypoShield.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly T__3 = 4;
	public static readonly DIR_TYPE = 5;
	public static readonly START_SYM = 6;
	public static readonly METHOD_START = 7;
	public static readonly PROTOCOL = 8;
	public static readonly NUMBER = 9;
	public static readonly PROTOCOL_VERSION = 10;
	public static readonly PROTOCOL_VERSION_DEL = 11;
	public static readonly METHOD = 12;
	public static readonly DEFINE = 13;
	public static readonly DEFINE_ERROR = 14;
	public static readonly DEFINE_DTO = 15;
	public static readonly LCURLY = 16;
	public static readonly LBRACKET = 17;
	public static readonly RBRACKET = 18;
	public static readonly RCURLY = 19;
	public static readonly SEMI = 20;
	public static readonly COMA = 21;
	public static readonly WS = 22;
	public static readonly TYPE = 23;
	public static readonly UTILITY_DIRECTIVE = 24;
	public static readonly ENTITY_NAME = 25;
	public static readonly DIRECTIVE = 26;
	public static readonly COMMENT = 27;
	public static readonly ID = 28;
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
	public static readonly RULE_dtos = 11;
	public static readonly RULE_defines = 12;
	public static readonly RULE_protocol = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "utilitydirectiveatom", "utilitydirective", "object", "objects", 
		"enum", "enumeration", "directives", "methods", "endpoints", "errors", 
		"dtos", "defines", "protocol",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'\"'", "'['", "']'", "'JSON'", "'>'", "'$'", undefined, 
		undefined, undefined, "'/'", undefined, "'define'", "'error'", "'dto'", 
		"'{'", "'('", "')'", "'}'", "';'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "DIR_TYPE", "START_SYM", 
		"METHOD_START", "PROTOCOL", "NUMBER", "PROTOCOL_VERSION", "PROTOCOL_VERSION_DEL", 
		"METHOD", "DEFINE", "DEFINE_ERROR", "DEFINE_DTO", "LCURLY", "LBRACKET", 
		"RBRACKET", "RCURLY", "SEMI", "COMA", "WS", "TYPE", "UTILITY_DIRECTIVE", 
		"ENTITY_NAME", "DIRECTIVE", "COMMENT", "ID",
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
			this.state = 28;
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
			this.state = 30;
			this.match(TypoShieldParser.ID);
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.COMA) {
				{
				{
				this.state = 31;
				this.match(TypoShieldParser.COMA);
				this.state = 32;
				this.match(TypoShieldParser.ID);
				}
				}
				this.state = 37;
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
			this.state = 38;
			this.match(TypoShieldParser.UTILITY_DIRECTIVE);
			this.state = 39;
			this.match(TypoShieldParser.LBRACKET);
			this.state = 40;
			this.utilitydirectiveatom();
			this.state = 41;
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
			this.state = 43;
			this.match(TypoShieldParser.ID);
			this.state = 44;
			this.match(TypoShieldParser.T__0);
			this.state = 49;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypoShieldParser.TYPE:
				{
				this.state = 45;
				this.match(TypoShieldParser.TYPE);
				}
				break;
			case TypoShieldParser.T__1:
				{
				{
				this.state = 46;
				this.match(TypoShieldParser.T__1);
				this.state = 47;
				this.match(TypoShieldParser.ID);
				this.state = 48;
				this.match(TypoShieldParser.T__1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public objects(): ObjectsContext {
		let _localctx: ObjectsContext = new ObjectsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TypoShieldParser.RULE_objects);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(TypoShieldParser.LCURLY);
			this.state = 52;
			this.object();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.COMA) {
				{
				{
				this.state = 53;
				this.match(TypoShieldParser.COMA);
				this.state = 54;
				this.object();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 60;
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
			this.state = 62;
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
			this.state = 64;
			this.match(TypoShieldParser.T__2);
			this.state = 65;
			this.enum();
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.COMA) {
				{
				{
				this.state = 66;
				this.match(TypoShieldParser.COMA);
				this.state = 67;
				this.enum();
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 73;
			this.match(TypoShieldParser.T__3);
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
			this.state = 75;
			this.match(TypoShieldParser.DIRECTIVE);
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 76;
				this.match(TypoShieldParser.ENTITY_NAME);
				}
				break;

			case 2:
				{
				this.state = 77;
				this.match(TypoShieldParser.DIR_TYPE);
				this.state = 78;
				this.objects();
				}
				break;

			case 3:
				{
				this.state = 79;
				this.match(TypoShieldParser.DIR_TYPE);
				this.state = 80;
				this.utilitydirective();
				}
				break;

			case 4:
				{
				this.state = 81;
				this.enumeration();
				}
				break;
			}
			this.state = 84;
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
			this.state = 86;
			this.match(TypoShieldParser.METHOD_START);
			this.state = 87;
			this.match(TypoShieldParser.METHOD);
			this.state = 88;
			this.match(TypoShieldParser.T__0);
			this.state = 89;
			this.match(TypoShieldParser.LCURLY);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.START_SYM) {
				{
				{
				this.state = 90;
				this.endpoints();
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 96;
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
	public endpoints(): EndpointsContext {
		let _localctx: EndpointsContext = new EndpointsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TypoShieldParser.RULE_endpoints);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(TypoShieldParser.START_SYM);
			this.state = 99;
			this.match(TypoShieldParser.ID);
			this.state = 100;
			this.match(TypoShieldParser.T__0);
			this.state = 101;
			this.match(TypoShieldParser.LCURLY);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.START_SYM || _la === TypoShieldParser.DIRECTIVE) {
				{
				this.state = 104;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TypoShieldParser.START_SYM:
					{
					this.state = 102;
					this.endpoints();
					}
					break;
				case TypoShieldParser.DIRECTIVE:
					{
					this.state = 103;
					this.directives();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 109;
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
	public errors(): ErrorsContext {
		let _localctx: ErrorsContext = new ErrorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TypoShieldParser.RULE_errors);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(TypoShieldParser.DEFINE_ERROR);
			this.state = 112;
			this.match(TypoShieldParser.LBRACKET);
			this.state = 113;
			this.match(TypoShieldParser.NUMBER);
			this.state = 114;
			this.match(TypoShieldParser.COMA);
			this.state = 115;
			this.match(TypoShieldParser.ENTITY_NAME);
			this.state = 116;
			this.match(TypoShieldParser.RBRACKET);
			this.state = 117;
			this.match(TypoShieldParser.T__0);
			this.state = 118;
			this.match(TypoShieldParser.DIR_TYPE);
			this.state = 119;
			this.objects();
			this.state = 120;
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
	public dtos(): DtosContext {
		let _localctx: DtosContext = new DtosContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TypoShieldParser.RULE_dtos);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(TypoShieldParser.DEFINE_DTO);
			this.state = 123;
			this.match(TypoShieldParser.LBRACKET);
			this.state = 124;
			this.match(TypoShieldParser.ENTITY_NAME);
			this.state = 125;
			this.match(TypoShieldParser.RBRACKET);
			this.state = 126;
			this.match(TypoShieldParser.T__0);
			this.state = 127;
			this.match(TypoShieldParser.DIR_TYPE);
			this.state = 128;
			this.objects();
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
	public defines(): DefinesContext {
		let _localctx: DefinesContext = new DefinesContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TypoShieldParser.RULE_defines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(TypoShieldParser.METHOD_START);
			this.state = 132;
			this.match(TypoShieldParser.DEFINE);
			this.state = 133;
			this.match(TypoShieldParser.T__0);
			this.state = 134;
			this.match(TypoShieldParser.LCURLY);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.DEFINE_ERROR || _la === TypoShieldParser.DEFINE_DTO) {
				{
				this.state = 137;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TypoShieldParser.DEFINE_ERROR:
					{
					this.state = 135;
					this.errors();
					}
					break;
				case TypoShieldParser.DEFINE_DTO:
					{
					this.state = 136;
					this.dtos();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 142;
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
	public protocol(): ProtocolContext {
		let _localctx: ProtocolContext = new ProtocolContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TypoShieldParser.RULE_protocol);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(TypoShieldParser.PROTOCOL);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypoShieldParser.PROTOCOL_VERSION_DEL) {
				{
				this.state = 145;
				this.match(TypoShieldParser.PROTOCOL_VERSION_DEL);
				this.state = 146;
				this.match(TypoShieldParser.PROTOCOL_VERSION);
				}
			}

			this.state = 149;
			this.match(TypoShieldParser.T__0);
			this.state = 150;
			this.match(TypoShieldParser.LCURLY);
			this.state = 154;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 151;
					this.defines();
					}
					}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.METHOD_START) {
				{
				{
				this.state = 157;
				this.methods();
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 163;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1E\xA8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03" +
		"$\n\x03\f\x03\x0E\x03\'\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x054\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06:\n\x06\f\x06\x0E\x06=\v\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\bG\n\b\f\b\x0E\bJ\v\b" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tU\n\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n^\n\n\f\n\x0E\na\v\n\x03\n" +
		"\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\vk\n\v\f\v\x0E\vn\v\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x8C\n\x0E\f\x0E\x0E\x0E\x8F\v" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x96\n\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\x9B\n\x0F\f\x0F\x0E\x0F\x9E\v\x0F\x03\x0F\x07" +
		"\x0F\xA1\n\x0F\f\x0F\x0E\x0F\xA4\v\x0F\x03\x0F\x03\x0F\x03\x0F\x02\x02" +
		"\x02\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x02\x02\xA8\x02\x1E\x03" +
		"\x02\x02\x02\x04 \x03\x02\x02\x02\x06(\x03\x02\x02\x02\b-\x03\x02\x02" +
		"\x02\n5\x03\x02\x02\x02\f@\x03\x02\x02\x02\x0EB\x03\x02\x02\x02\x10M\x03" +
		"\x02\x02\x02\x12X\x03\x02\x02\x02\x14d\x03\x02\x02\x02\x16q\x03\x02\x02" +
		"\x02\x18|\x03\x02\x02\x02\x1A\x85\x03\x02\x02\x02\x1C\x92\x03\x02\x02" +
		"\x02\x1E\x1F\x05\x1C\x0F\x02\x1F\x03\x03\x02\x02\x02 %\x07\x1E\x02\x02" +
		"!\"\x07\x17\x02\x02\"$\x07\x1E\x02\x02#!\x03\x02\x02\x02$\'\x03\x02\x02" +
		"\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&\x05\x03\x02\x02\x02\'%\x03\x02" +
		"\x02\x02()\x07\x1A\x02\x02)*\x07\x13\x02\x02*+\x05\x04\x03\x02+,\x07\x14" +
		"\x02\x02,\x07\x03\x02\x02\x02-.\x07\x1E\x02\x02.3\x07\x03\x02\x02/4\x07" +
		"\x19\x02\x0201\x07\x04\x02\x0212\x07\x1E\x02\x0224\x07\x04\x02\x023/\x03" +
		"\x02\x02\x0230\x03\x02\x02\x024\t\x03\x02\x02\x0256\x07\x12\x02\x026;" +
		"\x05\b\x05\x0278\x07\x17\x02\x028:\x05\b\x05\x0297\x03\x02\x02\x02:=\x03" +
		"\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x03\x02\x02\x02=;\x03" +
		"\x02\x02\x02>?\x07\x15\x02\x02?\v\x03\x02\x02\x02@A\x07\x1B\x02\x02A\r" +
		"\x03\x02\x02\x02BC\x07\x05\x02\x02CH\x05\f\x07\x02DE\x07\x17\x02\x02E" +
		"G\x05\f\x07\x02FD\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02" +
		"HI\x03\x02\x02\x02IK\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x07\x06\x02\x02" +
		"L\x0F\x03\x02\x02\x02MT\x07\x1C\x02\x02NU\x07\x1B\x02\x02OP\x07\x07\x02" +
		"\x02PU\x05\n\x06\x02QR\x07\x07\x02\x02RU\x05\x06\x04\x02SU\x05\x0E\b\x02" +
		"TN\x03\x02\x02\x02TO\x03\x02\x02\x02TQ\x03\x02\x02\x02TS\x03\x02\x02\x02" +
		"UV\x03\x02\x02\x02VW\x07\x16\x02\x02W\x11\x03\x02\x02\x02XY\x07\t\x02" +
		"\x02YZ\x07\x0E\x02\x02Z[\x07\x03\x02\x02[_\x07\x12\x02\x02\\^\x05\x14" +
		"\v\x02]\\\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02" +
		"\x02\x02`b\x03\x02\x02\x02a_\x03\x02\x02\x02bc\x07\x15\x02\x02c\x13\x03" +
		"\x02\x02\x02de\x07\b\x02\x02ef\x07\x1E\x02\x02fg\x07\x03\x02\x02gl\x07" +
		"\x12\x02\x02hk\x05\x14\v\x02ik\x05\x10\t\x02jh\x03\x02\x02\x02ji\x03\x02" +
		"\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02" +
		"\x02\x02nl\x03\x02\x02\x02op\x07\x15\x02\x02p\x15\x03\x02\x02\x02qr\x07" +
		"\x10\x02\x02rs\x07\x13\x02\x02st\x07\v\x02\x02tu\x07\x17\x02\x02uv\x07" +
		"\x1B\x02\x02vw\x07\x14\x02\x02wx\x07\x03\x02\x02xy\x07\x07\x02\x02yz\x05" +
		"\n\x06\x02z{\x07\x16\x02\x02{\x17\x03\x02\x02\x02|}\x07\x11\x02\x02}~" +
		"\x07\x13\x02\x02~\x7F\x07\x1B\x02\x02\x7F\x80\x07\x14\x02\x02\x80\x81" +
		"\x07\x03\x02\x02\x81\x82\x07\x07\x02\x02\x82\x83\x05\n\x06\x02\x83\x84" +
		"\x07\x16\x02\x02\x84\x19\x03\x02\x02\x02\x85\x86\x07\t\x02\x02\x86\x87" +
		"\x07\x0F\x02\x02\x87\x88\x07\x03\x02\x02\x88\x8D\x07\x12\x02\x02\x89\x8C" +
		"\x05\x16\f\x02\x8A\x8C\x05\x18\r\x02\x8B\x89\x03\x02\x02\x02\x8B\x8A\x03" +
		"\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03" +
		"\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90\x91\x07" +
		"\x15\x02\x02\x91\x1B\x03\x02\x02\x02\x92\x95\x07\n\x02\x02\x93\x94\x07" +
		"\r\x02\x02\x94\x96\x07\f\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02" +
		"\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x07\x03\x02\x02\x98\x9C\x07\x12" +
		"\x02\x02\x99\x9B\x05\x1A\x0E\x02\x9A\x99\x03\x02\x02\x02\x9B\x9E\x03\x02" +
		"\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\xA2\x03\x02" +
		"\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA1\x05\x12\n\x02\xA0\x9F\x03\x02" +
		"\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02" +
		"\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA6\x07\x15" +
		"\x02\x02\xA6\x1D\x03\x02\x02\x02\x0F%3;HT_jl\x8B\x8D\x95\x9C\xA2";
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypoShieldParser.ID);
		} else {
			return this.getToken(TypoShieldParser.ID, i);
		}
	}
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(TypoShieldParser.TYPE, 0); }
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


export class DtosContext extends ParserRuleContext {
	public DEFINE_DTO(): TerminalNode { return this.getToken(TypoShieldParser.DEFINE_DTO, 0); }
	public LBRACKET(): TerminalNode { return this.getToken(TypoShieldParser.LBRACKET, 0); }
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
	public get ruleIndex(): number { return TypoShieldParser.RULE_dtos; }
	// @Override
	public enterRule(listener: TypoShieldListener): void {
		if (listener.enterDtos) {
			listener.enterDtos(this);
		}
	}
	// @Override
	public exitRule(listener: TypoShieldListener): void {
		if (listener.exitDtos) {
			listener.exitDtos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypoShieldVisitor<Result>): Result {
		if (visitor.visitDtos) {
			return visitor.visitDtos(this);
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
	public errors(): ErrorsContext[];
	public errors(i: number): ErrorsContext;
	public errors(i?: number): ErrorsContext | ErrorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ErrorsContext);
		} else {
			return this.getRuleContext(i, ErrorsContext);
		}
	}
	public dtos(): DtosContext[];
	public dtos(i: number): DtosContext;
	public dtos(i?: number): DtosContext | DtosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DtosContext);
		} else {
			return this.getRuleContext(i, DtosContext);
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



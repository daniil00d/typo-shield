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
	public static readonly RCURLY = 10;
	public static readonly SEMI = 11;
	public static readonly COMA = 12;
	public static readonly WS = 13;
	public static readonly TYPE = 14;
	public static readonly DIR_NAME = 15;
	public static readonly DIRECTIVE = 16;
	public static readonly ENDPOINT_NAME = 17;
	public static readonly COMMENT = 18;
	public static readonly RULE_start = 0;
	public static readonly RULE_object = 1;
	public static readonly RULE_objects = 2;
	public static readonly RULE_directives = 3;
	public static readonly RULE_protocol = 4;
	public static readonly RULE_methods = 5;
	public static readonly RULE_endpoints = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "object", "objects", "directives", "protocol", "methods", "endpoints",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'JSON'", "'>'", "'$'", "'HTTP'", undefined, "'/'", 
		undefined, "'{'", "'}'", "';'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "DIR_TYPE", "START_SYM", "METHOD_START", "PROTOCOL", 
		"PROTOCOL_VERSION", "PROTOCOL_VERSION_DEL", "METHOD", "LCURLY", "RCURLY", 
		"SEMI", "COMA", "WS", "TYPE", "DIR_NAME", "DIRECTIVE", "ENDPOINT_NAME", 
		"COMMENT",
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
			this.state = 14;
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
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TypoShieldParser.RULE_object);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.match(TypoShieldParser.ENDPOINT_NAME);
			this.state = 17;
			this.match(TypoShieldParser.T__0);
			this.state = 18;
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
		this.enterRule(_localctx, 4, TypoShieldParser.RULE_objects);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.match(TypoShieldParser.LCURLY);
			this.state = 21;
			this.object();
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.COMA) {
				{
				{
				this.state = 22;
				this.match(TypoShieldParser.COMA);
				this.state = 23;
				this.object();
				}
				}
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 29;
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
		this.enterRule(_localctx, 6, TypoShieldParser.RULE_directives);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.match(TypoShieldParser.DIRECTIVE);
			this.state = 35;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypoShieldParser.DIR_NAME:
				{
				this.state = 32;
				this.match(TypoShieldParser.DIR_NAME);
				}
				break;
			case TypoShieldParser.DIR_TYPE:
				{
				this.state = 33;
				this.match(TypoShieldParser.DIR_TYPE);
				this.state = 34;
				this.objects();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 37;
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
		this.enterRule(_localctx, 8, TypoShieldParser.RULE_protocol);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(TypoShieldParser.PROTOCOL);
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypoShieldParser.PROTOCOL_VERSION_DEL) {
				{
				this.state = 40;
				this.match(TypoShieldParser.PROTOCOL_VERSION_DEL);
				this.state = 41;
				this.match(TypoShieldParser.PROTOCOL_VERSION);
				}
			}

			this.state = 44;
			this.match(TypoShieldParser.T__0);
			this.state = 45;
			this.match(TypoShieldParser.LCURLY);
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.METHOD_START) {
				{
				{
				this.state = 46;
				this.methods();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
			this.match(TypoShieldParser.RCURLY);
			this.state = 53;
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
		this.enterRule(_localctx, 10, TypoShieldParser.RULE_methods);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(TypoShieldParser.METHOD_START);
			this.state = 56;
			this.match(TypoShieldParser.METHOD);
			this.state = 57;
			this.match(TypoShieldParser.T__0);
			this.state = 58;
			this.match(TypoShieldParser.LCURLY);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.START_SYM) {
				{
				{
				this.state = 59;
				this.endpoints();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 65;
			this.match(TypoShieldParser.RCURLY);
			this.state = 66;
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
		this.enterRule(_localctx, 12, TypoShieldParser.RULE_endpoints);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(TypoShieldParser.START_SYM);
			this.state = 69;
			this.match(TypoShieldParser.ENDPOINT_NAME);
			this.state = 70;
			this.match(TypoShieldParser.T__0);
			this.state = 71;
			this.match(TypoShieldParser.LCURLY);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypoShieldParser.START_SYM || _la === TypoShieldParser.DIRECTIVE) {
				{
				this.state = 74;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TypoShieldParser.START_SYM:
					{
					this.state = 72;
					this.endpoints();
					}
					break;
				case TypoShieldParser.DIRECTIVE:
					{
					this.state = 73;
					this.directives();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 79;
			this.match(TypoShieldParser.RCURLY);
			this.state = 80;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14U\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\x1B\n\x04\f\x04\x0E\x04\x1E\v\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05&\n\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x05\x06-\n\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x062\n\x06\f\x06\x0E\x065\v\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07?\n\x07\f\x07\x0E\x07B\v\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bM\n\b\f\b\x0E\b" +
		"P\v\b\x03\b\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x02\x02\x02T\x02\x10\x03\x02\x02\x02\x04\x12" +
		"\x03\x02\x02\x02\x06\x16\x03\x02\x02\x02\b!\x03\x02\x02\x02\n)\x03\x02" +
		"\x02\x02\f9\x03\x02\x02\x02\x0EF\x03\x02\x02\x02\x10\x11\x05\n\x06\x02" +
		"\x11\x03\x03\x02\x02\x02\x12\x13\x07\x13\x02\x02\x13\x14\x07\x03\x02\x02" +
		"\x14\x15\x07\x10\x02\x02\x15\x05\x03\x02\x02\x02\x16\x17\x07\v\x02\x02" +
		"\x17\x1C\x05\x04\x03\x02\x18\x19\x07\x0E\x02\x02\x19\x1B\x05\x04\x03\x02" +
		"\x1A\x18\x03\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02" +
		"\x1C\x1D\x03\x02\x02\x02\x1D\x1F\x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02" +
		"\x1F \x07\f\x02\x02 \x07\x03\x02\x02\x02!%\x07\x12\x02\x02\"&\x07\x11" +
		"\x02\x02#$\x07\x04\x02\x02$&\x05\x06\x04\x02%\"\x03\x02\x02\x02%#\x03" +
		"\x02\x02\x02&\'\x03\x02\x02\x02\'(\x07\r\x02\x02(\t\x03\x02\x02\x02)," +
		"\x07\x07\x02\x02*+\x07\t\x02\x02+-\x07\b\x02\x02,*\x03\x02\x02\x02,-\x03" +
		"\x02\x02\x02-.\x03\x02\x02\x02./\x07\x03\x02\x02/3\x07\v\x02\x0202\x05" +
		"\f\x07\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03" +
		"\x02\x02\x0246\x03\x02\x02\x0253\x03\x02\x02\x0267\x07\f\x02\x0278\x07" +
		"\r\x02\x028\v\x03\x02\x02\x029:\x07\x06\x02\x02:;\x07\n\x02\x02;<\x07" +
		"\x03\x02\x02<@\x07\v\x02\x02=?\x05\x0E\b\x02>=\x03\x02\x02\x02?B\x03\x02" +
		"\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03\x02" +
		"\x02\x02CD\x07\f\x02\x02DE\x07\r\x02\x02E\r\x03\x02\x02\x02FG\x07\x05" +
		"\x02\x02GH\x07\x13\x02\x02HI\x07\x03\x02\x02IN\x07\v\x02\x02JM\x05\x0E" +
		"\b\x02KM\x05\b\x05\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02MP\x03\x02\x02" +
		"\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PN\x03\x02\x02" +
		"\x02QR\x07\f\x02\x02RS\x07\r\x02\x02S\x0F\x03\x02\x02\x02\t\x1C%,3@LN";
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


export class ObjectContext extends ParserRuleContext {
	public ENDPOINT_NAME(): TerminalNode { return this.getToken(TypoShieldParser.ENDPOINT_NAME, 0); }
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
	public ENDPOINT_NAME(): TerminalNode { return this.getToken(TypoShieldParser.ENDPOINT_NAME, 0); }
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



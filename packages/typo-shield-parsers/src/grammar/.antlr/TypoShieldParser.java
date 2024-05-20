// Generated from /Users/d.shenyagin/learning/typo-shield/packages/typo-shield-parsers/src/grammar/TypoShield.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class TypoShieldParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, DIR_TYPE=5, START_SYM=6, METHOD_START=7, 
		PROTOCOL=8, NUMBER=9, PROTOCOL_VERSION=10, PROTOCOL_VERSION_DEL=11, METHOD=12, 
		DEFINE=13, DEFINE_ERROR=14, DEFINE_DTO=15, LCURLY=16, LBRACKET=17, RBRACKET=18, 
		RCURLY=19, SEMI=20, COMA=21, WS=22, TYPE=23, UTILITY_DIRECTIVE=24, ENTITY_NAME=25, 
		DIRECTIVE=26, COMMENT=27, ID=28;
	public static final int
		RULE_start = 0, RULE_utilitydirectiveatom = 1, RULE_utilitydirective = 2, 
		RULE_object = 3, RULE_objects = 4, RULE_enum = 5, RULE_enumeration = 6, 
		RULE_directives = 7, RULE_methods = 8, RULE_endpoints = 9, RULE_errors = 10, 
		RULE_dtos = 11, RULE_defines = 12, RULE_protocol = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "utilitydirectiveatom", "utilitydirective", "object", "objects", 
			"enum", "enumeration", "directives", "methods", "endpoints", "errors", 
			"dtos", "defines", "protocol"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'\"'", "'['", "']'", "'JSON'", "'>'", "'$'", null, null, 
			null, "'/'", null, "'define'", "'error'", "'dto'", "'{'", "'('", "')'", 
			"'}'", "';'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "DIR_TYPE", "START_SYM", "METHOD_START", 
			"PROTOCOL", "NUMBER", "PROTOCOL_VERSION", "PROTOCOL_VERSION_DEL", "METHOD", 
			"DEFINE", "DEFINE_ERROR", "DEFINE_DTO", "LCURLY", "LBRACKET", "RBRACKET", 
			"RCURLY", "SEMI", "COMA", "WS", "TYPE", "UTILITY_DIRECTIVE", "ENTITY_NAME", 
			"DIRECTIVE", "COMMENT", "ID"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "TypoShield.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TypoShieldParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public ProtocolContext protocol() {
			return getRuleContext(ProtocolContext.class,0);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			protocol();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UtilitydirectiveatomContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(TypoShieldParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(TypoShieldParser.ID, i);
		}
		public List<TerminalNode> COMA() { return getTokens(TypoShieldParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(TypoShieldParser.COMA, i);
		}
		public UtilitydirectiveatomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_utilitydirectiveatom; }
	}

	public final UtilitydirectiveatomContext utilitydirectiveatom() throws RecognitionException {
		UtilitydirectiveatomContext _localctx = new UtilitydirectiveatomContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_utilitydirectiveatom);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			match(ID);
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(31);
				match(COMA);
				setState(32);
				match(ID);
				}
				}
				setState(37);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UtilitydirectiveContext extends ParserRuleContext {
		public TerminalNode UTILITY_DIRECTIVE() { return getToken(TypoShieldParser.UTILITY_DIRECTIVE, 0); }
		public TerminalNode LBRACKET() { return getToken(TypoShieldParser.LBRACKET, 0); }
		public UtilitydirectiveatomContext utilitydirectiveatom() {
			return getRuleContext(UtilitydirectiveatomContext.class,0);
		}
		public TerminalNode RBRACKET() { return getToken(TypoShieldParser.RBRACKET, 0); }
		public UtilitydirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_utilitydirective; }
	}

	public final UtilitydirectiveContext utilitydirective() throws RecognitionException {
		UtilitydirectiveContext _localctx = new UtilitydirectiveContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_utilitydirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(UTILITY_DIRECTIVE);
			setState(39);
			match(LBRACKET);
			setState(40);
			utilitydirectiveatom();
			setState(41);
			match(RBRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(TypoShieldParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(TypoShieldParser.ID, i);
		}
		public TerminalNode TYPE() { return getToken(TypoShieldParser.TYPE, 0); }
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_object);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(ID);
			setState(44);
			match(T__0);
			setState(49);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPE:
				{
				setState(45);
				match(TYPE);
				}
				break;
			case T__1:
				{
				{
				setState(46);
				match(T__1);
				setState(47);
				match(ID);
				setState(48);
				match(T__1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectsContext extends ParserRuleContext {
		public TerminalNode LCURLY() { return getToken(TypoShieldParser.LCURLY, 0); }
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public TerminalNode RCURLY() { return getToken(TypoShieldParser.RCURLY, 0); }
		public List<TerminalNode> COMA() { return getTokens(TypoShieldParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(TypoShieldParser.COMA, i);
		}
		public ObjectsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objects; }
	}

	public final ObjectsContext objects() throws RecognitionException {
		ObjectsContext _localctx = new ObjectsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_objects);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(LCURLY);
			setState(52);
			object();
			setState(57);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(53);
				match(COMA);
				setState(54);
				object();
				}
				}
				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(60);
			match(RCURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumContext extends ParserRuleContext {
		public TerminalNode ENTITY_NAME() { return getToken(TypoShieldParser.ENTITY_NAME, 0); }
		public EnumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enum; }
	}

	public final EnumContext enum_() throws RecognitionException {
		EnumContext _localctx = new EnumContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_enum);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(ENTITY_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumerationContext extends ParserRuleContext {
		public List<EnumContext> enum_() {
			return getRuleContexts(EnumContext.class);
		}
		public EnumContext enum_(int i) {
			return getRuleContext(EnumContext.class,i);
		}
		public List<TerminalNode> COMA() { return getTokens(TypoShieldParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(TypoShieldParser.COMA, i);
		}
		public EnumerationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumeration; }
	}

	public final EnumerationContext enumeration() throws RecognitionException {
		EnumerationContext _localctx = new EnumerationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_enumeration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			match(T__2);
			setState(65);
			enum_();
			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(66);
				match(COMA);
				setState(67);
				enum_();
				}
				}
				setState(72);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(73);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DirectivesContext extends ParserRuleContext {
		public TerminalNode DIRECTIVE() { return getToken(TypoShieldParser.DIRECTIVE, 0); }
		public TerminalNode SEMI() { return getToken(TypoShieldParser.SEMI, 0); }
		public TerminalNode ENTITY_NAME() { return getToken(TypoShieldParser.ENTITY_NAME, 0); }
		public TerminalNode DIR_TYPE() { return getToken(TypoShieldParser.DIR_TYPE, 0); }
		public ObjectsContext objects() {
			return getRuleContext(ObjectsContext.class,0);
		}
		public UtilitydirectiveContext utilitydirective() {
			return getRuleContext(UtilitydirectiveContext.class,0);
		}
		public EnumerationContext enumeration() {
			return getRuleContext(EnumerationContext.class,0);
		}
		public DirectivesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directives; }
	}

	public final DirectivesContext directives() throws RecognitionException {
		DirectivesContext _localctx = new DirectivesContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_directives);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(DIRECTIVE);
			setState(82);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(76);
				match(ENTITY_NAME);
				}
				break;
			case 2:
				{
				setState(77);
				match(DIR_TYPE);
				setState(78);
				objects();
				}
				break;
			case 3:
				{
				setState(79);
				match(DIR_TYPE);
				setState(80);
				utilitydirective();
				}
				break;
			case 4:
				{
				setState(81);
				enumeration();
				}
				break;
			}
			setState(84);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MethodsContext extends ParserRuleContext {
		public TerminalNode METHOD_START() { return getToken(TypoShieldParser.METHOD_START, 0); }
		public TerminalNode METHOD() { return getToken(TypoShieldParser.METHOD, 0); }
		public TerminalNode LCURLY() { return getToken(TypoShieldParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(TypoShieldParser.RCURLY, 0); }
		public List<EndpointsContext> endpoints() {
			return getRuleContexts(EndpointsContext.class);
		}
		public EndpointsContext endpoints(int i) {
			return getRuleContext(EndpointsContext.class,i);
		}
		public MethodsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methods; }
	}

	public final MethodsContext methods() throws RecognitionException {
		MethodsContext _localctx = new MethodsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_methods);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(METHOD_START);
			setState(87);
			match(METHOD);
			setState(88);
			match(T__0);
			setState(89);
			match(LCURLY);
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==START_SYM) {
				{
				{
				setState(90);
				endpoints();
				}
				}
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(96);
			match(RCURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EndpointsContext extends ParserRuleContext {
		public TerminalNode START_SYM() { return getToken(TypoShieldParser.START_SYM, 0); }
		public TerminalNode ID() { return getToken(TypoShieldParser.ID, 0); }
		public TerminalNode LCURLY() { return getToken(TypoShieldParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(TypoShieldParser.RCURLY, 0); }
		public List<EndpointsContext> endpoints() {
			return getRuleContexts(EndpointsContext.class);
		}
		public EndpointsContext endpoints(int i) {
			return getRuleContext(EndpointsContext.class,i);
		}
		public List<DirectivesContext> directives() {
			return getRuleContexts(DirectivesContext.class);
		}
		public DirectivesContext directives(int i) {
			return getRuleContext(DirectivesContext.class,i);
		}
		public EndpointsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_endpoints; }
	}

	public final EndpointsContext endpoints() throws RecognitionException {
		EndpointsContext _localctx = new EndpointsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_endpoints);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			match(START_SYM);
			setState(99);
			match(ID);
			setState(100);
			match(T__0);
			setState(101);
			match(LCURLY);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==START_SYM || _la==DIRECTIVE) {
				{
				setState(104);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case START_SYM:
					{
					setState(102);
					endpoints();
					}
					break;
				case DIRECTIVE:
					{
					setState(103);
					directives();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(109);
			match(RCURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ErrorsContext extends ParserRuleContext {
		public TerminalNode DEFINE_ERROR() { return getToken(TypoShieldParser.DEFINE_ERROR, 0); }
		public TerminalNode LBRACKET() { return getToken(TypoShieldParser.LBRACKET, 0); }
		public TerminalNode NUMBER() { return getToken(TypoShieldParser.NUMBER, 0); }
		public TerminalNode COMA() { return getToken(TypoShieldParser.COMA, 0); }
		public TerminalNode ENTITY_NAME() { return getToken(TypoShieldParser.ENTITY_NAME, 0); }
		public TerminalNode RBRACKET() { return getToken(TypoShieldParser.RBRACKET, 0); }
		public TerminalNode DIR_TYPE() { return getToken(TypoShieldParser.DIR_TYPE, 0); }
		public ObjectsContext objects() {
			return getRuleContext(ObjectsContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(TypoShieldParser.SEMI, 0); }
		public ErrorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errors; }
	}

	public final ErrorsContext errors() throws RecognitionException {
		ErrorsContext _localctx = new ErrorsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_errors);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(DEFINE_ERROR);
			setState(112);
			match(LBRACKET);
			setState(113);
			match(NUMBER);
			setState(114);
			match(COMA);
			setState(115);
			match(ENTITY_NAME);
			setState(116);
			match(RBRACKET);
			setState(117);
			match(T__0);
			setState(118);
			match(DIR_TYPE);
			setState(119);
			objects();
			setState(120);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DtosContext extends ParserRuleContext {
		public TerminalNode DEFINE_DTO() { return getToken(TypoShieldParser.DEFINE_DTO, 0); }
		public TerminalNode LBRACKET() { return getToken(TypoShieldParser.LBRACKET, 0); }
		public TerminalNode ENTITY_NAME() { return getToken(TypoShieldParser.ENTITY_NAME, 0); }
		public TerminalNode RBRACKET() { return getToken(TypoShieldParser.RBRACKET, 0); }
		public TerminalNode DIR_TYPE() { return getToken(TypoShieldParser.DIR_TYPE, 0); }
		public ObjectsContext objects() {
			return getRuleContext(ObjectsContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(TypoShieldParser.SEMI, 0); }
		public DtosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dtos; }
	}

	public final DtosContext dtos() throws RecognitionException {
		DtosContext _localctx = new DtosContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_dtos);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(DEFINE_DTO);
			setState(123);
			match(LBRACKET);
			setState(124);
			match(ENTITY_NAME);
			setState(125);
			match(RBRACKET);
			setState(126);
			match(T__0);
			setState(127);
			match(DIR_TYPE);
			setState(128);
			objects();
			setState(129);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefinesContext extends ParserRuleContext {
		public TerminalNode METHOD_START() { return getToken(TypoShieldParser.METHOD_START, 0); }
		public TerminalNode DEFINE() { return getToken(TypoShieldParser.DEFINE, 0); }
		public TerminalNode LCURLY() { return getToken(TypoShieldParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(TypoShieldParser.RCURLY, 0); }
		public List<ErrorsContext> errors() {
			return getRuleContexts(ErrorsContext.class);
		}
		public ErrorsContext errors(int i) {
			return getRuleContext(ErrorsContext.class,i);
		}
		public List<DtosContext> dtos() {
			return getRuleContexts(DtosContext.class);
		}
		public DtosContext dtos(int i) {
			return getRuleContext(DtosContext.class,i);
		}
		public DefinesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defines; }
	}

	public final DefinesContext defines() throws RecognitionException {
		DefinesContext _localctx = new DefinesContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_defines);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(METHOD_START);
			setState(132);
			match(DEFINE);
			setState(133);
			match(T__0);
			setState(134);
			match(LCURLY);
			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DEFINE_ERROR || _la==DEFINE_DTO) {
				{
				setState(137);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case DEFINE_ERROR:
					{
					setState(135);
					errors();
					}
					break;
				case DEFINE_DTO:
					{
					setState(136);
					dtos();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(141);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(142);
			match(RCURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProtocolContext extends ParserRuleContext {
		public TerminalNode PROTOCOL() { return getToken(TypoShieldParser.PROTOCOL, 0); }
		public TerminalNode LCURLY() { return getToken(TypoShieldParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(TypoShieldParser.RCURLY, 0); }
		public TerminalNode PROTOCOL_VERSION_DEL() { return getToken(TypoShieldParser.PROTOCOL_VERSION_DEL, 0); }
		public TerminalNode PROTOCOL_VERSION() { return getToken(TypoShieldParser.PROTOCOL_VERSION, 0); }
		public List<DefinesContext> defines() {
			return getRuleContexts(DefinesContext.class);
		}
		public DefinesContext defines(int i) {
			return getRuleContext(DefinesContext.class,i);
		}
		public List<MethodsContext> methods() {
			return getRuleContexts(MethodsContext.class);
		}
		public MethodsContext methods(int i) {
			return getRuleContext(MethodsContext.class,i);
		}
		public ProtocolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocol; }
	}

	public final ProtocolContext protocol() throws RecognitionException {
		ProtocolContext _localctx = new ProtocolContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_protocol);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(PROTOCOL);
			setState(147);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PROTOCOL_VERSION_DEL) {
				{
				setState(145);
				match(PROTOCOL_VERSION_DEL);
				setState(146);
				match(PROTOCOL_VERSION);
				}
			}

			setState(149);
			match(T__0);
			setState(150);
			match(LCURLY);
			setState(154);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(151);
					defines();
					}
					} 
				}
				setState(156);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			setState(160);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==METHOD_START) {
				{
				{
				setState(157);
				methods();
				}
				}
				setState(162);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(163);
			match(RCURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001c\u00a6\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0005\u0001\"\b\u0001\n\u0001\f\u0001%\t\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00032\b"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u00048\b"+
		"\u0004\n\u0004\f\u0004;\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006E\b"+
		"\u0006\n\u0006\f\u0006H\t\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003"+
		"\u0007S\b\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0005\b\\\b\b\n\b\f\b_\t\b\u0001\b\u0001\b\u0001\t\u0001\t"+
		"\u0001\t\u0001\t\u0001\t\u0001\t\u0005\ti\b\t\n\t\f\tl\t\t\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0005\f\u008a\b\f\n\f\f\f\u008d\t\f\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\r\u0003\r\u0094\b\r\u0001\r\u0001\r\u0001"+
		"\r\u0005\r\u0099\b\r\n\r\f\r\u009c\t\r\u0001\r\u0005\r\u009f\b\r\n\r\f"+
		"\r\u00a2\t\r\u0001\r\u0001\r\u0001\r\u0000\u0000\u000e\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0000\u0000\u00a6"+
		"\u0000\u001c\u0001\u0000\u0000\u0000\u0002\u001e\u0001\u0000\u0000\u0000"+
		"\u0004&\u0001\u0000\u0000\u0000\u0006+\u0001\u0000\u0000\u0000\b3\u0001"+
		"\u0000\u0000\u0000\n>\u0001\u0000\u0000\u0000\f@\u0001\u0000\u0000\u0000"+
		"\u000eK\u0001\u0000\u0000\u0000\u0010V\u0001\u0000\u0000\u0000\u0012b"+
		"\u0001\u0000\u0000\u0000\u0014o\u0001\u0000\u0000\u0000\u0016z\u0001\u0000"+
		"\u0000\u0000\u0018\u0083\u0001\u0000\u0000\u0000\u001a\u0090\u0001\u0000"+
		"\u0000\u0000\u001c\u001d\u0003\u001a\r\u0000\u001d\u0001\u0001\u0000\u0000"+
		"\u0000\u001e#\u0005\u001c\u0000\u0000\u001f \u0005\u0015\u0000\u0000 "+
		"\"\u0005\u001c\u0000\u0000!\u001f\u0001\u0000\u0000\u0000\"%\u0001\u0000"+
		"\u0000\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$\u0003"+
		"\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000&\'\u0005\u0018\u0000"+
		"\u0000\'(\u0005\u0011\u0000\u0000()\u0003\u0002\u0001\u0000)*\u0005\u0012"+
		"\u0000\u0000*\u0005\u0001\u0000\u0000\u0000+,\u0005\u001c\u0000\u0000"+
		",1\u0005\u0001\u0000\u0000-2\u0005\u0017\u0000\u0000./\u0005\u0002\u0000"+
		"\u0000/0\u0005\u001c\u0000\u000002\u0005\u0002\u0000\u00001-\u0001\u0000"+
		"\u0000\u00001.\u0001\u0000\u0000\u00002\u0007\u0001\u0000\u0000\u0000"+
		"34\u0005\u0010\u0000\u000049\u0003\u0006\u0003\u000056\u0005\u0015\u0000"+
		"\u000068\u0003\u0006\u0003\u000075\u0001\u0000\u0000\u00008;\u0001\u0000"+
		"\u0000\u000097\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:<\u0001"+
		"\u0000\u0000\u0000;9\u0001\u0000\u0000\u0000<=\u0005\u0013\u0000\u0000"+
		"=\t\u0001\u0000\u0000\u0000>?\u0005\u0019\u0000\u0000?\u000b\u0001\u0000"+
		"\u0000\u0000@A\u0005\u0003\u0000\u0000AF\u0003\n\u0005\u0000BC\u0005\u0015"+
		"\u0000\u0000CE\u0003\n\u0005\u0000DB\u0001\u0000\u0000\u0000EH\u0001\u0000"+
		"\u0000\u0000FD\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000GI\u0001"+
		"\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000IJ\u0005\u0004\u0000\u0000"+
		"J\r\u0001\u0000\u0000\u0000KR\u0005\u001a\u0000\u0000LS\u0005\u0019\u0000"+
		"\u0000MN\u0005\u0005\u0000\u0000NS\u0003\b\u0004\u0000OP\u0005\u0005\u0000"+
		"\u0000PS\u0003\u0004\u0002\u0000QS\u0003\f\u0006\u0000RL\u0001\u0000\u0000"+
		"\u0000RM\u0001\u0000\u0000\u0000RO\u0001\u0000\u0000\u0000RQ\u0001\u0000"+
		"\u0000\u0000ST\u0001\u0000\u0000\u0000TU\u0005\u0014\u0000\u0000U\u000f"+
		"\u0001\u0000\u0000\u0000VW\u0005\u0007\u0000\u0000WX\u0005\f\u0000\u0000"+
		"XY\u0005\u0001\u0000\u0000Y]\u0005\u0010\u0000\u0000Z\\\u0003\u0012\t"+
		"\u0000[Z\u0001\u0000\u0000\u0000\\_\u0001\u0000\u0000\u0000][\u0001\u0000"+
		"\u0000\u0000]^\u0001\u0000\u0000\u0000^`\u0001\u0000\u0000\u0000_]\u0001"+
		"\u0000\u0000\u0000`a\u0005\u0013\u0000\u0000a\u0011\u0001\u0000\u0000"+
		"\u0000bc\u0005\u0006\u0000\u0000cd\u0005\u001c\u0000\u0000de\u0005\u0001"+
		"\u0000\u0000ej\u0005\u0010\u0000\u0000fi\u0003\u0012\t\u0000gi\u0003\u000e"+
		"\u0007\u0000hf\u0001\u0000\u0000\u0000hg\u0001\u0000\u0000\u0000il\u0001"+
		"\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000"+
		"km\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000mn\u0005\u0013\u0000"+
		"\u0000n\u0013\u0001\u0000\u0000\u0000op\u0005\u000e\u0000\u0000pq\u0005"+
		"\u0011\u0000\u0000qr\u0005\t\u0000\u0000rs\u0005\u0015\u0000\u0000st\u0005"+
		"\u0019\u0000\u0000tu\u0005\u0012\u0000\u0000uv\u0005\u0001\u0000\u0000"+
		"vw\u0005\u0005\u0000\u0000wx\u0003\b\u0004\u0000xy\u0005\u0014\u0000\u0000"+
		"y\u0015\u0001\u0000\u0000\u0000z{\u0005\u000f\u0000\u0000{|\u0005\u0011"+
		"\u0000\u0000|}\u0005\u0019\u0000\u0000}~\u0005\u0012\u0000\u0000~\u007f"+
		"\u0005\u0001\u0000\u0000\u007f\u0080\u0005\u0005\u0000\u0000\u0080\u0081"+
		"\u0003\b\u0004\u0000\u0081\u0082\u0005\u0014\u0000\u0000\u0082\u0017\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0005\u0007\u0000\u0000\u0084\u0085\u0005"+
		"\r\u0000\u0000\u0085\u0086\u0005\u0001\u0000\u0000\u0086\u008b\u0005\u0010"+
		"\u0000\u0000\u0087\u008a\u0003\u0014\n\u0000\u0088\u008a\u0003\u0016\u000b"+
		"\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u0089\u0088\u0001\u0000\u0000"+
		"\u0000\u008a\u008d\u0001\u0000\u0000\u0000\u008b\u0089\u0001\u0000\u0000"+
		"\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c\u008e\u0001\u0000\u0000"+
		"\u0000\u008d\u008b\u0001\u0000\u0000\u0000\u008e\u008f\u0005\u0013\u0000"+
		"\u0000\u008f\u0019\u0001\u0000\u0000\u0000\u0090\u0093\u0005\b\u0000\u0000"+
		"\u0091\u0092\u0005\u000b\u0000\u0000\u0092\u0094\u0005\n\u0000\u0000\u0093"+
		"\u0091\u0001\u0000\u0000\u0000\u0093\u0094\u0001\u0000\u0000\u0000\u0094"+
		"\u0095\u0001\u0000\u0000\u0000\u0095\u0096\u0005\u0001\u0000\u0000\u0096"+
		"\u009a\u0005\u0010\u0000\u0000\u0097\u0099\u0003\u0018\f\u0000\u0098\u0097"+
		"\u0001\u0000\u0000\u0000\u0099\u009c\u0001\u0000\u0000\u0000\u009a\u0098"+
		"\u0001\u0000\u0000\u0000\u009a\u009b\u0001\u0000\u0000\u0000\u009b\u00a0"+
		"\u0001\u0000\u0000\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009d\u009f"+
		"\u0003\u0010\b\u0000\u009e\u009d\u0001\u0000\u0000\u0000\u009f\u00a2\u0001"+
		"\u0000\u0000\u0000\u00a0\u009e\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a3\u0001\u0000\u0000\u0000\u00a2\u00a0\u0001"+
		"\u0000\u0000\u0000\u00a3\u00a4\u0005\u0013\u0000\u0000\u00a4\u001b\u0001"+
		"\u0000\u0000\u0000\r#19FR]hj\u0089\u008b\u0093\u009a\u00a0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
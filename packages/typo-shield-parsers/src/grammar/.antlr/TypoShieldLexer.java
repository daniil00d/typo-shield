// Generated from /Users/d.shenyagin/learning/typo-shield/packages/typo-shield-parsers/src/grammar/TypoShield.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class TypoShieldLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "DIR_TYPE", "START_SYM", "METHOD_START", 
			"PROTOCOL", "NUMBER", "PROTOCOL_VERSION", "PROTOCOL_VERSION_DEL", "METHOD", 
			"DEFINE", "DEFINE_ERROR", "DEFINE_DTO", "LCURLY", "LBRACKET", "RBRACKET", 
			"RCURLY", "SEMI", "COMA", "WS", "TYPE", "UTILITY_DIRECTIVE", "ENTITY_NAME", 
			"DIRECTIVE", "COMMENT", "ID"
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


	public TypoShieldLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TypoShield.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u001c\u010c\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a"+
		"\u0002\u001b\u0007\u001b\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007T\b\u0007"+
		"\u0001\b\u0004\bW\b\b\u000b\b\f\bX\u0001\t\u0001\t\u0001\t\u0001\t\u0003"+
		"\t_\b\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000bp\b\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001"+
		"\u0015\u0004\u0015\u0090\b\u0015\u000b\u0015\f\u0015\u0091\u0001\u0015"+
		"\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0003\u0016\u00a2\b\u0016\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0003\u0017\u00b4\b\u0017\u0001\u0018\u0001\u0018\u0004\u0018"+
		"\u00b8\b\u0018\u000b\u0018\f\u0018\u00b9\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0003"+
		"\u0019\u00fa\b\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0005\u001a\u0101\b\u001a\n\u001a\f\u001a\u0104\t\u001a\u0001\u001a"+
		"\u0001\u001a\u0001\u001b\u0004\u001b\u0109\b\u001b\u000b\u001b\f\u001b"+
		"\u010a\u0000\u0000\u001c\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'"+
		"\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b7\u001c\u0001\u0000"+
		"\u0006\u0001\u000009\u0003\u0000\t\n\f\r  \u0001\u0000AZ\u0002\u0000A"+
		"Zaz\u0002\u0000\n\n\r\r\u0004\u000009AZ__az\u011f\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000"+
		"#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001"+
		"\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000"+
		"\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u0000"+
		"1\u0001\u0000\u0000\u0000\u00003\u0001\u0000\u0000\u0000\u00005\u0001"+
		"\u0000\u0000\u0000\u00007\u0001\u0000\u0000\u0000\u00019\u0001\u0000\u0000"+
		"\u0000\u0003;\u0001\u0000\u0000\u0000\u0005=\u0001\u0000\u0000\u0000\u0007"+
		"?\u0001\u0000\u0000\u0000\tA\u0001\u0000\u0000\u0000\u000bF\u0001\u0000"+
		"\u0000\u0000\rH\u0001\u0000\u0000\u0000\u000fS\u0001\u0000\u0000\u0000"+
		"\u0011V\u0001\u0000\u0000\u0000\u0013^\u0001\u0000\u0000\u0000\u0015`"+
		"\u0001\u0000\u0000\u0000\u0017o\u0001\u0000\u0000\u0000\u0019q\u0001\u0000"+
		"\u0000\u0000\u001bx\u0001\u0000\u0000\u0000\u001d~\u0001\u0000\u0000\u0000"+
		"\u001f\u0082\u0001\u0000\u0000\u0000!\u0084\u0001\u0000\u0000\u0000#\u0086"+
		"\u0001\u0000\u0000\u0000%\u0088\u0001\u0000\u0000\u0000\'\u008a\u0001"+
		"\u0000\u0000\u0000)\u008c\u0001\u0000\u0000\u0000+\u008f\u0001\u0000\u0000"+
		"\u0000-\u00a1\u0001\u0000\u0000\u0000/\u00b3\u0001\u0000\u0000\u00001"+
		"\u00b5\u0001\u0000\u0000\u00003\u00f9\u0001\u0000\u0000\u00005\u00fb\u0001"+
		"\u0000\u0000\u00007\u0108\u0001\u0000\u0000\u00009:\u0005:\u0000\u0000"+
		":\u0002\u0001\u0000\u0000\u0000;<\u0005\"\u0000\u0000<\u0004\u0001\u0000"+
		"\u0000\u0000=>\u0005[\u0000\u0000>\u0006\u0001\u0000\u0000\u0000?@\u0005"+
		"]\u0000\u0000@\b\u0001\u0000\u0000\u0000AB\u0005J\u0000\u0000BC\u0005"+
		"S\u0000\u0000CD\u0005O\u0000\u0000DE\u0005N\u0000\u0000E\n\u0001\u0000"+
		"\u0000\u0000FG\u0005>\u0000\u0000G\f\u0001\u0000\u0000\u0000HI\u0005$"+
		"\u0000\u0000I\u000e\u0001\u0000\u0000\u0000JK\u0005H\u0000\u0000KL\u0005"+
		"T\u0000\u0000LM\u0005T\u0000\u0000MT\u0005P\u0000\u0000NO\u0005H\u0000"+
		"\u0000OP\u0005T\u0000\u0000PQ\u0005T\u0000\u0000QR\u0005P\u0000\u0000"+
		"RT\u0005S\u0000\u0000SJ\u0001\u0000\u0000\u0000SN\u0001\u0000\u0000\u0000"+
		"T\u0010\u0001\u0000\u0000\u0000UW\u0007\u0000\u0000\u0000VU\u0001\u0000"+
		"\u0000\u0000WX\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000XY\u0001"+
		"\u0000\u0000\u0000Y\u0012\u0001\u0000\u0000\u0000Z[\u0007\u0000\u0000"+
		"\u0000[\\\t\u0000\u0000\u0000\\_\u0007\u0000\u0000\u0000]_\u0007\u0000"+
		"\u0000\u0000^Z\u0001\u0000\u0000\u0000^]\u0001\u0000\u0000\u0000_\u0014"+
		"\u0001\u0000\u0000\u0000`a\u0005/\u0000\u0000a\u0016\u0001\u0000\u0000"+
		"\u0000bc\u0005G\u0000\u0000cd\u0005E\u0000\u0000dp\u0005T\u0000\u0000"+
		"ef\u0005P\u0000\u0000fg\u0005O\u0000\u0000gh\u0005S\u0000\u0000hp\u0005"+
		"T\u0000\u0000ij\u0005D\u0000\u0000jk\u0005E\u0000\u0000kl\u0005L\u0000"+
		"\u0000lm\u0005E\u0000\u0000mn\u0005T\u0000\u0000np\u0005E\u0000\u0000"+
		"ob\u0001\u0000\u0000\u0000oe\u0001\u0000\u0000\u0000oi\u0001\u0000\u0000"+
		"\u0000p\u0018\u0001\u0000\u0000\u0000qr\u0005d\u0000\u0000rs\u0005e\u0000"+
		"\u0000st\u0005f\u0000\u0000tu\u0005i\u0000\u0000uv\u0005n\u0000\u0000"+
		"vw\u0005e\u0000\u0000w\u001a\u0001\u0000\u0000\u0000xy\u0005e\u0000\u0000"+
		"yz\u0005r\u0000\u0000z{\u0005r\u0000\u0000{|\u0005o\u0000\u0000|}\u0005"+
		"r\u0000\u0000}\u001c\u0001\u0000\u0000\u0000~\u007f\u0005d\u0000\u0000"+
		"\u007f\u0080\u0005t\u0000\u0000\u0080\u0081\u0005o\u0000\u0000\u0081\u001e"+
		"\u0001\u0000\u0000\u0000\u0082\u0083\u0005{\u0000\u0000\u0083 \u0001\u0000"+
		"\u0000\u0000\u0084\u0085\u0005(\u0000\u0000\u0085\"\u0001\u0000\u0000"+
		"\u0000\u0086\u0087\u0005)\u0000\u0000\u0087$\u0001\u0000\u0000\u0000\u0088"+
		"\u0089\u0005}\u0000\u0000\u0089&\u0001\u0000\u0000\u0000\u008a\u008b\u0005"+
		";\u0000\u0000\u008b(\u0001\u0000\u0000\u0000\u008c\u008d\u0005,\u0000"+
		"\u0000\u008d*\u0001\u0000\u0000\u0000\u008e\u0090\u0007\u0001\u0000\u0000"+
		"\u008f\u008e\u0001\u0000\u0000\u0000\u0090\u0091\u0001\u0000\u0000\u0000"+
		"\u0091\u008f\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000"+
		"\u0092\u0093\u0001\u0000\u0000\u0000\u0093\u0094\u0006\u0015\u0000\u0000"+
		"\u0094,\u0001\u0000\u0000\u0000\u0095\u0096\u0005N\u0000\u0000\u0096\u0097"+
		"\u0005u\u0000\u0000\u0097\u0098\u0005m\u0000\u0000\u0098\u0099\u0005b"+
		"\u0000\u0000\u0099\u009a\u0005e\u0000\u0000\u009a\u00a2\u0005r\u0000\u0000"+
		"\u009b\u009c\u0005S\u0000\u0000\u009c\u009d\u0005t\u0000\u0000\u009d\u009e"+
		"\u0005r\u0000\u0000\u009e\u009f\u0005i\u0000\u0000\u009f\u00a0\u0005n"+
		"\u0000\u0000\u00a0\u00a2\u0005g\u0000\u0000\u00a1\u0095\u0001\u0000\u0000"+
		"\u0000\u00a1\u009b\u0001\u0000\u0000\u0000\u00a2.\u0001\u0000\u0000\u0000"+
		"\u00a3\u00a4\u0005#\u0000\u0000\u00a4\u00a5\u0005i\u0000\u0000\u00a5\u00a6"+
		"\u0005n\u0000\u0000\u00a6\u00a7\u0005c\u0000\u0000\u00a7\u00a8\u0005l"+
		"\u0000\u0000\u00a8\u00a9\u0005u\u0000\u0000\u00a9\u00aa\u0005d\u0000\u0000"+
		"\u00aa\u00b4\u0005e\u0000\u0000\u00ab\u00ac\u0005#\u0000\u0000\u00ac\u00ad"+
		"\u0005e\u0000\u0000\u00ad\u00ae\u0005x\u0000\u0000\u00ae\u00af\u0005c"+
		"\u0000\u0000\u00af\u00b0\u0005l\u0000\u0000\u00b0\u00b1\u0005u\u0000\u0000"+
		"\u00b1\u00b2\u0005d\u0000\u0000\u00b2\u00b4\u0005e\u0000\u0000\u00b3\u00a3"+
		"\u0001\u0000\u0000\u0000\u00b3\u00ab\u0001\u0000\u0000\u0000\u00b40\u0001"+
		"\u0000\u0000\u0000\u00b5\u00b7\u0007\u0002\u0000\u0000\u00b6\u00b8\u0007"+
		"\u0003\u0000\u0000\u00b7\u00b6\u0001\u0000\u0000\u0000\u00b8\u00b9\u0001"+
		"\u0000\u0000\u0000\u00b9\u00b7\u0001\u0000\u0000\u0000\u00b9\u00ba\u0001"+
		"\u0000\u0000\u0000\u00ba2\u0001\u0000\u0000\u0000\u00bb\u00bc\u0005@\u0000"+
		"\u0000\u00bc\u00bd\u0005s\u0000\u0000\u00bd\u00be\u0005e\u0000\u0000\u00be"+
		"\u00bf\u0005r\u0000\u0000\u00bf\u00c0\u0005v\u0000\u0000\u00c0\u00fa\u0005"+
		"e\u0000\u0000\u00c1\u00c2\u0005@\u0000\u0000\u00c2\u00c3\u0005b\u0000"+
		"\u0000\u00c3\u00c4\u0005o\u0000\u0000\u00c4\u00c5\u0005d\u0000\u0000\u00c5"+
		"\u00fa\u0005y\u0000\u0000\u00c6\u00c7\u0005@\u0000\u0000\u00c7\u00c8\u0005"+
		"p\u0000\u0000\u00c8\u00c9\u0005a\u0000\u0000\u00c9\u00ca\u0005r\u0000"+
		"\u0000\u00ca\u00cb\u0005a\u0000\u0000\u00cb\u00cc\u0005m\u0000\u0000\u00cc"+
		"\u00fa\u0005s\u0000\u0000\u00cd\u00ce\u0005@\u0000\u0000\u00ce\u00cf\u0005"+
		"q\u0000\u0000\u00cf\u00d0\u0005u\u0000\u0000\u00d0\u00d1\u0005e\u0000"+
		"\u0000\u00d1\u00d2\u0005r\u0000\u0000\u00d2\u00fa\u0005y\u0000\u0000\u00d3"+
		"\u00d4\u0005@\u0000\u0000\u00d4\u00d5\u0005m\u0000\u0000\u00d5\u00d6\u0005"+
		"e\u0000\u0000\u00d6\u00d7\u0005t\u0000\u0000\u00d7\u00fa\u0005a\u0000"+
		"\u0000\u00d8\u00d9\u0005@\u0000\u0000\u00d9\u00da\u0005t\u0000\u0000\u00da"+
		"\u00db\u0005e\u0000\u0000\u00db\u00dc\u0005s\u0000\u0000\u00dc\u00fa\u0005"+
		"t\u0000\u0000\u00dd\u00de\u0005@\u0000\u0000\u00de\u00df\u0005h\u0000"+
		"\u0000\u00df\u00e0\u0005e\u0000\u0000\u00e0\u00e1\u0005a\u0000\u0000\u00e1"+
		"\u00e2\u0005d\u0000\u0000\u00e2\u00e3\u0005e\u0000\u0000\u00e3\u00e4\u0005"+
		"r\u0000\u0000\u00e4\u00fa\u0005s\u0000\u0000\u00e5\u00e6\u0005@\u0000"+
		"\u0000\u00e6\u00e7\u0005o\u0000\u0000\u00e7\u00e8\u0005u\u0000\u0000\u00e8"+
		"\u00e9\u0005t\u0000\u0000\u00e9\u00ea\u0005p\u0000\u0000\u00ea\u00eb\u0005"+
		"u\u0000\u0000\u00eb\u00fa\u0005t\u0000\u0000\u00ec\u00ed\u0005@\u0000"+
		"\u0000\u00ed\u00ee\u0005s\u0000\u0000\u00ee\u00ef\u0005e\u0000\u0000\u00ef"+
		"\u00f0\u0005a\u0000\u0000\u00f0\u00f1\u0005r\u0000\u0000\u00f1\u00f2\u0005"+
		"c\u0000\u0000\u00f2\u00fa\u0005h\u0000\u0000\u00f3\u00f4\u0005@\u0000"+
		"\u0000\u00f4\u00f5\u0005e\u0000\u0000\u00f5\u00f6\u0005r\u0000\u0000\u00f6"+
		"\u00f7\u0005r\u0000\u0000\u00f7\u00f8\u0005o\u0000\u0000\u00f8\u00fa\u0005"+
		"r\u0000\u0000\u00f9\u00bb\u0001\u0000\u0000\u0000\u00f9\u00c1\u0001\u0000"+
		"\u0000\u0000\u00f9\u00c6\u0001\u0000\u0000\u0000\u00f9\u00cd\u0001\u0000"+
		"\u0000\u0000\u00f9\u00d3\u0001\u0000\u0000\u0000\u00f9\u00d8\u0001\u0000"+
		"\u0000\u0000\u00f9\u00dd\u0001\u0000\u0000\u0000\u00f9\u00e5\u0001\u0000"+
		"\u0000\u0000\u00f9\u00ec\u0001\u0000\u0000\u0000\u00f9\u00f3\u0001\u0000"+
		"\u0000\u0000\u00fa4\u0001\u0000\u0000\u0000\u00fb\u00fc\u0005/\u0000\u0000"+
		"\u00fc\u00fd\u0005/\u0000\u0000\u00fd\u00fe\u0005/\u0000\u0000\u00fe\u0102"+
		"\u0001\u0000\u0000\u0000\u00ff\u0101\b\u0004\u0000\u0000\u0100\u00ff\u0001"+
		"\u0000\u0000\u0000\u0101\u0104\u0001\u0000\u0000\u0000\u0102\u0100\u0001"+
		"\u0000\u0000\u0000\u0102\u0103\u0001\u0000\u0000\u0000\u0103\u0105\u0001"+
		"\u0000\u0000\u0000\u0104\u0102\u0001\u0000\u0000\u0000\u0105\u0106\u0006"+
		"\u001a\u0000\u0000\u01066\u0001\u0000\u0000\u0000\u0107\u0109\u0007\u0005"+
		"\u0000\u0000\u0108\u0107\u0001\u0000\u0000\u0000\u0109\u010a\u0001\u0000"+
		"\u0000\u0000\u010a\u0108\u0001\u0000\u0000\u0000\u010a\u010b\u0001\u0000"+
		"\u0000\u0000\u010b8\u0001\u0000\u0000\u0000\f\u0000SX^o\u0091\u00a1\u00b3"+
		"\u00b9\u00f9\u0102\u010a\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
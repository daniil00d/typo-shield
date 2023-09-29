import { CharStreams, CommonTokenStream } from "antlr4ts";
import { TypoShieldLexer } from "./grammar/TypoShieldLexer";
import { TypoShieldParser } from "./grammar/TypoShieldParser";
import { ParseTypoShieldListener } from "./listener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { TypoShieldListener } from "./grammar/TypoShieldListener";

// Create the lexer and parser
let inputStream = CharStreams.fromString(`
HTTP: {
  $GET: {
    > user: {
    @input JSON {a: Number, b: String};
    @output JSON {id: String};
    > list: {
      @output JSON {login: String};
      @serve GetUserList;
    };
    > get: {
        @input JSON {c: String};
        @serve GetUser;
      };
    };
  };
};
`);
let lexer = new TypoShieldLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new TypoShieldParser(tokenStream);

const tree = parser.start();

const customListener = new ParseTypoShieldListener({
  overrideDirectives: "merge",
});

ParseTreeWalker.DEFAULT.walk(customListener as TypoShieldListener, tree);

console.log(customListener.getEndpoints()[0].directives);

// Parse the input, where `compilationUnit` is whatever entry point you defined

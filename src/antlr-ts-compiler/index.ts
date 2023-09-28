import { CharStreams, CommonTokenStream } from "antlr4ts";
import { TypoShieldLexer } from "./grammar/TypoShieldLexer";
import { TypoShieldParser } from "./grammar/TypoShieldParser";

// Create the lexer and parser
let inputStream = CharStreams.fromString(`
HTTP: {
  $GET: {
    > user: {
    @input JSON {a: Number, b: String};
      > list: {
        @serve GetUserList;
      };
      > get: {
        @serve GetUser;
      };
    };
  };
};
`);
let lexer = new TypoShieldLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new TypoShieldParser(tokenStream);

parser.addParseListener({
  visitTerminal: (node) => console.log({ node: node.toStringTree() }),
});

parser.start();

// Parse the input, where `compilationUnit` is whatever entry point you defined

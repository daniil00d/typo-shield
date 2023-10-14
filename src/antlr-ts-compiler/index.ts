import { CharStreams, CommonTokenStream } from "antlr4ts";
import { TypoShieldLexer } from "./grammar/TypoShieldLexer";
import { TypoShieldParser } from "./grammar/TypoShieldParser";
import { ParseTypoShieldListener } from "./listener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { TypoShieldListener } from "./grammar/TypoShieldListener";
import { Endpoint, EndpointTree, HTTPVersionType, ParserListenerOptions, Protocol } from "./types";

export class Compiler {
  private tree: ParseTypoShieldListener;
  constructor(dsl: string, options?: ParserListenerOptions | undefined) {
    const inputStream = CharStreams.fromString(dsl);
    const lexer = new TypoShieldLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new TypoShieldParser(tokenStream);

    // `start` - init expression in grammar
    const tree = parser.start();

    const customListener = new ParseTypoShieldListener(options);

    ParseTreeWalker.DEFAULT.walk(customListener as TypoShieldListener, tree);

    this.tree = customListener;
  }

  public getEndpointTree(): EndpointTree {
    return {
      protocol: this.tree.getProtocol() as Protocol,
      protocolVersion: this.tree.getProtocolVersion(),
      endpoints: this.tree.getEndpoints()
    };
  }

  public getProtocolVersion(): HTTPVersionType {
    return this.tree.getProtocolVersion();
  }
}

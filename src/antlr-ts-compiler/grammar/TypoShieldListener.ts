// Generated from /Users/d.shenyagin/TypoShield/src/antlr-ts-compiler/grammar/TypoShield.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StartContext } from "./TypoShieldParser";
import { ObjectsContext } from "./TypoShieldParser";
import { DirectivesContext } from "./TypoShieldParser";
import { ProtocolContext } from "./TypoShieldParser";
import { MethodsContext } from "./TypoShieldParser";
import { EndpointsContext } from "./TypoShieldParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TypoShieldParser`.
 */
export interface TypoShieldListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TypoShieldParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `TypoShieldParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `TypoShieldParser.objects`.
	 * @param ctx the parse tree
	 */
	enterObjects?: (ctx: ObjectsContext) => void;
	/**
	 * Exit a parse tree produced by `TypoShieldParser.objects`.
	 * @param ctx the parse tree
	 */
	exitObjects?: (ctx: ObjectsContext) => void;

	/**
	 * Enter a parse tree produced by `TypoShieldParser.directives`.
	 * @param ctx the parse tree
	 */
	enterDirectives?: (ctx: DirectivesContext) => void;
	/**
	 * Exit a parse tree produced by `TypoShieldParser.directives`.
	 * @param ctx the parse tree
	 */
	exitDirectives?: (ctx: DirectivesContext) => void;

	/**
	 * Enter a parse tree produced by `TypoShieldParser.protocol`.
	 * @param ctx the parse tree
	 */
	enterProtocol?: (ctx: ProtocolContext) => void;
	/**
	 * Exit a parse tree produced by `TypoShieldParser.protocol`.
	 * @param ctx the parse tree
	 */
	exitProtocol?: (ctx: ProtocolContext) => void;

	/**
	 * Enter a parse tree produced by `TypoShieldParser.methods`.
	 * @param ctx the parse tree
	 */
	enterMethods?: (ctx: MethodsContext) => void;
	/**
	 * Exit a parse tree produced by `TypoShieldParser.methods`.
	 * @param ctx the parse tree
	 */
	exitMethods?: (ctx: MethodsContext) => void;

	/**
	 * Enter a parse tree produced by `TypoShieldParser.endpoints`.
	 * @param ctx the parse tree
	 */
	enterEndpoints?: (ctx: EndpointsContext) => void;
	/**
	 * Exit a parse tree produced by `TypoShieldParser.endpoints`.
	 * @param ctx the parse tree
	 */
	exitEndpoints?: (ctx: EndpointsContext) => void;
}


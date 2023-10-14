// Generated from src/antlr-ts-compiler/grammar/TypoShield.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StartContext } from "./TypoShieldParser";
import { UtilitydirectiveatomContext } from "./TypoShieldParser";
import { UtilitydirectiveContext } from "./TypoShieldParser";
import { ObjectContext } from "./TypoShieldParser";
import { ObjectsContext } from "./TypoShieldParser";
import { DirectivesContext } from "./TypoShieldParser";
import { ProtocolContext } from "./TypoShieldParser";
import { MethodsContext } from "./TypoShieldParser";
import { EndpointsContext } from "./TypoShieldParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TypoShieldParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TypoShieldVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TypoShieldParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `TypoShieldParser.utilitydirectiveatom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUtilitydirectiveatom?: (ctx: UtilitydirectiveatomContext) => Result;

	/**
	 * Visit a parse tree produced by `TypoShieldParser.utilitydirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUtilitydirective?: (ctx: UtilitydirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `TypoShieldParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `TypoShieldParser.objects`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjects?: (ctx: ObjectsContext) => Result;

	/**
	 * Visit a parse tree produced by `TypoShieldParser.directives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectives?: (ctx: DirectivesContext) => Result;

	/**
	 * Visit a parse tree produced by `TypoShieldParser.protocol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol?: (ctx: ProtocolContext) => Result;

	/**
	 * Visit a parse tree produced by `TypoShieldParser.methods`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethods?: (ctx: MethodsContext) => Result;

	/**
	 * Visit a parse tree produced by `TypoShieldParser.endpoints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndpoints?: (ctx: EndpointsContext) => Result;
}


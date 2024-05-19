import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { StartContext, UtilitydirectiveatomContext, UtilitydirectiveContext, ObjectContext, ObjectsContext, EnumContext, EnumerationContext, DirectivesContext, MethodsContext, EndpointsContext, ErrorsContext, DefinesContext, ProtocolContext } from './TypoShieldParser';

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
     * Visit a parse tree produced by `TypoShieldParser.enum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnum?: (ctx: EnumContext) => Result;
    /**
     * Visit a parse tree produced by `TypoShieldParser.enumeration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumeration?: (ctx: EnumerationContext) => Result;
    /**
     * Visit a parse tree produced by `TypoShieldParser.directives`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectives?: (ctx: DirectivesContext) => Result;
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
    /**
     * Visit a parse tree produced by `TypoShieldParser.errors`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrors?: (ctx: ErrorsContext) => Result;
    /**
     * Visit a parse tree produced by `TypoShieldParser.defines`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefines?: (ctx: DefinesContext) => Result;
    /**
     * Visit a parse tree produced by `TypoShieldParser.protocol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProtocol?: (ctx: ProtocolContext) => Result;
}

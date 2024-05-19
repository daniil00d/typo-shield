import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { StartContext, UtilitydirectiveatomContext, UtilitydirectiveContext, ObjectContext, ObjectsContext, EnumContext, EnumerationContext, DirectivesContext, MethodsContext, EndpointsContext, ErrorsContext, DefinesContext, ProtocolContext } from './TypoShieldParser';

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
     * Enter a parse tree produced by `TypoShieldParser.utilitydirectiveatom`.
     * @param ctx the parse tree
     */
    enterUtilitydirectiveatom?: (ctx: UtilitydirectiveatomContext) => void;
    /**
     * Exit a parse tree produced by `TypoShieldParser.utilitydirectiveatom`.
     * @param ctx the parse tree
     */
    exitUtilitydirectiveatom?: (ctx: UtilitydirectiveatomContext) => void;
    /**
     * Enter a parse tree produced by `TypoShieldParser.utilitydirective`.
     * @param ctx the parse tree
     */
    enterUtilitydirective?: (ctx: UtilitydirectiveContext) => void;
    /**
     * Exit a parse tree produced by `TypoShieldParser.utilitydirective`.
     * @param ctx the parse tree
     */
    exitUtilitydirective?: (ctx: UtilitydirectiveContext) => void;
    /**
     * Enter a parse tree produced by `TypoShieldParser.object`.
     * @param ctx the parse tree
     */
    enterObject?: (ctx: ObjectContext) => void;
    /**
     * Exit a parse tree produced by `TypoShieldParser.object`.
     * @param ctx the parse tree
     */
    exitObject?: (ctx: ObjectContext) => void;
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
     * Enter a parse tree produced by `TypoShieldParser.enum`.
     * @param ctx the parse tree
     */
    enterEnum?: (ctx: EnumContext) => void;
    /**
     * Exit a parse tree produced by `TypoShieldParser.enum`.
     * @param ctx the parse tree
     */
    exitEnum?: (ctx: EnumContext) => void;
    /**
     * Enter a parse tree produced by `TypoShieldParser.enumeration`.
     * @param ctx the parse tree
     */
    enterEnumeration?: (ctx: EnumerationContext) => void;
    /**
     * Exit a parse tree produced by `TypoShieldParser.enumeration`.
     * @param ctx the parse tree
     */
    exitEnumeration?: (ctx: EnumerationContext) => void;
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
    /**
     * Enter a parse tree produced by `TypoShieldParser.errors`.
     * @param ctx the parse tree
     */
    enterErrors?: (ctx: ErrorsContext) => void;
    /**
     * Exit a parse tree produced by `TypoShieldParser.errors`.
     * @param ctx the parse tree
     */
    exitErrors?: (ctx: ErrorsContext) => void;
    /**
     * Enter a parse tree produced by `TypoShieldParser.defines`.
     * @param ctx the parse tree
     */
    enterDefines?: (ctx: DefinesContext) => void;
    /**
     * Exit a parse tree produced by `TypoShieldParser.defines`.
     * @param ctx the parse tree
     */
    exitDefines?: (ctx: DefinesContext) => void;
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
}

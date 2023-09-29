import { Compiler } from "@compiler/index";
import { DSL, ImplementationMap } from "@compiler/types/common";
import { bindImplementation } from "./bind";
import { ExpressServer } from "./express-integration";
import { ParserListenerOptions } from "@compiler/types";

export const getServer = (dsl: DSL, implementations: ImplementationMap, options?: ParserListenerOptions) => {
	const endpointTree = new Compiler(dsl, options);
	const boundEndpoints = bindImplementation(implementations, endpointTree.getEndpointTree());

	const server = new ExpressServer(3000);

	server.bindEndpoint(boundEndpoints);

	return server;
};

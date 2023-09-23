import {
  EndpointTree,
  HTTPVersionType,
  MethodType,
  ProtocolType,
  ex_endpoint_tree,
} from "./07.ts-parser";

type ImpFunc = () => Record<string, any>;
type Imp = Record<string, ImpFunc>;

export type EndpointTreeWithImp = {
  protocol: ProtocolType;
  protocolVersion?: HTTPVersionType;
  endpoints: {
    pathname: string;
    method: MethodType;
    imp: ImpFunc | undefined;
  }[];
};

export const bindImp = (
  imps: Imp,
  endpointTree: EndpointTree
): EndpointTreeWithImp => {
  return {
    ...endpointTree,
    endpoints: endpointTree.endpoints.map((endpoint) => {
      const impName = endpoint.imp;
      return {
        ...endpoint,
        imp: impName ? imps[impName] : undefined,
      };
    }),
  };
};

export const imps = {
  CreateAdmin: () => ({ user: "admin" }),
  CreateManager: () => ({ user: "manager" }),
  CreateConsumer: () => ({ user: "consumer" }),
  GetList: () => ({ users: [{ id: 1, name: "daniil" }] }),
};

export const bindEndpoints = bindImp(imps, ex_endpoint_tree);

console.log(bindEndpoints);

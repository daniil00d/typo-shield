import { ParseWarning } from "../core/errors/parseWarning";
import { ParserError } from "../core/errors/parserError";

export const StartSeparator = "|>" as const;
export const StartSeparatorRegExp = String.raw`\|>`;
export const OrSeparator = "<|>" as const;
export const ForwardSeparator = ":>" as const;
export const RowSeparator = "\n" as const;
export const Tab = "  " as const;
export const Protocol = ["HTTP"] as const;
export const HTTPVersion = ["1", "1.1", "2", "3"] as const;
export const Method = ["GET", "POST"] as const;

export type ProtocolType = (typeof Protocol)[number];
export type MethodType = (typeof Method)[number];
export type HTTPVersionType = (typeof HTTPVersion)[number];
export type DSL = string;
export type DSLLexeme = string;

export const parseProtocol = (
  dslToken: DSLLexeme
): { protocol: ProtocolType; version: HTTPVersionType | undefined } => {
  const protocolJoinedVersions = HTTPVersion.join("|");
  const joinedProtocols = Protocol.join("|");

  const protocolRegExp = String.raw`^${StartSeparatorRegExp} (?<protocol>${joinedProtocols})`;
  const protocolVersionRegExp = String.raw`\/(?<version>${protocolJoinedVersions})$`;

  const protocolMatch = dslToken.match(protocolRegExp);
  const protocolMatchGroups = protocolMatch?.groups as {
    protocol: string;
  };

  const protocolVersionMatch = dslToken.match(protocolVersionRegExp);
  const protocolVersionMatchGroups = protocolVersionMatch?.groups as {
    version: string;
  };

  const foundProtocol = Protocol.find(
    (protocol) => protocolMatchGroups?.protocol === protocol
  );

  const foundProtocolVersion = HTTPVersion.find(
    (version) => protocolVersionMatchGroups?.version === version
  );

  if (foundProtocol === undefined) {
    throw new ParserError("Protocol must be exist");
  }

  if (foundProtocolVersion === undefined) {
    new ParseWarning(
      "Protocol version not found or set incorrectly (default HTTP/1.1)"
    );
  }

  return {
    protocol: foundProtocol,
    version: foundProtocolVersion,
  };
};

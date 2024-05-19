import { ParserError } from '@core/errors/parserError';
import { ParseWarning } from '@core/errors/parseWarning';
import { HTTPVersion, Protocol, StartSeparatorRegExp } from './constants';
import { DSLLexeme, HTTPVersionType, ProtocolType } from './types';

export const parseProtocol = (
  dslToken: DSLLexeme,
): { protocol: ProtocolType; version: HTTPVersionType | undefined } => {
  const protocolJoinedVersions = HTTPVersion.join('|');
  const joinedProtocols = Protocol.join('|');

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
    (protocol) => protocolMatchGroups?.protocol === protocol,
  );

  const foundProtocolVersion = HTTPVersion.find(
    (version) => protocolVersionMatchGroups?.version === version,
  );

  if (foundProtocol === undefined) {
    throw new ParserError('Protocol must be exist');
  }

  if (foundProtocolVersion === undefined) {
    new ParseWarning(
      'Protocol version not found or set incorrectly (default HTTP/1.1)',
    );
  }

  return {
    protocol: foundProtocol,
    version: foundProtocolVersion,
  };
};

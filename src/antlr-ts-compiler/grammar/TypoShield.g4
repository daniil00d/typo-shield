grammar TypoShield;


DIR_TYPE: 'JSON';
START_SYM: '>';
METHOD_START: '$';
PROTOCOL: 'HTTP' | 'HTTPS';
PROTOCOL_VERSION: [0-9].[0-9] | [0-9]; 
PROTOCOL_VERSION_DEL: '/';
METHOD: 'GET' | 'POST' | 'DELETE';
LCURLY : '{' ;
LBRACKET: '(';
RBRACKET: ')';
RCURLY : '}' ;
SEMI : ';' ;
COMA: ',';
WS: [ \t\n\r\f]+ -> skip ;
TYPE: 'Number' | 'String';
DIR_NAME: [A-Z][a-zA-Z]+;
DIRECTIVE: '@serve' | '@input' | '@meta' | '@test' | '@headers' | '@output' | '@search';
UTILITY_DIRECTIVE: '#include' | '#exclude';
COMMENT: '///'[a-zA-Z,. ]* -> skip;
ID: [a-zA-Z_0-9]+;


start: protocol;

utilitydirectiveatom
    : ID (COMA ID)*;

utilitydirective
    : UTILITY_DIRECTIVE LBRACKET utilitydirectiveatom RBRACKET;

object
    : ID ':' TYPE ;

objects
    : LCURLY object (COMA object )* RCURLY;
    
directives
    : DIRECTIVE (DIR_NAME | DIR_TYPE objects | DIR_TYPE utilitydirective) SEMI;

protocol
    : PROTOCOL (PROTOCOL_VERSION_DEL PROTOCOL_VERSION)? ':' LCURLY methods* RCURLY SEMI;
    
methods
    : METHOD_START METHOD ':' LCURLY endpoints* RCURLY SEMI;
    
endpoints
    : START_SYM ID ':' LCURLY (endpoints | directives)* RCURLY SEMI;
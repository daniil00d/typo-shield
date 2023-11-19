grammar TypoShield;


DIR_TYPE: 'JSON';
START_SYM: '>';
METHOD_START: '$';
PROTOCOL: 'HTTP' | 'HTTPS';
NUMBER: [0-9]+;
PROTOCOL_VERSION: [0-9].[0-9] | [0-9]; 
PROTOCOL_VERSION_DEL: '/';
METHOD: 'GET' | 'POST' | 'DELETE';
DEFINE: 'define';
DEFINE_ERROR: 'error';
LCURLY : '{' ;
LBRACKET: '(';
RBRACKET: ')';
RCURLY : '}' ;
SEMI : ';' ;
COMA: ',';
WS: [ \t\n\r\f]+ -> skip ;
TYPE: 'Number' | 'String';
ENTITY_NAME: [A-Z][a-zA-Z]+;
DIRECTIVE: '@serve' | '@input' | '@meta' | '@test' | '@headers' | '@output' | '@search' | '@error';
UTILITY_DIRECTIVE: '#include' | '#exclude';
COMMENT: '///'[a-zA-Z,. а-яА-Я]* -> skip;
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

enum
    : ENTITY_NAME;

enumeration
    : '[' enum (COMA enum)* ']';

directives
    : DIRECTIVE (ENTITY_NAME | DIR_TYPE objects | DIR_TYPE utilitydirective | enumeration) SEMI;
    
methods
    : METHOD_START METHOD ':' LCURLY endpoints* RCURLY SEMI;
    
endpoints
    : START_SYM ID ':' LCURLY (endpoints | directives)* RCURLY SEMI;

errors
    : DEFINE_ERROR LBRACKET NUMBER COMA ENTITY_NAME RBRACKET ':' DIR_TYPE objects SEMI;

defines
    : METHOD_START DEFINE ':' LCURLY errors* RCURLY SEMI;

protocol
    : PROTOCOL (PROTOCOL_VERSION_DEL PROTOCOL_VERSION)? ':' LCURLY defines* methods* RCURLY SEMI;
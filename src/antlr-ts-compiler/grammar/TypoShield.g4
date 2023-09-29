grammar TypoShield;


DIR_TYPE: 'JSON';
START_SYM: '>';
METHOD_START: '$';
PROTOCOL: 'HTTP';
PROTOCOL_VERSION: [0-9].[0-9] | [0-9]; 
PROTOCOL_VERSION_DEL: '/';
METHOD: 'GET' | 'POST' | 'DELETE';
LCURLY : '{' ;
RCURLY : '}' ;
SEMI : ';' ;
COMA: ',';
WS: [ \t\n\r\f]+ -> skip ;
TYPE: 'Number' | 'String';
DIR_NAME: [A-Z][a-zA-Z]+;
DIRECTIVE: '@serve' | '@input';
ENDPOINT_NAME: [a-z]+;
COMMENT: '///'[a-zA-Z ]* -> skip;


start: protocol;

object
    : ENDPOINT_NAME ':' TYPE ;

objects
    : LCURLY object (COMA object )* RCURLY;

directives
    : DIRECTIVE (DIR_NAME | DIR_TYPE objects) SEMI;
    

protocol
    : PROTOCOL (PROTOCOL_VERSION_DEL PROTOCOL_VERSION)? ':' LCURLY methods* RCURLY SEMI;
    
methods
    : METHOD_START METHOD  ':' LCURLY endpoints* RCURLY SEMI;
    
endpoints
    : START_SYM ENDPOINT_NAME ':' LCURLY (endpoints | directives)* RCURLY SEMI;
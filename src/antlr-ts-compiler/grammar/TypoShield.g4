grammar TypoShield;


DIR_TYPE: 'JSON';
START_SYM: '>';
PROTOCOL_START: '$';
PROTOCOL: 'HTTP';
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


start: protocol;

objects
    : LCURLY ENDPOINT_NAME ':' TYPE (COMA ENDPOINT_NAME ':' TYPE)* RCURLY;

directives
    : DIRECTIVE (DIR_NAME | DIR_TYPE objects) SEMI;
    

protocol
    : PROTOCOL ':' LCURLY methods* '}' SEMI;
    
methods
    : PROTOCOL_START METHOD  ':' LCURLY endpoints* RCURLY SEMI;
    
endpoints
    : START_SYM ENDPOINT_NAME ':' LCURLY (endpoints | directives)* RCURLY SEMI;
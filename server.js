'use strict'

var soap = require('soap-server');

//var soapServer = new soap.SoapServer();
global.soapServer = new soap.SoapServer({tns:'jiang.livstyle.top:8050'});
require('./test')();

soapServer.listen(8050, '0.0.0.0');
console.log('Server running at 8050');
"use strict";
exports.__esModule = true;
var http = require("http");
var config = require('./config/env/config')();
var server = http.createServer();
server.listen(config.serverPort);
server.on('listening', function () { return console.log("Servidor est\u00E1 rodando na porta " + config.serverPort); });
server.on('error', function (error) { return console.log("Ocorreu um erro: " + error); });

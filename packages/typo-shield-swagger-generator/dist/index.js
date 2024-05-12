#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
commander_1.program
    .requiredOption('--first')
    .requiredOption('-s, --separator <char>');
commander_1.program.parse();
var options = commander_1.program.opts();
var limit = options.first ? 1 : undefined;
console.log(commander_1.program.args[0].split(options.separator, limit));

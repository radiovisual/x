#!/usr/bin/env node
'use strict';

var x = require('./../index.js');

x(1);
x('2');
x({3: 3});
x(function () {
	console.log('4');
});
process.exit(0);

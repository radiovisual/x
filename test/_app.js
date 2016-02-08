#!/usr/bin/env node
'use strict';

var x = require('./../index.js');

x(1);

x('2');

x({3: 3});

x(function () {
	return '4';
});

x(5, 6, function () {
	return 7;
});

x(8, 9, 10, 11, '12', function () {
	return 13;
});

x([14, 15], [16, 17]);

process.exit(0);

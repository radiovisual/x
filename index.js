'use strict';
module.exports = function () {
	// convert arguments to a real array
	var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

	var output = '';
	args.map(function (value) {
		if (typeof value === 'function') {
			output += value();
		} else {
			if (typeof value === 'object') {
				output += JSON.stringify(value);
			} else {
				output += value;
			}
			output += ' ';
		}
	});
	console.log(output);
};

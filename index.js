'use strict';
module.exports = function () {
	// convert arguments to a real array
	var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

	args.map(function (value) {
		if (typeof value === 'function') {
			value.call(this);
		} else {
			console.log(value);
		}
	});
};

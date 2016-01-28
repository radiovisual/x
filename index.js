'use strict';
module.exports = function (input) {
	if (typeof input !== 'function') {
		console.log(input);
		return;
	}
	input.call(this);
};

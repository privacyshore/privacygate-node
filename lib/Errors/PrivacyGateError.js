'use strict';

var extend = require('../Utils').extend;

function PrivacyGateError(message) {
	if (!Error.captureStackTrace) {
		this.stack = (new Error()).stack;
	} else {
		Error.captureStackTrace(this, this.constructor);
	}

	this.message = message;
}

extend(PrivacyGateError, Error);

module.exports = PrivacyGateError;

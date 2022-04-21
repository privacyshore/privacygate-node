'use strict';

var extend = require('../Utils').extend,
	PrivacyGateError = require('./PrivacyGateError');

function InvalidResponseError(message, body) {
	PrivacyGateError.call(this, message);

	this.body = body;
}

extend(InvalidResponseError, PrivacyGateError);

module.exports = InvalidResponseError;

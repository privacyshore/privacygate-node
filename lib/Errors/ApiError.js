'use strict';

var extend = require('../Utils').extend,
	PrivacyGateError = require('./PrivacyGateError');

function ApiError(message, code, body, headers) {
	PrivacyGateError.call(this, message);

	this.code = code;
	this.body = body;
	this.headers = headers || {};
	this.requestId = headers && headers['x-request-id'];
}

extend(ApiError, PrivacyGateError);

module.exports = ApiError;

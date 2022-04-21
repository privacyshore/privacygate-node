'use strict';

var extend = require('../Utils').extend,
	PrivacyGateError = require('./PrivacyGateError');

function SignatureVerificationError(signature, payload) {
	var message = 'No signatures found matching the expected signature ' + signature + ' for payload ' + payload;

	PrivacyGateError.call(this, message);
}

extend(SignatureVerificationError, PrivacyGateError);

module.exports = SignatureVerificationError;

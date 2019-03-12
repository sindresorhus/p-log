'use strict';

const pTap = require('p-tap');

const pLog = logger => pTap(val => {
	const log = logger || console.log;
	log(val);
});

module.exports = pLog;
module.exports.default = pLog;

module.exports.catch = logger => pTap.catch(error => {
	const log = logger || console.log;
	log(error.stack || error);
});

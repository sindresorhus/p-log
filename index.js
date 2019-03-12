'use strict';

const pTap = require('p-tap');

const pLog = (logger = console.log) => pTap(value => {
	logger(value);
});

module.exports = pLog;
module.exports.default = pLog;

module.exports.catch = (logger = console.log) => pTap.catch(error => {
	logger(error.stack || error);
});

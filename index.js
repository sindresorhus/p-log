'use strict';
const pTap = require('p-tap');

module.exports = loggerFn => pTap(val => {
	const log = loggerFn || console.log;
	log(val);
});

module.exports.catch = loggerFn => pTap.catch(err => {
	const log = loggerFn || console.log;
	log(err.stack || err);
});

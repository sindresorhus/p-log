import {expectType} from 'tsd';
import pLog = require('.');

Promise.resolve('unicorn')
	.then(pLog())
	.then(val => {
		expectType<string>(val);
	});
Promise.resolve('unicorn')
	.then(pLog(console.dir))
	.then(val => {
		expectType<string>(val);
	});
Promise.resolve('unicorn')
	.then(pLog(val => expectType<string>(val)))
	.then(val => {
		expectType<string>(val);
	});

Promise.reject(new Error('pony')).catch(pLog.catch());
Promise.reject(new Error('pony')).catch(pLog.catch(console.dir));

import {expectType} from 'tsd';
import pLog from './index.js';

void Promise.resolve('unicorn')
	.then(pLog())
	.then(value => {
		expectType<string>(value);
	});

void Promise.resolve('unicorn')
	.then(pLog(console.dir))
	.then(value => {
		expectType<any>(value);
	});

void Promise.resolve('unicorn')
	.then(pLog(value => expectType<string>(value)))
	.then(value => {
		expectType<string>(value);
	});

Promise.reject(new Error('pony')).catch(pLog.catch()); // eslint-disable-line promise/valid-params
Promise.reject(new Error('pony')).catch(pLog.catch(console.dir));

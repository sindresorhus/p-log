import test from 'ava';
import pLog from './index.js';

const fixture = Symbol('fixture');
const fixtureError = new Error('fixture');

test('pLog()', async t => {
	t.plan(2);

	const logger = value => {
		t.is(value, fixture);
	};

	t.is(await Promise.resolve(fixture).then(pLog(logger)), fixture);
});

test('pLog.catch()', async t => {
	t.plan(2);

	const logger = error => {
		t.is(error, fixtureError.stack);
	};

	await Promise.reject(fixtureError)
		.catch(pLog.catch(logger))
		.catch(error => {
			t.is(error.message, fixtureError.message);
		});
});

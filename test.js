import test from 'ava';
import m from './';

const fixture = Symbol('fixture');
const fixtureErr = new Error('fixture');

test('pLog()', async t => {
	t.plan(2);

	const logger = val => {
		t.is(val, fixture);
	};

	t.is(await Promise.resolve(fixture).then(m(logger)), fixture);
});

test('pLog.catch()', async t => {
	t.plan(2);

	const logger = err => {
		t.is(err, fixtureErr.stack);
	};

	await Promise.reject(fixtureErr).catch(m.catch(logger)).catch(err => {
		t.is(err.message, fixtureErr.message);
	});
});

declare namespace pLog {
	type Logger = (message: unknown) => void;
}

declare const pLog: {
	/**
	Log the value of a promise. Use this in a `.then()` method.

	@param logger - The logger to use. Any return value or exception is ignored. Default: `console.log`.
	@returns A [thunk](https://en.wikipedia.org/wiki/Thunk) that returns a `Promise`.

	@example
	```
	import pLog = require('p-log');

	Promise.resolve('unicorn')
		.then(pLog()) // Logs `unicorn`
		.then(value => {
			// `value` is still `unicorn`
		});
	```
	*/
	<ValueType>(logger?: pLog.Logger): (value: ValueType) => Promise<ValueType>;

	/**
	Log the error of a promise. Use this in a `.catch()` method.

	@param logger - The logger to use. Any return value or exception is ignored. Default: `console.log`.
	@returns A [thunk](https://en.wikipedia.org/wiki/Thunk) that returns a `Promise`.

	@example
	```
	const pLog = require('p-log');

	Promise.resolve()
		.then(() => {
			throw new Error('pony');
		})
		.catch(pLog.catch()) // Logs `Error: pony`
		.catch(error => {
			// `error` is still `Error: pony`
		});
	```
	*/
	catch(logger?: pLog.Logger): (error: unknown) => Promise<never>;

	// TODO: Remove this for the next major release
	default: typeof pLog;
};

export = pLog;

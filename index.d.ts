export type Logger<T = unknown> = (message: T) => void;

declare const pLog: {
	/**
	Log the value of a promise. Use this in a `.then()` method.

	@param logger - The logger to use. Any return value or exception is ignored. Default: `console.log`.
	@returns A [thunk](https://en.wikipedia.org/wiki/Thunk) that returns a `Promise`.

	@example
	```
	import pLog from 'p-log';

	Promise.resolve('unicorn')
		.then(pLog()) // Logs `unicorn`
		.then(value => {
			// `value` is still `unicorn`
		});
	```
	*/
	<ValueType>(logger?: Logger<ValueType>): (value: ValueType) => Promise<ValueType>;

	/**
	Log the error of a promise. Use this in a `.catch()` method.

	@param logger - The logger to use. Any return value or exception is ignored. Default: `console.log`.
	@returns A [thunk](https://en.wikipedia.org/wiki/Thunk) that returns a `Promise`.

	@example
	```
	import pLog from 'p-log';

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
	catch(logger?: Logger): (error: unknown) => Promise<never>;
};

export default pLog;

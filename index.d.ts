export type Logger = (message: unknown) => void;

declare const pLog: {
	/**
	 * Log the value of a promise. Use this in a `.then()` method.
	 *
	 * @param logger - The logger to use. Any return value or exception is ignored. Default: `console.log`.
	 * @returns A [thunk](https://en.m.wikipedia.org/wiki/Thunk) that returns a `Promise`.
	 */
	<ValueType>(logger?: Logger): (value: ValueType) => Promise<ValueType>;

	/**
	 * Log the error of a promise. Use this in a `.catch()` method.
	 *
	 * @param logger - The logger to use. Any return value or exception is ignored. Default: `console.log`.
	 * @returns A [thunk](https://en.m.wikipedia.org/wiki/Thunk) that returns a `Promise`.
	 */
	catch(logger?: Logger): (error: unknown) => Promise<never>;
};

export default pLog;

# p-log [![Build Status](https://travis-ci.org/sindresorhus/p-log.svg?branch=master)](https://travis-ci.org/sindresorhus/p-log)

> Log the value/error of a promise


## Install

```
$ npm install --save p-log
```


## Usage

```js
const pLog = require('p-log');

Promise.resolve('unicorn')
	.then(pLog()) // logs `unicorn`
	.then(value => {
		// `value` is still `unicorn`
	});
```

```js
const pLog = require('p-log');

Promise.resolve()
	.then(() => {
		throw new Error('pony');
	})
	.catch(pLog.catch()) // logs `Error: pony`
	.catch(error => {
		// `error` is still `Error: pony`
	});
```


## API

### pLog([logger])

Use this in a `.then()` method.

Returns a [thunk](https://en.m.wikipedia.org/wiki/Thunk) that returns a `Promise`.

### pLog.catch([logger])

Use this in a `.catch()` method.

Returns a [thunk](https://en.m.wikipedia.org/wiki/Thunk) that returns a `Promise`.

#### logger

Type: `Function`<br>
Default: `console.log`

Any return value or exception is ignored.


## Related

- [p-tap](https://github.com/sindresorhus/p-tap) - Tap into a promise chain without affecting its value or state
- [p-if](https://github.com/sindresorhus/p-if) - Conditional promise chains
- [p-catch-if](https://github.com/sindresorhus/p-catch-if) - Conditional promise catch handler
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

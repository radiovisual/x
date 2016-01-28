# xmark 

> X Marks The Spot: A simple console.log() [debugging] wrapper that allows functions to be passed in.

[![Build Status](https://travis-ci.org/radiovisual/xmark.svg?branch=master)](https://travis-ci.org/radiovisual/xmark)

### Why?

1. Save yourself time by writing `x()` instead of `console.log()`
2. `x()` will also accept a function as a parameter, useful for debugging 
3. In a future release, `x()` can be conditionally silenced to only work in development mode, leaving your `console.log()` statements alone.


## Install

```
$ npm install --save xmark
```


## Usage

```js
const x = require('xmark');

x(1);
//=> 1

x('2');
//=> '2'

x({3: 3});
//=> {3: 3}

x(function () {
	console.log('4');
});
//=> 4

```


## API

### xmark(input)

#### input

Type: `string|number|object|function`

The object you want to print, or the function you want to run.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)

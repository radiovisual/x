# xmark 

> X Marks The Spot: A simple console.log() [debugging] wrapper that allows functions to be passed in.

[![Build Status](https://travis-ci.org/radiovisual/xmark.svg?branch=master)](https://travis-ci.org/radiovisual/xmark)

### Why?

1. Save yourself keystrokes by writing `x()` instead of `console.log()`
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
//=> {"3": 3}

x(function () {
	return 4;
});
//=> 4

x([1, 2], [3, 4]);
//=> [1, 2] [3, 4]

x(5, 6, 7);
//=> 5 6 7
```

## API

### xmark(input)

#### input

Type: `string|number|object|array|function`

The object(s) you want to print, or the function(s) you want to run.

### Notes

- If you pass a function to xmark, that function **must return a value**, otherwise, it will just log `undefined`
- To ensure that they are printable: `objects` are passed through `JSON.stringify()`, so be aware of the added double quotes to object keys

## License

MIT © [Michael Wuergler](http://numetriclabs.com)

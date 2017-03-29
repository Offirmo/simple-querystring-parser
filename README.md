# simple-querystring-parser
A trivial, low footprint, no dependency, url querystring parser for the browser including typescript typings

#

This lib does a very light parsing of values to enhance their type, covering only the most useful cases:
- trivial positive integers will be converted to numbers
- true/false will be converted to boolean (case SENSITIVE)
- nothing will be converted to true (boolean)

This lib DOES NOT parse arrays, for the same reasons exposed by [@sindresorhus](https://github.com/sindresorhus/query-string)
you should better use json directly.

This lib systematically exposes itself as a global variable, even when loaded by a module loader.
Reason: this lib may be needed by low-level code, for ex. a "verbose" option
activating logs should be detected very early, maybe from inline code without a loader.


# hat tips
* copied the UMD block from https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
* borrowed some ideas from https://github.com/sindresorhus/query-string
* borrowed some ideas from a colleague

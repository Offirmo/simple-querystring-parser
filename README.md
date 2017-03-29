# simple-querystring-parser
A trivial, low footprint, no dependency, UMD-compatible url querystring parser for the browser including typescript typings

This version departs from the venerable https://github.com/sindresorhus/query-string on those points:
- only 75 lines, no dependencies
- parses only (lighter)
- attempts to do a light type inference from the values (number, boolean)
- interprets "no value" as true (boolean) **XXX this is non-standard** but we consider it better (i.e. interpreting it as a flag)
- typescript compatible
- UMD compatible, but also exposes itself as a global var, even when loaded by a module loader. Reason: this lib may be needed by low-level code, for ex. a "verbose" option activating logs should be detected very early, maybe from inline code without a loader.


# Usage

```bash
yarn add @offirmo/simple-querystring-parser
npm install --save @offirmo/simple-querystring-parser
```

Base, 99% of the time:
```javascript
import * as SimpleQuerystringLoader from '@offirmo/simple-querystring-parser'

const options = SimpleQuerystringLoader.parse(location.params)
```

Rare stuff:
```javascript
import * as SimpleQuerystringLoader from '@offirmo/simple-querystring-parser'

// an alias
const options = SimpleQuerystringLoader.parseLocationParams(location)

// if you don't like the type inference or want to write your own:
SimpleQuerystringLoader.parse(location.params, {
	valueDecoder: value => value
})

// just in case, the value decoder is exposed:
SimpleQuerystringLoader.lightQuerystringValueDecoder('foo')
```

About the type inference: it covers only the most useful cases:
- trivial positive integers will be converted to numbers
- true/false will be converted to boolean (case SENSITIVE)
- nothing "" will be converted to true (boolean)

This lib DOES NOT parse arrays, for the same reasons exposed by [@sindresorhus](https://github.com/sindresorhus/query-string)
you should better use json directly.

# hat tips
* copied the UMD block from https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
* borrowed some ideas from https://github.com/sindresorhus/query-string
* borrowed some ideas from colleagues

# License
The UNLICENSE

# CONTRIBUTING
Very simple. Some crappy unit tests. Try to keep the design principles.

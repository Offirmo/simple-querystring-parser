// UMD template from here
// https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js


(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(function () {
			return (root.SimpleQuerystringParser = factory());
		});
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals
		root.SimpleQuerystringParser = factory();
	}
}(this, function () {
	"use strict";

	function lightQuerystringValueDecoder(val) {
		// A bare parameter, is likely to mean true, like ?showUsers
		// WARNING this is a voluntary departure from the standard
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		if (typeof val !== 'string')
			return true

		if (val.match(/^[0-9]+$/))
			return Number(val)

		if (val === 'true')
			return true

		if (val === 'false')
			return false

		return val // no inference
	}

	function parse(querystring, options = {}) {
		options.valueParser = options.valueParser || lightQuerystringValueDecoder
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		const result = Object.create(null)

		if (typeof querystring !== 'string')
			return result

		// remove possible leading char, whatever it may be
		querystring = querystring.trim().replace(/^(\?|#|&)/, '');

		if (!querystring)
			return result

		const raw_options = querystring.split('&')
		return raw_options.reduce((acc, raw_option) => {
			if (!raw_option) return acc

			const [ key, value ] = raw_option.split('=').map(decodeURIComponent)
			acc[key] = options.valueParser(value)
			return acc
		}, result)
	}

	function parseLocationParams(location, options = {}) {
		return parse(location.search, options)
	}

	return {
		parse,
		parseLocationParams,
		lightQuerystringValueDecoder,
	}
}))

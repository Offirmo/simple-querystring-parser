// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace SimpleQuerystringParser

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
declare namespace SimpleQuerystringParser {
	
	export type Value = number | boolean | string
	export type Options = { [k: string]: Value }

	export function parse(querystring: string): Options
	export function parse(location: Location): Options
	export function lightQuerystringValueDecoder(value: string | undefined): Value
}

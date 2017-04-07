// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace SimpleQuerystringParser

export type Value = number | boolean | string
export type Options = { [k: string]: Value }

export function parse(querystring: string, options?: { valueDecoder?: (s: string | undefined) => Value }): Options
export function parseLocationParams(location: Location, options?: { valueDecoder?: (s: string | undefined) => Value }): Options
export function lightQuerystringValueDecoder(value: string | undefined): Value

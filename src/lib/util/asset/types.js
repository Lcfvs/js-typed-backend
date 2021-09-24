import * as types from '@etchedjs/type'
import * as string from '@src/lib/type/string.js'

export default types.fn(
  types.asyncFunction,
  types.expected(string.default, e => e()),
  [
    types.arg(types.param, string.query, e => e())
  ],
  e => e()
)

import * as types from '@etchedjs/type'
import * as number from '@src/lib/type/number.js'

export default types.fn(
  types.asyncFunction,
  types.expected(types.nullish, e => e()),
  [
    types.arg(types.param, number.integer, e => e())
  ],
  e => e()
)

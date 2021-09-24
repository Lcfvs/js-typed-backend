import * as types from '@etchedjs/type'
import { meta } from '@src/lib/type/module.js'
import * as string from '@src/lib/type/string.js'

export default types.fn(
  types.syncFunction,
  types.expected(string.default, e => e()),
  [
    types.arg(types.param, meta, e => e()),
    types.arg(types.rest, string.query, e => e())
  ],
  e => e()
)

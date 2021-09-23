import * as etched from '@etchedjs/etched'
import * as types from '@etchedjs/type'
import * as string from '@src/lib/type/string.js'
import model from './template.js'

export const classList = etched.model(
  string.match,
  {
    pattern: /^(?: *[-_a-z][\w-]*)*$/
  }
)

export const list = types.fn(
  types.syncFunction,
  types.expected(types.etched(model), e => e()),
  [
    types.arg(types.rest, types.instance(Array), e => e())
  ],
  e => e()
)

export const load = types.fn(
  types.asyncFunction,
  types.expected(types.object, e => e()),
  [
    types.arg(types.param, types.object, e => e()),
    types.arg(types.param, types.object, e => e()),
    types.arg(types.param, types.syncFunction, e => e()),
    types.arg(types.rest, types.object, e => e())
  ],
  e => e()
)

export const template = types.etched(model)

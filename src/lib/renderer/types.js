import { iterable, model } from '@etchedjs/etched'
import * as etched from '@etchedjs/etched'
import type, * as types from '@etchedjs/type'
import * as renderer from '@lcf.vs/dom-engine/lib/backend.js'
import * as string from '@src/lib/type/string.js'

export const classList = etched.model(
  string.match,
  {
    pattern: /^(?: *[-_a-z][\w-]*)*$/
  }
)

export const source = type(renderer.source, string.default, e => e())

export const template = etched.model(
  etched.iterable,
  source
)

export const list = types.fn(
  types.syncFunction,
  types.expected(types.etched(template), e => e()),
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

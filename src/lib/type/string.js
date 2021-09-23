import { model } from '@etchedjs/etched'
import type, * as types from '@etchedjs/type'

export default types.string

export const match = model(
  types.string,
  type('pattern', types.instance(RegExp), e => e()),
  {
    set value (value) {
      const { pattern } = this

      if (!value.match(pattern)) {
        throw new TypeError(`Must match the pattern ${pattern}`)
      }
    }
  })

export const query = model(types.string, {
  set value (value) {
    new URL(value, 'http://localhost')
  }
})

export const url = model(types.string, {
  set value (value) {
    new URL(value)
  }
})

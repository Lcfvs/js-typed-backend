import { etch, model } from '@etchedjs/etched'
import * as types from '@etchedjs/type'
import * as string from '@src/lib/type/string.js'

export const meta = model(types.object, {
  set value ({ url: value }) {
    try {
      etch(string.url, { value })
    } catch {
      throw new TypeError('Must match an import.meta scheme')
    }
  }
})

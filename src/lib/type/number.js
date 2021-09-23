import { model } from '@etchedjs/etched'
import * as types from '@etchedjs/type'

export default types.number

export const integer = model(types.number, {
  set value (value) {
    if (!Number.isSafeInteger(value)) {
      throw new TypeError('Must be a safe integer')
    }
  }
})

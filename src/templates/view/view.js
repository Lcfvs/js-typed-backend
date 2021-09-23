import { iterable, model } from '@etchedjs/etched'
import * as string from '@src/lib/type/string.js'
import type, { etched } from '@src/lib/type/type.js'

export const template = model(
  type('contents', etched(iterable), e => e()),
  type('description', string.default, e => e()),
  type('title', string.default, e => e())
)

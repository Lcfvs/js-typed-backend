import * as renderer from '@src/lib/renderer/renderer.js'
import * as string from '@src/lib/type/string.js'
import type from '@src/lib/type/type.js'

export const { template } = await renderer.view(
  type('contents', renderer.types.template, e => e()),
  type('description', string.default, e => e()),
  type('title', string.default, e => e())
)

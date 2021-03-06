import config from '@src/lib/config.js'
import * as renderer from '@src/lib/renderer/renderer.js'
import * as string from '@src/lib/type/string.js'
import type, * as types from '@src/lib/type/type.js'
import * as view from '@src/templates/view/view.js'

export const { fill, template } = await renderer.load(
  import.meta,
  config.fetch,
  e => e(),
  type('importmap', string.default, e => e()),
  type('view', types.fulfilled(view.template), e => e())
)

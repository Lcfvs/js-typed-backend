import config from '@src/lib/config.js'
import * as renderer from '@src/lib/renderer/renderer.js'
import type, { fulfilled } from '@src/lib/type/type.js'
import * as view from '../view/view.js'

export const { fill, template } = await renderer.load(
  import.meta,
  config.fetch,
  e => e(),
  type('view', fulfilled(view.template), e => e())
)

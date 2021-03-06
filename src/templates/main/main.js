import config from '@src/lib/config.js'
import * as renderer from '@src/lib/renderer/renderer.js'
import type from '@src/lib/type/type.js'
import * as view from '@src/templates/view/view.js'

export const { fill, template } = await renderer.load(
  import.meta,
  config.fetch,
  e => e(),
  view.template,
  type('classList', renderer.types.classList, e => e())
)

import * as renderer from '@src/lib/renderer/renderer.js'
import type from '@src/lib/type/type.js'
import * as view from '../view/view.js'

export const { fill, template } = await renderer.load(
  import.meta,
  {},
  e => e(),
  view.template,
  type('classList', renderer.types.classList, e => e())
)

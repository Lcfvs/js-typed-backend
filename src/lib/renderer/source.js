import type from '@etchedjs/type'
import * as renderer from '@lcf.vs/dom-engine/lib/backend.js'
import * as string from '../type/string.js'

export default type(renderer.source, string.default, e => e())

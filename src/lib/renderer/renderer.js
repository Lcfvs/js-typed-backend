import { model } from '@etchedjs/etched'
import * as etched from '@etchedjs/etched'
import { fulfilled, object, transformer } from '@src/lib/type/type.js'
import * as engine from '@lcf.vs/dom-engine/lib/backend.js'
import * as types from './types.js'

const { serialize } = engine

const list = types.list.of(
  (...iterables) => model(types.template, ...iterables)
)

const load = types.load.of(
  async (meta, config = {}, throwable, ...models) => {
    const template = etched.model(...models, await engine.load(meta, config))

    return {
      template,
      fill: transformer(
        object,
        fulfilled(template),
        throwable,
        data => etched.fulfill(template, data)
      )
    }
  }
)

export { list, load, serialize, types }

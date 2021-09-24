import * as etched from '@etchedjs/etched'
import { model } from '@etchedjs/etched'
import * as engine from '@lcf.vs/dom-engine'
import { fulfilled, object, transformer } from '@src/lib/type/type.js'
import template from './template.js'
import * as types from './types.js'

const { serialize } = engine

const list = types.list.of(
  (...iterables) => model(template, ...iterables)
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

const view = types.view.of(
  async (...models) => ({
    template: etched.model(...models)
  })
)

export { list, load, serialize, template, types, view }

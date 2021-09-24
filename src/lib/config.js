import { model } from '@etchedjs/etched'
import resolve from './util/resolve/resolve.js'

export default model({
  assets: model({
    prefix: '/assets/',
    root: resolve(import.meta, '../assets/')
  }),
  fetch: model({
    credentials: 'same-origin'
  })
})

import * as types from './types.js'

const resolve = (base, url) =>
  new URL(url, base)

export default types.default.of(
  ({ url }, ...urls) =>
    urls.reduce(resolve, url).toString()
)

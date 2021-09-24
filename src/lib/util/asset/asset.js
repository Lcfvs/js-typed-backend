import config from '@src/lib/config.js'
import wait from '../wait/wait.js'
import resolve from '../resolve/resolve.js'
import * as types from './types.js'

const { assets, fetch } = config
const { retry = 1000, ...options } = fetch

const asset = globalThis.fetch
  ? async asset => {
    const url = assets.prefix
    const path = resolve({ url }, asset)
    const response = await globalThis.fetch(path, options)

    if (!response.ok) {
      await wait(retry)

      return asset(url)
    }

    return response.text()
  }
  : async asset => {
    const { fileURLToPath } = await import('url')
    const { readFile } = await import('fs/promises')
    const url = (assets.root)
    const path = resolve({ url }, asset)

    return `${await readFile(fileURLToPath(path))}`
  }

export default types.default.of(asset)

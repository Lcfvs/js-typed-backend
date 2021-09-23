import config from '@src/lib/config.js'
import wait from '../wait/wait.js'
import resolve from '../resolve/resolve.js'
import * as types from './types.js'

const { fetch } = globalThis
const { retry = 1000, ...options } = config.fetch

const file = fetch
  ? async url => {
    const path = resolve(import.meta, url)
    const response = await fetch(path, options)

    if (!response.ok) {
      await wait(retry)

      return file(url)
    }

    return response.text()
  }
  : async url => {
    const { readFile } = await import('fs/promises')
    const { cwd } = await import('process')
    const { resolve } = await import('path')
    const path = resolve(cwd(), url.slice(1))

    return `${await readFile(path)}`
  }

export default types.default.of(file)

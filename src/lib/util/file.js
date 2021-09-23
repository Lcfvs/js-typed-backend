import config from '@src/lib/config.js'
import { wait } from './promised.js'
import resolve from './resolve.js'

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
    const path = resolve(import.meta, '../../src', url.slice(1))

    return `${await readFile(path)}`
  }

export default file

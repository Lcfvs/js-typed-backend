import * as types from './types.js'

export default types.default.of(
  async delay =>
    new Promise(resolve => setTimeout(resolve, delay))
)

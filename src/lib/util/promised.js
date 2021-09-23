const reducer = async (promise, action) =>
  action(await promise)

export const reduce = async (initialValue, actions) =>
  actions.reduce(reducer, initialValue)

export const timeout = async (promise, delay, value) =>
  Promise.race([promise, wait(delay, value)])

export const wait = async (delay, value) =>
  new Promise(resolve => setTimeout(resolve, delay, value))

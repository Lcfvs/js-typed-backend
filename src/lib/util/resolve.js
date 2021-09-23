const resolve = (base, url) =>
  new URL(url, base)

export default ({ url }, ...urls) =>
  urls.reduce(resolve, url)

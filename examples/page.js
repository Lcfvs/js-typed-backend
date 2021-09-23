import { list, serialize } from '@src/lib/renderer/renderer.js'
import file from '@src/lib/util/file.js'
import * as layout from '@src/templates/layout/layout.js'
import * as main from '@src/templates/main/main.js'

console.log(await serialize(layout.fill({
  importmap: await file('/assets/production.importmap'),
  view: main.fill({
    classList: 'home',
    title: 'Home',
    contents: list([
      'content'
    ]),
    description: 'Home description'
  })
})))

/*
Displays something like this:

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="Home description" content="description" />
    <title>Home - JS-typed Backend</title>
    <link rel="stylesheet" href="/assets/css/dist.css" />
    <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg" />
    <script type="importmap">{
      "imports": {
        "@anticore-contracts/tree-insert/when.js": "https://ga.jspm.io/npm:@anticore-contracts/tree-insert@2.0.5/when.js",
        "@anticore-contracts/tree-tab/when.js": "https://ga.jspm.io/npm:@anticore-contracts/tree-tab@1.0.0/when.js",
        "@anticore-contracts/tree-view/when.js": "https://ga.jspm.io/npm:@anticore-contracts/tree-view@1.0.5/when.js",
        "anticore": "https://ga.jspm.io/npm:anticore@4.6.3/index.js",
        "anticore/defaults.js": "https://ga.jspm.io/npm:anticore@4.6.3/defaults.js",
        "anticore/trigger.js": "https://ga.jspm.io/npm:anticore@4.6.3/trigger.js",
        "/assets/js/dist.js": "/assets/js/main.js"
      }
    }
    </script>
    <script type="module">import '/assets/js/dist.js'</script>
  </head>
  <body>
    <header>
      <h1>JS-typed Backend</h1>
    </header>
    <main class="home">
      <h1>Home</h1>
      Content
    </main>
  </body>
</html>
*/

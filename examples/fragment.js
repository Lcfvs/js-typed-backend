import * as fragment from '@src/templates/fragment/fragment.js'
import * as main from '@src/templates/main/main.js'
import { list, serialize } from '@src/lib/renderer/renderer.js'

console.log(await serialize(fragment.fill({
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

<meta xmlns="http://www.w3.org/1999/xhtml" name="Home description" content="description" />
<title xmlns="http://www.w3.org/1999/xhtml">Home - anticore-demo</title>
<main xmlns="http://www.w3.org/1999/xhtml" class="home">
  <h1>Home</h1>
  Content
</main>
*/

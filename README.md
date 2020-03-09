## rehype-join-line

[rehype](https://github.com/rehypejs/rehype) plugin to resolve line breaks in chinese paragraphs.


## What happened?

This is a legacy issue of HTML, you can see more discussion [here](https://stackoverflow.com/questions/8550112/prevent-browser-converting-n-between-lines-into-space-for-chinese-characters).
In short, English needs to add spaces when wrapping paragraphs, but the Chinese characters will be split:

```html
<p>
This is
an example
</p>

// In English, it will be rendered ->
<p>This is an example</p>
```

```html
<p>
这是
一个示例
</p>

// In Chinese, it will be rendered ->
<p>这是 一个示例</p>
```

As we can see, there is no need for **spaces** in Chinese paragraphs.

In Markdown or Markdown renderer, this problem also exists. This plug-in is to help `rehype` solve this problem.


## How to use?

### Install

Run `npm install rehype-join-line`.

### Usage

```js
const rehype = require('rehype');
const rehypeJoinLine = require('rehype-join-lin');

rehype()
  .use(rehypeJoinLine)
  .process(/* some html */);
```

### Use in Next.js

```js
// in next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [require('rehype-join-lin')],
  },
})

module.exports = withMDX({
  // next config
})
```


### How to work?

In Chinese: Please **wrap after Chinese punctuation**, all excess white space will be removed automatically.

In English: No impact.

E.g.

  ```
  // before
  你好，
  这个世界
  
  // it will be rendered ->
  <p>你好， 这个世界</p>
  
  // after
  你好，
  这个世界
  
  // it will be rendered ->
  <p>你好，这个世界</p>
  ```

### LICENSE

Licensed under the [MIT LICENSE.](./LICENSE)

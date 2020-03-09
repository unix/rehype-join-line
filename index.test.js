const rehype = require('rehype')
const dedent = require('dedent')
const rehypeJoinLine = require('./index')

const parseHtml = html => {
  return rehype()
    .data('settings', { fragment: true })
    .use(rehypeJoinLine)
    .processSync(html)
    .toString()
}

test('remove spaces after chinese punctuation', () => {
  const result = parseHtml(dedent`
    <p>你好，\n这个世界</p>
  `)
  expect(result)
    .toBe(`<p>你好，这个世界</p>`)
})

test('do not change english punctuation', () => {
  const result = parseHtml(dedent`
    <p>hello,\nworld</p>
  `)
  expect(result)
    .toBe(`<p>hello,\nworld</p>`)
  
})

test('do not remove default white space', () => {
  const result = parseHtml(dedent`
    <p>你好\n这个世界</p>
  `)
  expect(result)
    .toBe(`<p>你好\n这个世界</p>`)
})

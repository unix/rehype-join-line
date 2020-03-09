const visit = require('unist-util-visit')
const chinesePunctuationReg = /([\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b])\n/g

module.exports = () => {
  const visitor = (textNode) => {
    if (chinesePunctuationReg.test(textNode.value)) {
      textNode.value = textNode.value.replace(chinesePunctuationReg, '$1')
    }
  }
  
  return tree => {
    visit(tree, 'text', visitor)
  }
}

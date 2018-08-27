// example theme.js
import theme from 'mdx-deck/themes'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'

export default {
  ...theme,
  font: 'Futura, sans-serif',
  h1: {
    textTransform: 'uppercase',
    fontWeight: 600
  },
  monospace: '"Dank Mono", monospace',
  prism: {
    style: atomDark
  },
  weights: 400,
  li: {
    paddingBottom: '20px',
    fontFamily: '"Dank Mono", monospace'
  },
  ul: {
    listStyle: 'none',
    paddingLeftt: '20px'
  },
  colors: {
    text: '#6AD798',
    background: '#161923',
    link: '#0ff',
    pre: '#fff',
    preBackground: '#051626',
    code: '#fff',
    codeBackground: '#051626'
  }
}

import React from 'react'
import styled from 'styled-components'
import Flex from 'mdx-deck/dist/Flex'
import Box from 'mdx-deck/dist/Box'

const Root = styled.div([], {
  width: '100vw',
  height: '100vh'
})

const Half = styled(Box)`
  > * {
    max-width: 100%;
  }
`

const Split = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children.props.children)

  return (
    <Root>
      <Flex
        css={{
          alignItems: 'center',
          height: '100%'
        }}
      >
        <Half width={1 / 2}>{a}</Half>
        <Half width={1 / 2}>{rest}</Half>
      </Flex>
    </Root>
  )
}

export default Split

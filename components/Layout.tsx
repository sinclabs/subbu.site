import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

type Props = {
  title?: string
}

const WrapperDiv = styled.div`
  position: relative;
`

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    margin: 0;
  }
`

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Hello 👋',
}) => (
  <WrapperDiv>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle />
    {children}
  </WrapperDiv>
)

export default Layout

import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

type Props = {
  title?: string
}

const WrapperDiv = styled.div`
  display: grid;
  place-items: center;
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
`

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    border: 10px solid black;
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

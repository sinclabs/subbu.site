import * as React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Title from '../components/Title'
import ContactLine from '../components/ContactLine'

const CenterdTitleContainer = styled.div`
  margin: 0;
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
`

const IndexPage: NextPage = () => {
  return (
    <Layout title="Subbu">
      <CenterdTitleContainer>
        <Title />
        <ContactLine />
      </CenterdTitleContainer>
    </Layout>
  )
}

export default IndexPage

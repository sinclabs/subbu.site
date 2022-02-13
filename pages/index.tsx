import * as React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Title from '../components/Title'
import ContactLine from '../components/ContactLine'

const TitlePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CenterdTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IndexPage: NextPage = () => {
  return (
    <Layout title="👋 Hello - Subbu">
      <TitlePageContainer>
        <CenterdTitleContainer>
          <Title />
          <ContactLine />
        </CenterdTitleContainer>
      </TitlePageContainer>
    </Layout>
  )
}

export default IndexPage

import * as React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Title from '../components/Title'
import ContactLine from '../components/ContactLine'

const Content = styled.div`

`

const IndexPage: NextPage = () => {
  return (
    <Layout title="Subbu">
      <Content>
        <Title />
        <ContactLine />
      </Content>
    </Layout>
  )
}

export default IndexPage

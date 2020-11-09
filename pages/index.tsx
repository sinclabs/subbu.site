import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Title from "../components/Title"
import ContactLine from '../components/ContactLine'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Subbu">
      <Title />
      {/* <ContactLine /> */}
    </Layout>
  )
}

export default IndexPage

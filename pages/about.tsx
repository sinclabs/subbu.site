import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components';

const HomeLink = styled.a`
  color: #3498db;
`

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <HomeLink>Go home</HomeLink>
      </Link>
    </p>
  </Layout>
)

export default AboutPage

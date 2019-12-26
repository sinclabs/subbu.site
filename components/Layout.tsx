import * as React from 'react'
import Head from 'next/head'
import { Grid } from 'react-styled-flexboxgrid'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Hello 👋',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Grid>
      {children}
    </Grid>
  </div>
)

export default Layout

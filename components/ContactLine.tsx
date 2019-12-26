import * as React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import { CSSProperties } from 'styled-components'

type Props = {
  email?: string
  phone?: string
  link?: string
}

const rowStyle: CSSProperties = {
    margin: 'auto',
    width: '65%',
    height: 'fit-content',
    marginTop: '60pt',
    background: '#000',
    color: '#fff',
    padding: '3px',
    fontFamily: "'Roboto Mono', monospace",
    fontSize: '0.9em',
}

const ContactLine: React.FunctionComponent<Props> = ({
    email = 'subala@kth.se',
    phone = '+46732680177',
    link = 'https://www.linkedin.com/in/subramanianalagappan/',
  }) => (
    <Row center='xs' style={rowStyle}>
        <Col xs={3}>
            {email}
        </Col>
        <Col xs={3}>
            {phone}
        </Col>
        <Col xs={6}>
            {link}
        </Col>
    </Row>
  )

  export default ContactLine
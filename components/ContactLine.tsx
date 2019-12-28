import * as React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import { CSSProperties } from 'styled-components'

type Props = {
  email?: string
  phone?: string
  link?: string
}

const rowStyle: CSSProperties = {
    height: 'fit-content',
    marginTop: '60pt',
    background: '#000',
    color: '#fff',
    padding: '3px',
    fontFamily: "'Roboto Mono', monospace",
    fontSize: '0.9em',
}

const linkStyle: CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
}

const ContactLine: React.FunctionComponent<Props> = ({
    email = 'subala@kth.se',
    phone = '+46732680177',
    link = 'https://www.linkedin.com/in/subramanianalagappan/',
  }) => (
    <Row center='xs'>
        <Col lg={9} md={12}>
            <Row style={rowStyle}>
                <Col xs={3}>
                    <a href={`mailto:${email}`} style={linkStyle}>
                        {email}
                    </a>
                </Col>
                <Col xs={3}>
                    <a href={`tel:${phone}`} style={linkStyle}>
                        {phone}
                    </a>
                </Col>
                <Col xs={6}>
                    <a href={link} style={linkStyle}>
                        {link}
                    </a>
                </Col>
            </Row>    
        </Col>
    </Row>
  )

  export default ContactLine
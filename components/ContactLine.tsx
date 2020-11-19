import * as React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import { CSSProperties } from 'styled-components'
import { GithubLogo } from './GithubLogo'
import { EmailLogo } from "./EmailLogo";
import { LinkedInLogo } from './LinkedInLogo';

type Props = {
  email?: string
  phone?: string
  linkedIn?: string
  github?: string
}

const rowStyle: CSSProperties = {
    height: 'fit-content',
    marginTop: '130pt',
    color: '#fff',
    padding: '3px',
    fontFamily: "'Roboto Mono', monospace",
    fontSize: '0.9em',
}

const colStyle: CSSProperties = {
    textAlign: 'center',
}

const linkStyle: CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '50px',
}

const ContactLine: React.FunctionComponent<Props> = ({
    email = 'subala@kth.se',
    linkedIn = 'https://www.linkedin.com/in/subramanianalagappan/',
    github = 'https://github.com/sinclabs',
  }) => (
    <Row center='xs'>
        <Col lg={9} md={12}>
            <Row style={rowStyle} center={'xs'}>
                <Col xs={12} style={colStyle}>
                    <a href={github} target="_blank" style={linkStyle}>
                        <GithubLogo />
                    </a>
                    <a href={`mailto:${email}`} target="_blank" style={linkStyle}>
                        <EmailLogo />
                    </a>
                    <a href={linkedIn} target="_blank" style={linkStyle}>
                        <LinkedInLogo />
                    </a>
                </Col>
            </Row>    
        </Col>
    </Row>
  )

  export default ContactLine
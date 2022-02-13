import * as React from 'react'
import styled from 'styled-components'
import { GithubLogo } from './GithubLogo'
import { EmailLogo } from "./EmailLogo";
import { LinkedInLogo } from './LinkedInLogo';

import { mediaQuerySizes } from '../utils/constants'

type Props = {
    email?: string
    phone?: string
    linkedIn?: string
    github?: string
}

const ContactLineContainer = styled.div`
    width: min(100%, 300px);
    display: flex;
    justify-content: space-evenly;
`

const Link = styled.a`
    width: 18pt;
    height: 18pt;

    @media (max-width: ${mediaQuerySizes.mobileL}) {
        width: 12pt;
        height: 12pt;
    }
`

const ContactLine: React.FunctionComponent<Props> = ({
    email = 'subala@kth.se',
    linkedIn = 'https://www.linkedin.com/in/subramanianalagappan/',
    github = 'https://github.com/sinclabs',
}) => (
    <ContactLineContainer>
        <Link href={github} target="_blank">
            <GithubLogo />
        </Link>
        <Link href={`mailto:${email}`} target="_blank">
            <EmailLogo />
        </Link>
        <Link href={linkedIn} target="_blank">
            <LinkedInLogo />
        </Link>
    </ContactLineContainer>
)

export default ContactLine
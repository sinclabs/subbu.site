import * as React from 'react'
import styled from 'styled-components'

import { mediaQuerySizes } from '../utils/constants'

type Props = {
    firstName?: string
    lastName?: string
    nickName?: string
    topTitle?: string
    bottomTitle?: string
}

const NameWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i&display=swap');
    @font-face{ 
        font-family: 'basictitlefont';
        src: url('/fonts/basictitlefont/basictitlefont-webfont.woff') format('woff');
    }
    font-family: "basictitlefont", sans-serif;
    font-size: max(8vw, 1em);
    margin: auto;
    width: fit-content;
    margin-bottom: 50px;
    transform: skew(0deg, -7deg);
    display: flex;
    flex-direction: column;

    @media (max-width: ${mediaQuerySizes.mobileL}) {
        font-size: max(9.5vw, 1em);
    }
`

const NameContainer = styled.div`
    display: inline-block;
    border-top: 3px solid black;
    border-bottom: 3px solid black;

    @media (max-width: ${mediaQuerySizes.mobileL}) {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }
`

const FirstName = styled.span`
    margin: auto;
    font-weight: 300;
`

const LastName = styled.span`
    margin: auto;
    font-weight: 600;
`

const TopTitle = styled.span`
    font-size: max(4vw, 0.5em);
    letter-spacing: 5px;

    @media (max-width: ${mediaQuerySizes.mobileL}) {
        font-size: max(5vw, 0.5em);
        letter-spacing: 3px;
    }
`

const BottomTitle = styled.span`
    align-self: flex-end;
    font-size: max(4vw, 0.5em);
    letter-spacing: 5px;

    @media (max-width: ${mediaQuerySizes.mobileL}) {
        font-size: max(5vw, 0.5em);
        letter-spacing: 3px;
    }
`

const Title: React.FunctionComponent<Props> = ({
    firstName = 'Subramanian',
    lastName = 'Alagappan',
    // nickName = 'Subbu',
    topTitle = 'Software Engineer',
    bottomTitle = 'Interaction Designer',
}) => (
    <NameWrapper>
        <TopTitle>{topTitle}</TopTitle>
        <NameContainer>
            <FirstName>{firstName}</FirstName>
            <LastName>{` ${lastName}`}</LastName>
        </NameContainer>
        <BottomTitle>{bottomTitle}</BottomTitle>
    </NameWrapper>
)

export default Title

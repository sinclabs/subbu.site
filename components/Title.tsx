import * as React from 'react'
import styled from 'styled-components'

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

    font-family: "basictitlefont";
    font-size: 8vw;
    margin: auto;
    margin-top: 100pt;
    width: fit-content;
    transform: skew(0deg, -7deg);

    div:before {
        content : "";
        position: absolute;
        left    : 2%;
        bottom  : 0;
        height  : 100%;
        width   : 96%;
        border-bottom: 3px solid black;
        border-top: 3px solid black;
    }
`

const NameContainer = styled.div`
    display: inline-block;
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
    position: absolute;
    font-size: 0.485em;
    top: -1.25em;
    left: 1.5%;
    letter-spacing: 5px;
`

const BottomTitle = styled.span`
    position: absolute;
    font-size: 0.485em;
    bottom: -1em;
    right: 1.5%;
    letter-spacing: 5px;
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

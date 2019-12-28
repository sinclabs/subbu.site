import * as React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'

type Props = {
  firstName?: string
  lastName?: string
  nickName?: string
  topTitle?: string
  bottomTitle?: string
}

const NameWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i&display=swap');
    @import url('/fonts/basictitlefont.ttf');
    font-family: "basic title font";
    transform: skew(0deg, -7deg);
    font-size: 5em;
    margin: auto;
    margin-top: 50pt;
    width: fit-content;
    position: relative;

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
    padding-top: 20px;
`

const FirstName = styled.span`
    margin: auto;
    font-weight: 300;
`

const LastName = styled.span`
    margin: auto;
    font-weight: 400;
`

const TopTitle = styled.span`
    position: absolute;
    font-size: 0.485em;
    top: -1em;
    left: 1.5%;
    letter-spacing: 5px;
`
const BottomTitle = styled.span`
    position: absolute;
    font-size: 0.485em;
    bottom: -1.25em;
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
    <Row center='lg'>
        <Col xs={12}>
            <NameWrapper>
                <TopTitle>{topTitle}</TopTitle>
                <NameContainer>
                    <FirstName>{firstName}</FirstName>
                    <LastName>{` ${lastName}`}</LastName>
                </NameContainer>
                <BottomTitle>{bottomTitle}</BottomTitle>
            </NameWrapper>
        </Col>
    </Row>
  )

  export default Title
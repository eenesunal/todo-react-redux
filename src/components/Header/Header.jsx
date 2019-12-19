import React from "react"

import {
    Header as Container,
    MainText,
    SubText
} from "./Header.styled"

const Header = () => {
    return (
        <Container>
            <MainText>todo app</MainText>
            <SubText>with using React, Redux&Saga</SubText>
        </Container>
    )
}

export default Header
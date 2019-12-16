import React, { Component } from "react"

import { Header as Container, MainText, SubText } from "./Header.styled"

export default class Header extends Component {
    render() {
        return (
            <Container>
                <MainText>todo app</MainText>
                <SubText>with using React&Redux</SubText>
            </Container>
        )
    }
}
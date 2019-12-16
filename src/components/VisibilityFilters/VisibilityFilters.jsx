import React, { Component } from "react"

import {
    AllButton as All,
    CompletedButton as Completed,
    IncompleteButton as Incomplete,
    VisibilityFilters as Content,
} from "./VisibilityFilters.styled"

export default class VisibilityFilters extends Component {
    render() {
        return (
            <Content>
                <Completed>Completed</Completed>
                <Incomplete>Incomplete</Incomplete>
                <All>All</All>
            </Content>
        )
    }
}
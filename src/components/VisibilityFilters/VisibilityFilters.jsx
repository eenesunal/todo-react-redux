import React, { Component } from "react"
import { connect } from "react-redux"

import { setVisibilityFilter } from "../../redux/actions"

import {
    AllButton as All,
    CompletedButton as Completed,
    IncompleteButton as Incomplete,
    VisibilityFilters as Content,
} from "./VisibilityFilters.styled"

class VisibilityFilters extends Component {
    render() {
        const { setVisibilityFilter } = this.props

        return (
            <Content>
                <Completed onClick={() => setVisibilityFilter("COMPLETED")}>
                    Completed
                </Completed>
                <Incomplete onClick={() => setVisibilityFilter("INCOMPLETE")}>
                    Incomplete
                </Incomplete>
                <All onClick={() => setVisibilityFilter("ALL")}>
                    All
                </All>
            </Content>
        )
    }
}

const mapDispatchToProps = {
    setVisibilityFilter
}

export default connect(null, mapDispatchToProps)(VisibilityFilters)
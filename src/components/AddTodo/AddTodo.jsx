import React, { Component } from "react"
import PropTypes from "prop-types"

import { AddButton as Button, AddTodo as Content, TodoInput as Input } from "./AddTodo.styled"

export default class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: null
        }
    }

    render() {
        const { todo } = this.state
        const { addTodo } = this.props

        return (
            <Content>
                <Input
                    onChange={this.onInput}
                    onKeyDown={this.onSubmit}
                    type="text"
                    value={todo || ""}
                />
                <Button
                    onClick={() => addTodo(todo, () => { this.setState({ todo: null }) })}
                >
                    +
                </Button>
            </Content>
        )
    }

    onInput = (e) => {
        this.setState({ todo: e.currentTarget.value })
    }

    onSubmit = (e) => {
        if (e.keyCode === 13) {
            this.props.addTodo(this.state.todo, () => {
                this.setState({
                    todo: null
                })
            })
        }
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

import React, { Component } from "react"
import PropTypes from "prop-types"

import { Remove, Todo as Item, TodoText as Text } from "./Todo.styled"

export default class Todo extends Component {
    render() {
        const { completed, deleteTodo, todoId, onClick, text } = this.props

        return (
            < Item>
                <Text onClick={onClick} completed={completed}>{text}</Text>
                <Remove onClick={() => deleteTodo(todoId)}>x</Remove>
            </Item >
        )
    }
}

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todoId: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}
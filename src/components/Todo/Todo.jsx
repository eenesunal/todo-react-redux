import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { deleteTodo, toggleTodo } from "../../redux/actions"

import {
    Remove,
    Todo as Item,
    TodoText as Text
} from "./Todo.styled"

class Todo extends Component {
    render() {
        const { deleteTodo, toggleTodo, todo } = this.props
        const { completed, id, text } = todo

        return (
            <Item>
                <Text
                    completed={completed}
                    onClick={() => toggleTodo(todo)}
                >
                    {text}
                </Text>
                <Remove onClick={() => deleteTodo(id)}>x</Remove>
            </Item >
        )
    }
}

const mapDispatchToProps = {
    deleteTodo,
    toggleTodo
}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Todo)
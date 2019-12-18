import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Remove, Todo as Item, TodoText as Text } from "./Todo.styled"

import { deleteTodo, toggleTodo } from '../../redux/actions'

class Todo extends Component {
    render() {
        const { deleteTodo, toggleTodo, todo } = this.props
        const { completed, id, text } = todo

        return (
            <Item>
                <Text
                    completed={completed}
                    onClick={() => toggleTodo(todo)}
                >{text}</Text>
                <Remove onClick={() => deleteTodo(id)}>x</Remove>
            </Item >
        )
    }
}

const mapDispatchToProps = {
    deleteTodo,
    toggleTodo
}

export default connect(null, mapDispatchToProps)(Todo)

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}
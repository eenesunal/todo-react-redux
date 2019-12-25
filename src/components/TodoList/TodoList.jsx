import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Todo as TodoItem } from "../"
import { getTodos } from "../../redux/actions"

import { Container, TodoList as List } from "./TodoList.styled"

class TodoList extends Component {
    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        let { todos, visibility } = this.props

        if (visibility && todos) {
            todos = todos.filter(todo => {
                return (
                    visibility === "ALL" ?
                        todo :
                        (visibility === "COMPLETED" ? todo.completed : !todo.completed)
                )
            })
        }

        return (
            <Container>
                <List>
                    {
                        (todos && todos.length > 0) ?
                            todos.map(todo => {
                                return (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                    />
                                )
                            }) :
                            <li>There is nothing to do.</li>
                    }
                </List>
            </Container>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ),
    visibility: PropTypes.string,
    getTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todos,
    visibility: state.filterReducer.filter,
})

const mapDispatchToProps = {
    getTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
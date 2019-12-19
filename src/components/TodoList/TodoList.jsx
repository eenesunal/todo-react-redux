import React, { Component } from "react"
import PropTypes from "prop-types"

import { Todo as TodoItem } from "../"
import { getTodos } from '../../redux/actions'
import { Container, TodoList as List } from "./TodoList.styled"
import { connect } from "react-redux"

class TodoList extends Component {
    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        let { todos, visibleTodos } = this.props

        return (
            <Container>
                <List>
                    {
                        visibleTodos.length > 0 ?
                            visibleTodos.map(todo => {
                                return (
                                    <TodoItem
                                        key={todo.id || 0}
                                        todo={todo}
                                    />
                                )
                            }) :
                            todos.map(todo => {
                                return (
                                    <TodoItem
                                        key={todo.id || 0}
                                        todo={todo}
                                    />
                                )
                            })
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
    ).isRequired,
}

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todos,
    visibleTodos: state.todoReducer.visibleTodos
})

const mapDispatchToProps = {
    getTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
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
        const { deleteTodo, todos, toggleTodo } = this.props
        // const shownTodos = filter.todos

        return (
            <Container>
                <List>
                    {
                        todos.length ?
                            todos.map(todo => {
                                return (
                                    <TodoItem
                                        completed={todo.completed}
                                        deleteTodo={deleteTodo}
                                        key={todo.id}
                                        onClick={() => toggleTodo(todo.id, todo.completed)}
                                        text={todo.text}
                                        todoId={todo.id}
                                    />
                                )
                            }) :
                            <React.Fragment />
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
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todos
})

const mapDispatchToProps = {
    getTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
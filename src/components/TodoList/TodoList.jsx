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
        const { todos } = this.props

        return (
            <Container>
                <List>
                    {
                        todos.length ?
                            todos.map(todo => {
                                return (
                                    <TodoItem
                                        key={todo.id || 0}
                                        todo={todo}
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
}

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todos
})

const mapDispatchToProps = {
    getTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { addTodo } from "../../redux/actions"

import { AddButton as Button, AddTodo as Content, TodoInput as Input } from "./AddTodo.styled"

class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: null
        }
    }

    render() {
        const { todo } = this.state

        return (
            <Content>
                <Input
                    onChange={this.onInput}
                    onKeyDown={this.onSubmit}
                    type="text"
                    value={todo || ""}
                />
                <Button onClick={this.addNewTodo}>+</Button>
            </Content>
        )
    }

    onInput = (e) => {
        this.setState({ todo: e.currentTarget.value })
    }

    onSubmit = (e) => {
        if (e.keyCode === 13) {
            this.addNewTodo()
        }
    }

    addNewTodo = () => {
        const { todo } = this.state

        if (todo.length === 0) return

        this.props.addTodo(this.state.todo)

        this.setState({
            todo: null
        })
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)
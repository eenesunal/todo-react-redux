import React, { Component } from "react"
import { connect } from "react-redux"

import {
  AddTodo,
  Header,
  TodoList,
  VisibilityFilters
} from "../components"

import { Container, Content } from "./App.styled"
import { DELETE, GET, PATCH, POST } from "../request"


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: null,
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <AddTodo addTodo={this.addTodo} />
          <TodoList
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
          />
          <VisibilityFilters />
        </Content>
      </Container>
    )
  }

  toggleTodo = (id, completed) => {
    PATCH({
      path: `todos/${id}`,
      body: JSON.stringify({ "completed": !completed })
    }).then(() => {
      GET({
        path: "todos"
      }).then((todos) => {
        this.setState({
          todos
        })
      }).catch((error) => {
        console.error(error)
      })
    }).catch((error) => {
      console.error(error)
    })
  }

  addTodo = (text, callback) => {
    POST({
      path: `todos`,
      body: JSON.stringify({ text, "completed": false })
    }).then(() => {
      GET({
        path: "todos"
      }).then((todos) => {
        this.setState({
          todos
        }, () => {
          if (callback) callback()
        })
      }).catch((error) => {
        console.error(error)
      })
    }).catch((error) => {
      console.error(error)
    })
  }

  deleteTodo = (id) => {
    DELETE({
      path: `todos/${id}`,
    }).then(() => {
      GET({
        path: "todos"
      }).then((todos) => {
        this.setState({
          todos
        })
      }).catch((error) => {
        console.error(error)
      })
    }).catch((error) => {
      console.error(error)
    })
  }
}

import React, { Component } from "react"

import {
  AddTodo,
  Header,
  TodoList,
  VisibilityFilters
} from "../components"

import { Container, Content } from "./App.styled"


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
          <AddTodo />
          <TodoList />
          <VisibilityFilters />
        </Content>
      </Container>
    )
  }
}

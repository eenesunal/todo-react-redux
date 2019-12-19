import React from "react"

import {
  AddTodo,
  Header,
  TodoList,
  VisibilityFilters
} from "../components"

import { Container, Content } from "./App.styled"

const App = () => {
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

export default App

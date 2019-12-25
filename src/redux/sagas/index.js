import { call, put, takeLatest } from "redux-saga/effects"
import types from "../action-types"

import { addTodoSuccess, setTodos, deleteTodoSuccess, toggleTodoSuccess } from "../actions"

function* getTodos() {
    const todos = yield call(() => localStorage.getItem("todos")) || []
    if (todos) yield put(setTodos(JSON.parse(todos)))
    else yield put(setTodos([]))
}

function* addTodo(newTodo) {
    let currentId = localStorage.getItem("nextTodoId") ? Number(localStorage.getItem("nextTodoId")) : 0

    const { text } = newTodo
    const addedTodo = yield call(() => {
        let todos = JSON.parse(localStorage.getItem("todos"))

        if (!todos) todos = []

        let newItem = {
            id: currentId++,
            completed: false,
            text
        }

        localStorage.setItem("nextTodoId", currentId)
        todos.push(newItem)

        localStorage.setItem("todos", JSON.stringify(todos))

        return newItem
    })
    yield put(addTodoSuccess(addedTodo))
}

function* deleteTodo(deleteAction) {
    yield call(() => {
        let todos = JSON.parse(localStorage.getItem("todos"))

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === deleteAction.id) {
                todos.splice(i, 1)
                break
            }
        }

        localStorage.setItem("todos", JSON.stringify(todos))
    })

    yield put(deleteTodoSuccess(deleteAction.id))
}

function* toggleTodo(toggleAction) {
    const toggledTodo = yield call(() => {
        let todos = JSON.parse(localStorage.getItem("todos"))

        let updated
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === toggleAction.todo.id) {
                todos[i].completed = !todos[i].completed
                updated = todos[i]
                break
            }
        }

        localStorage.setItem("todos", JSON.stringify(todos))

        return updated
    })

    yield put(toggleTodoSuccess(toggledTodo))
}

export default function* rootSaga() {
    yield takeLatest(types.GET_TODOS, getTodos)
    yield takeLatest(types.ADD_TODO, addTodo)
    yield takeLatest(types.DELETE_TODO, deleteTodo)
    yield takeLatest(types.TOGGLE_TODO, toggleTodo)
}
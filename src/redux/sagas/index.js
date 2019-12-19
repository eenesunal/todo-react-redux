import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../action-types'
import { DELETE, GET, PATCH, POST } from '../../request'

import { addTodoSuccess, setTodos, deleteTodoSuccess, toggleTodoSuccess } from '../actions'

function* getTodos() {
    const todos = yield call(() => GET({ path: 'todos' }))
    yield put(setTodos(todos))
}

function* addTodo(newTodo) {
    const { text } = newTodo
    const addedTodo = yield call(() => POST({
        path: `todos`,
        body: JSON.stringify({ text, "completed": false })
    }))

    yield put(addTodoSuccess(addedTodo))
}

function* deleteTodo(deleteAction) {
    yield call(() => DELETE({
        path: `todos/${deleteAction.id}`,
    }))

    yield put(deleteTodoSuccess(deleteAction.id))
}

function* toggleTodo(toggleAction) {
    const toggledTodo = yield call(() => PATCH({
        path: `todos/${toggleAction.todo.id}`,
        body: JSON.stringify({ "completed": !toggleAction.todo.completed })
    }))

    yield put(toggleTodoSuccess(toggledTodo))
}

export default function* rootSaga() {
    yield takeLatest(types.GET_TODOS, getTodos);
    yield takeLatest(types.ADD_TODO, addTodo);
    yield takeLatest(types.DELETE_TODO, deleteTodo);
    yield takeLatest(types.TOGGLE_TODO, toggleTodo);
}
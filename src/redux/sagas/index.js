import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import types from '../action-types'
import { GET } from '../../request'
import { setTodos } from '../actions'

function* getTodos() {
    const todos = yield call(() => GET({ path: 'todos' }))
    yield put(setTodos(todos))
}

export default function* rootSaga() {
    yield takeLatest(types.GET_TODOS, getTodos);
}
import types from '../action-types'

export const getTodos = () => ({
    type: types.GET_TODOS,
})

export const setTodos = todos => ({
    type: types.SET_TODOS,
    todos
})

export const addTodo = text => ({
    type: types.ADD_TODO,
    text
})

export const addTodoSuccess = todo => ({
    type: types.ADD_TODO_SUCCESS,
    todo
})

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    id
})

export const deleteTodoSuccess = deletedTodoId => ({
    type: types.DELETE_TODO_SUCCESS,
    deletedTodoId
})

export const toggleTodo = todo => ({
    type: types.TOGGLE_TODO,
    todo
})

export const toggleTodoSuccess = toggledTodo => ({
    type: types.TOGGLE_TODO_SUCCESS,
    toggledTodo
})

export const setVisibilityFilter = filter => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
})

export const VISIBILITY_FILTERS = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    INCOMPLETE: "INCOMPLETE"
}
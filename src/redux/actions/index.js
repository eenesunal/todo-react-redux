import types from '../action-types'

let nextTodoId = 0
export const getTodos = () => ({
    type: types.GET_TODOS,
})

export const setTodos = (todos) => ({
    type: types.SET_TODOS,
    todos
})

export const addTodo = text => ({
    type: types.ADD_TODO,
    newTodo: {
        id: nextTodoId++,
        text
    }
})

export const toggleTodo = id => ({
    type: types.TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    id
})

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }


// export const setVisibilityFilter = filter => ({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
// })
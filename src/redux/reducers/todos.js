import types from '../action-types'

const initialState = {
    todos: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TODOS:
            return {
                ...state,
                todos: action.todos
            }
        case types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.newTodo]
            }
        case types.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case types.TOGGLE_TODO:
            return state.todos.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

export default todoReducer
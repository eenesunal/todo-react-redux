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
                ...state
            }
        case types.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case types.DELETE_TODO:
            return {
                ...state,
            }
        case types.DELETE_TODO_SUCCESS:
            debugger
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.deletedTodoId)
            }
        case types.TOGGLE_TODO:
            console.log(action)
            return state.todos.map(todo =>
                todo.id === action.todo.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

export default todoReducer
import types from '../action-types'

const initialState = {
    todos: [],
    visibleTodos: []
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
                todos: [...state.todos, action.todo],
                visibleTodos: [...state.todos, action.todo]
            }
        case types.DELETE_TODO:
            return {
                ...state,
            }
        case types.DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.deletedTodoId),
                visibleTodos: state.todos.filter(todo => todo.id !== action.deletedTodoId)
            }
        case types.TOGGLE_TODO:
            return {
                ...state
            }
        case types.TOGGLE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return (
                        (action.toggledTodo.id === todo.id) ?
                            action.toggledTodo :
                            todo
                    )
                }),
                visibleTodos: state.todos.map(todo => {
                    return (
                        (action.toggledTodo.id === todo.id) ?
                            action.toggledTodo :
                            todo
                    )
                }),
            }
        case types.SET_VISIBILITY_FILTER:
            switch (action.filter) {
                case "ALL":
                    return {
                        ...state,
                        visibleTodos: state.todos
                    }
                case "COMPLETED":
                    return {
                        ...state,
                        visibleTodos: state.todos.filter(todo => todo.completed === true)
                    }
                case "INCOMPLETE":
                    return {
                        ...state,
                        visibleTodos: state.todos.filter(todo => todo.completed === false)
                    }
                default:
                    return state
            }
        default:
            return state
    }
}

export default todoReducer
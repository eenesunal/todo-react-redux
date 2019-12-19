import { combineReducers } from "redux"

import todoReducer from "./todos"
import filterReducer from "./visibilityFilters"

export default combineReducers({
    todoReducer,
    filterReducer
})
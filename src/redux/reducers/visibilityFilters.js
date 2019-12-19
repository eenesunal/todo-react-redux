import { VISIBILITY_FILTERS } from "../actions"

const initialState = {
    filter: ""
}

const filterReducer = (state = initialState, action) => {
    switch (action.filter) {
        case (VISIBILITY_FILTERS.ALL):
            return {
                filter: "ALL"
            }
        case (VISIBILITY_FILTERS.COMPLETED):
            return {
                filter: "COMPLETED"
            }
        case (VISIBILITY_FILTERS.INCOMPLETE):
            return {
                filter: "INCOMPLETE"
            }
        default:
            return state
    }
}

export default filterReducer
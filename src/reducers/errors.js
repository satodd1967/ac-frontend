const initialState = []

const errors = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ERRORS":
            return action.errors
        case "CLEAR_ERRORS":
            return initialState
        default:
            return state
    }
};

export default errors;
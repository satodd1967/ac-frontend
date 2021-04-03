const initialState = []

const clientErrors = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CLIENT_ERRORS":
            console.log("SetErrors", action.invalid)
            return action.invalid
        case "CLEAR_CLIENT_ERRORS":
            return initialState
        default:
            return state
    }
};

export default clientErrors;
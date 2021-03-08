const initialState = []

const logs = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LOGS":
            return action.logs
        case "CLEAR_LOGS":
            return initialState
        case "CREATE_LOGS":
            return state.concat(action.log)
        default:
            return state
    }
};

export default logs;
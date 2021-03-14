const initialState = []

const users = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return action.logs
        case "CLEAR_USERS":
            return initialState
        default:
            return state
    }
};

export default users;
const initialState = []

const users = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return action.users
        default:
            return state
    }
};

export default users;
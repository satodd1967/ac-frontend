const initialState = []

const mainState = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MAIN_STATE":
            console.log("GETMS", action.mainState)
            return action.mainState
        case "UPDATE_MAIN_STATE":
            console.log("Second", action)
            return action.mainState
        default:
            return state
    }
};

export default mainState;
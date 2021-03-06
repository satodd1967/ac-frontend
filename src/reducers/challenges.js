const initialState = []

const challenges = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CHALLENGES":
            return action.challenges
        case "CLEAR_CHALLENGES":
            return initialState
        default:
            return state
    }
};

export default challenges;
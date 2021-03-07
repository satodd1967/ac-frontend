const initialState = []

const challenges = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CHALLENGES":
            return action.challenges
        case "CLEAR_CHALLENGES":
            return initialState
        case "CREATE_CHALLENGE":
            return state.concat(action.challenge)
        default:
            return state
    }
};

export default challenges;
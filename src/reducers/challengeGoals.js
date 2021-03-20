const initialState = []

const challengeGoals = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CHALLENGE_GOALS":
            return action.challengeGoal
        case "CLEAR_CHALLENGE_GOALS":
            return initialState
        default:
            return state
    }
};

export default challengeGoals;
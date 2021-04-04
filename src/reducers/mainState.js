const initialState = {
    challenges: [],
    logs: [],
    users: [],
    user: {},
    userChallengeGoals: []
}

const mainState = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MAIN_STATE":
            const getMainState = {
                challenges: action.mainState.challenges.data,
                logs: action.mainState.logs.data,
                users: action.mainState.users.data,
                user: action.mainState.user.data.attributes,
                userChallengeGoals: action.mainState.user.data.attributes.challenge_goals
            }
            return getMainState
        case "UPDATE_MAIN_STATE":
            const updateMainState = {
                challenges: action.mainState.challenges.data,
                logs: action.mainState.logs.data,
                users: action.mainState.users.data,
                user: action.mainState.user.data.attributes,
                userChallengeGoals: action.mainState.user.data.attributes.challenge_goals
            }
            return updateMainState
        case "CLEAR_MAIN_STATE":
            return initialState
        default:
            return state
    }
};

export default mainState;
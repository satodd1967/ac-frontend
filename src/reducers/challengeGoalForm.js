const initialState = {
    startWeight: "",
    startBodyFat: "",
    startCalorieGoal: ""
}

const challengeGoalForm = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_CHALLENGE_GOAL_FORM":
            return action.formData
        case "RESET_CHALLENGE_GOAL_FORM":
            return initialState
        default:
            return state
    }
}

export default challengeGoalForm

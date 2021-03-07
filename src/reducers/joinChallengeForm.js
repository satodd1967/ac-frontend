const initialState = {
    startWeight: "",
    startBodyFat: "",
    startCalorieGoal: ""
}

const joinChallengeForm = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_JOIN_CHALLENGE_FORM":
            return action.formData
        case "RESET_JOIN_CHALLENGE_FORM":
            return initialState
        default:
            return state
    }
}

export default signupForm

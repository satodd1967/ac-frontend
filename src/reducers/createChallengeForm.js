const initialState = {
    name: "",
    description: "",
    startDate: "",
    duration: "",
    endDate: "",
    activeCalorieGoal: "",
    pointsWorkedOut: "",
    pointsTrackedFood: "",
    pointsMetCalorieGoal: "",
    pointsMaintainWeight: "",
    pointsMaintainBodyFat: "",
    pointsMetActiveCalorieGoal: "",
    userId: "",
}

const challengeForm = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_CHALLENGE_FORM":
            return action.formData
        case "RESET_CHALLENGE_FORM":
            return initialState
        default:
            return state
    }
}

export default challengeForm
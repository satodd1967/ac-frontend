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
    pointsMetActiveCalorieGoal: ""
}

const logForm = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_CHALLENGE_FORM":
            return action.formData
        case "RESET_CHALLENGE_FORM":
            return initialState
        case "SET_EDIT_CHALLENGE_FORM":
            return action.formData
        default:
            return state
    }
}

export default logForm
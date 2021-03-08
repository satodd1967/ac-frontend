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
        case "UPDATE_LOG_FORM":
            return action.formData
        case "RESET_LOG_FORM":
            return initialState
        default:
            return state
    }
}

export default logForm
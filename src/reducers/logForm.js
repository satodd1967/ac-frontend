const initialState = {
    logDate: "",
    workedOut: "",
    trackedFood: "",
    weight: "",
    bodyFat: "",
    activeCalories: "",
    calories: ""
}

const logForm = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_LOG_FORM":
            return action.formData
        case "RESET_LOG_FORM":
            return initialState
        case "SET_EDIT_LOG_FORM":
            return action.formData
        default:
            return state
    }
}

export default logForm
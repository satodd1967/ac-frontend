const initialState = {
    log_date: "",
    worked_out: "",
    tracked_food: "",
    weight: "",
    body_fat: "",
    active_calories: "",
    calories: ""
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
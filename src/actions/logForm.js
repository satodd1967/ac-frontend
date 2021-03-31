export const updateLogForm = formData => {
    return {
      type: "UPDATE_LOG_FORM",
      formData
    }
  }

export const resetLogForm = () => {
  return {
    type: "RESET_LOG_FORM",
  }
}

export const setEditLogForm = log => {
  const formData = {
    logDate: log.attributes.log_date,
    workedOut: log.attributes.worked_out,
    trackedFood: log.attributes.tracked_food,
    weight: log.attributes.weight,
    bodyFat: log.attributes.body_fat,
    activeCalories: log.attributes.active_calories,
    calories: log.attributes.calories
  }
  return {
    type: "SET_EDIT_LOG_FORM",
    formData
  }
}
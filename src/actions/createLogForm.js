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
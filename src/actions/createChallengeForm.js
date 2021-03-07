export const updateChallengeForm = formData => {
    return {
      type: "UPDATE_CHALLENGE_FORM",
      formData
    }
  }

export const resetChallengeForm = () => {
  return {
    type: "RESET_CHALLENGE_FORM",
  }
}
  
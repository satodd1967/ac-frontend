export const updateChallengeGoalForm = formData => {
    return {
      type: "UPDATE_CHALLENGE_GOAL_FORM",
      formData
    }
  }
  
  export const resetChallengeGoalForm = () => {
    return {
      type: "RESET_CHALLNGE_GOAL_FORM"
    }
  }
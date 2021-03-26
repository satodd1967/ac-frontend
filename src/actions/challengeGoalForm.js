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

  export const setEditChallengeGoalForm = challengeGoal => {
    const formData = {
      startWeight: challengeGoal.attributes.start_weight,
      startBodyFat: challengeGoal.attributes.start_body_fat,
      startCalorieGoal: challengeGoal.attributes.start_calorie_goal,
    }
    return {
      type: "SET_EDIT_CHALLENGE_GOAL_FORM",
      formData
    }
  }
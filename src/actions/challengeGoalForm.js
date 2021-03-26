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
      startWeight: challengeGoal.start_weight,
      startBodyFat: challengeGoal.start_body_fat,
      startCalorieGoal: challengeGoal.start_calorie_goal,
    }
    return {
      type: "SET_EDIT_CHALLENGE_GOAL_FORM",
      formData
    }
  }
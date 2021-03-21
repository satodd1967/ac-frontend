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

export const setEditChallengeForm = challenge => {
  const formData = {
    name: challenge.attributes.name,
    description: challenge.attributes.description,
    startDate: challenge.attributes.start_date,
    duration: challenge.attributes.duration,
    activeCalorieGoal: challenge.attributes.active_calorie_goal,
    pointsWorkedOut: challenge.attributes.points_worked_out,
    pointsTrackedFood: challenge.attributes.points_tracked_food,
    pointsMetCalorieGoal: challenge.attributes.points_met_calorie_goal,
    pointsMaintainWeight: challenge.attributes.points_maintain_weight,
    pointsMaintainBodyFat: challenge.attributes.points_maintain_body_fat,
    pointsMetActiveCalorieGoal: challenge.attributes.points_met_active_calorie_goal,
  }
  return {
    type: "SET_EDIT_CHALLENGE_FORM",
    formData
  }
}
  
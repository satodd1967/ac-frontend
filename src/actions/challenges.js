import { resetChallengeForm } from './challengeForm';
import { setErrors } from './errors';
import { apiDelete, apiPatch, apiPost} from './services/api';
import { updateMainState } from './mainState';

//asycchronous actions

export const sendChallenge = (challengeData, history, user) => {
    return dispatch => {
      const newChallengeData = {
        name: challengeData.name,
        description: challengeData.description,
        start_date: challengeData.startDate,
        duration: challengeData.duration,
        active_calorie_goal: challengeData.activeCalorieGoal,
        points_worked_out: challengeData.pointsWorkedOut,
        points_tracked_food: challengeData.pointsTrackedFood,
        points_met_calorie_goal: challengeData.pointsMetCalorieGoal,
        points_maintain_weight: challengeData.pointsMaintainWeight,
        points_maintain_body_fat: challengeData.pointsMaintainBodyFat,
        points_met_active_calorie_goal: challengeData.pointsMetActiveCalorieGoal,
        user_id: user.id
      }
      apiPost("challenges", newChallengeData)
        .then(response => {
          if (response.error) {
            let challengeErrorInfo = response.error
            dispatch(setErrors(challengeErrorInfo))
          } else {
            dispatch(updateMainState(response.main_state))
            dispatch(resetChallengeForm())
            history.push(`/challenges/${response.challenge.id}/challenge_goals/new`)
          }
        })
        .catch(console.log)
  
    }
  }

export const updateChallenge = (challengeData, history, user, challengeId) => {
  return dispatch => {
    const updateChallengeData = {
      name: challengeData.name,
      description: challengeData.description,
      start_date: challengeData.startDate,
      duration: challengeData.duration,
      active_calorie_goal: challengeData.activeCalorieGoal,
      points_worked_out: challengeData.pointsWorkedOut,
      points_tracked_food: challengeData.pointsTrackedFood,
      points_met_calorie_goal: challengeData.pointsMetCalorieGoal,
      points_maintain_weight: challengeData.pointsMaintainWeight,
      points_maintain_body_fat: challengeData.pointsMaintainBodyFat,
      points_met_active_calorie_goal: challengeData.pointsMetActiveCalorieGoal,
      user_id: user.id
    }
    apiPatch("challenges", updateChallengeData, challengeId)
      .then(response => {
        if (response.error) {
          let challengeErrorInfo = response.error
          dispatch(setErrors(challengeErrorInfo))
        } else {
          dispatch(updateMainState(response.main_state))
          dispatch(resetChallengeForm())
          history.push(`/challenges/${response.challenge.id}`)
        }
      })
      .catch(console.log)
  
  }
}

export const deleteChallenge = (challengeId, history) => {
  return dispatch => {
    apiDelete("challenges", challengeId)
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(updateMainState(response.main_state))
          history.push('/home')
        }
      })
      .catch(console.log)

  }

}


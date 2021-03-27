import { resetChallengeForm } from './challengeForm';
import { setErrors } from './errors';
import { apiDelete, apiGet, apiPatch, apiPost} from './services/api';

//synchronous actions
export const getChallenges = challenges => {
    return {
        type: "GET_CHALLENGES",
        challenges
    }
}

export const clearChallenges = () => {
    return {
      type: "CLEAR_CHALLENGES"
    }
  }

export const deleteChallengeSuccess = tripId => {
  return {
    type: "DELETE_TRIP",
    tripId
  }
}
// export const createChallenge = challenge => {
//     return {
//         type: "CREATE_CHALLENGE",
//         challenge
//     }
// }

//asycchronous actions

export const setChallenges = () => {
  return dispatch => {
    apiGet("challenges")
    .then(response => {
      if (response.error) {
          alert(response.error)
      } else {
          dispatch(getChallenges(response.data))
      }
    })
    .catch(console.log)
  }

}

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
            dispatch(setChallenges())
            dispatch(resetChallengeForm())
            history.push(`/challenges/${response.id}/challenge_goals/new`)
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
          dispatch(setChallenges())
          history.push(`/challenges/${response.id}`)
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
          dispatch(setChallenges())
          history.push('/')
        }
      })
      .catch(console.log)

  }

}


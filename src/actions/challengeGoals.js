import { resetChallengeGoalForm } from './challengeGoalForm';
import { setErrors } from './errors';
import { apiDelete, apiPatch, apiPost} from './services/api';
import { updateMainState } from '../actions/mainState'

//asynchronus actions
export const sendChallengeGoal = (challengeGoalData, history, user, challengeId) => {
    return dispatch => {
      const newChallengeGoalData = {
        start_weight: challengeGoalData.startWeight,
        start_body_fat: challengeGoalData.startBodyFat,
        start_calorie_goal: challengeGoalData.startCalorieGoal,
        user_id: user.id,
        challenge_id: challengeId
      }
      apiPost("challenge_goals", newChallengeGoalData)
        .then(response => {
          if (response.error) {
            let challengeErrorInfo = response.error
            dispatch(setErrors(challengeErrorInfo))
          } else {
            dispatch(updateMainState(response.main_state))
            dispatch(resetChallengeGoalForm())
            history.push('/home')
          }
        })
        .catch(console.log)
  
    }
  }

  export const updateChallengeGoal = (challengeGoalData, history, user, challengeGoalId) => {
    return dispatch => {
      const updateChallengeGoalData = {
        start_weight: challengeGoalData.startWeight,
        start_body_fat: challengeGoalData.startBodyFat,
        start_calorie_goal: challengeGoalData.startCalorieGoal,
        user_id: user.id,
        challenge_id: challengeGoalData.challenge_id
      }
      apiPatch("challenge_goals", updateChallengeGoalData, challengeGoalId)
        .then(response => {
          if (response.error) {
            let challengeErrorInfo = response.error
            dispatch(setErrors(challengeErrorInfo))
          } else {
            dispatch(updateMainState(response.main_state))
            dispatch(resetChallengeGoalForm())
            history.push({
              pathname: `/challenge_goals/${response.challenge_goal.id}`,
              challengeId: response.challenge_goal.challenge_id,
              challengeGoalId: response.challenge_goal.id
            })
          }
        })
        .catch(console.log)
  
    }
  }

  export const deleteChallengeGoal = (challengeGoalId, history) => {
    return dispatch => {
      apiDelete("challenge_goals", challengeGoalId)
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(updateMainState(response.main_state))
            history.push(`/home`)
          }
        })
        .catch(console.log)
  
    }
  
  }
  
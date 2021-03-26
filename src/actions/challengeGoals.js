import { resetChallengeGoalForm } from './challengeGoalForm';
import { getCurrentUser } from './currentUser';
import { setChallenges } from './challenges';
import { setErrors } from './errors';

//synchronous actions
// export const getChallengeGoals = challengeGoals => {
//     return {
//         type: "GET_CHALLENGE_GOALS",
//         challengeGoals
//     }
// }

// export const clearChallengeGoals = () => {
//     return {
//       type: "CLEAR_CHALLENGES_GOALS"
//     }
//   }

// export const createChallengeGoal = challengeGoal => {
//     return {
//         type: "CREATE_CHALLENGE_GOAL",
//         challengeGoal
//     }
// }

//asycchronous actions
// export const setChallengeGoals = () => {
//     return dispatch => {
//         return fetch("http://localhost:3001/api/challenge_goals", {
//             credentials: "include",
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         })
//         .then(resp => resp.json())
//         .then(response => {
//             if (response.error) {
//                 alert(response.error)
//             } else {
//                 console.log("Get Challenge Goals Response", response.data)
//                 dispatch(getChallengeGoals(response.data))
//             }
//         })
//         .catch(console.log)
//     }
// }

export const sendChallengeGoal = (challengeGoalData, history, user, challengeId) => {
    return dispatch => {
      const newChallengeGoalData = {
        start_weight: challengeGoalData.startWeight,
        start_body_fat: challengeGoalData.startBodyFat,
        start_calorie_goal: challengeGoalData.startCalorieGoal,
        user_id: user.id,
        challenge_id: challengeId
      }
      return fetch("http://localhost:3001/api/challenge_goals", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newChallengeGoalData)
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.error) {
            let challengeErrorInfo = response.error
            dispatch(setErrors(challengeErrorInfo))
          } else {
            dispatch(getCurrentUser(history))
            dispatch(setChallenges())
            dispatch(resetChallengeGoalForm())
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
      return fetch(`http://localhost:3001/api/challenge_goals/${challengeGoalId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateChallengeGoalData)
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.error) {
            let challengeErrorInfo = response.error
            dispatch(setErrors(challengeErrorInfo))
          } else {
            dispatch(getCurrentUser(history))
            dispatch(setChallenges())
            dispatch(resetChallengeGoalForm())
            history.push(`/challenge_goals/${response.id}`)
          }
        })
        .catch(console.log)
  
    }
  }

  export const deleteChallengeGoal = (challengeGoalId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/challenge_goals/${challengeGoalId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(getCurrentUser(history))
            dispatch(setChallenges())
            history.push(`/`)
          }
        })
        .catch(console.log)
  
    }
  
  }
  
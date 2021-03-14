import { resetJoinChallengeForm } from './joinChallengeForm';
import { getCurrentUser } from './users/currentUser';
import { setChallenges } from './challenges';


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

export const sendChallengeGoal = (challengeGoalData, history, user, match) => {
    return dispatch => {
      const newChallengeGoalData = {
        start_weight: challengeGoalData.startWeight,
        start_body_fat: challengeGoalData.startBodyFat,
        start_calorie_goal: challengeGoalData.startCalorieGoal,
        user_id: user.id,
        challenge_id: match.params.id
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
            alert(response.error)
          } else {
            console.log("New ChallengeGoal Post", response)
            dispatch(getCurrentUser(history))
            dispatch(setChallenges())
            dispatch(resetJoinChallengeForm())
          }
        })
        .catch(console.log)
  
    }
  }
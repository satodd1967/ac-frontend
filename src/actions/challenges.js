import { resetChallengeForm } from './challengeForm';

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
        return fetch("http://localhost:3001/api/challenges", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
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

export const sendChallenge = (challengeData, history, user, challengeId) => {
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
      console.log(newChallengeData)
      return fetch("http://localhost:3001/api/challenges", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newChallengeData)
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
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
    console.log("Hopefull Fuckness")
      return fetch(`http://localhost:3001/api/challenges/${challengeId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateChallengeData)
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setChallenges())
          dispatch(resetChallengeForm())
          history.push(`/challenges/${response.id}`)
        }
      })
      .catch(console.log)
  
  }
}

export const deleteChallenge = (challengeId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/challenges/${challengeId}`, {
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
          dispatch(deleteChallengeSuccess(challengeId))
          history.push(`/challenges`)
          // go somewhere else --> trip show?
          // add the new trip to the store
        }
      })
      .catch(console.log)

  }

}


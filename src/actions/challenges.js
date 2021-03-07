import { resetChallengeForm } from './createChallengeForm';

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

export const createChallenge = challenge => {
    return {
        type: "CREATE_CHALLENGE",
        challenge
    }
}

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
                console.log("Challenges Response", response.data)
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
        start_data: challengeData.startDate,
        duration: challengeData.duration,
        active_calorie_goal: challengeData.active_calorie_goal,
        points_worked_out: challengeData.pointsWorkedOut,
        points_tracked_food: challengeData.pointsTrackedFood,
        points_met_calorie_goal: challengeData.pointsMetCalorieGoal,
        points_maintain_weight: challengeData.pointsMaintainWeight,
        points_maintain_body_fat: challengeData.pointsMaintainBodyFat,
        points_met_active_calorie_goal: challengeData.pointsMetActiveCalorieGoal,
        user_id: user.id
      }
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
              console.log("New Challenge Post", response)
            dispatch(createChallenge(response.data))
            dispatch(resetChallengeForm())
            // history.push(`/challenges/${response.data.id}`)
            // go somewhere else --> challenge show?
            // add the new challenge to the store
          }
        })
        .catch(console.log)
  
    }
  }
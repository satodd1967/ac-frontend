import { resetLogForm } from './createLogForm';

//synchronous actions
export const getLogs = logs => {
    return {
        type: "GET_LOGS",
        logs
    }
}

export const clearLogs = () => {
    return {
      type: "CLEAR_LOGS"
    }
  }

export const createLog = log => {
    return {
        type: "CREATE_LOG",
        log
    }
}

//asycchronous actions
export const setLogs = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/logs", {
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
                dispatch(getLogs(response.data))
            }
        })
        .catch(console.log)
    }
}

export const sendLog = (logData, history, user) => {
    return dispatch => {
      const newLogData = {
        log_date: logData.logDate,
        worked_out: logData.workedOut,
        tracked_food: logData.trackedFood,
        weight: logData.weight,
        body_fat: logData.bodyFat,
        active_calories: logData.activeCalories,
        calories: logData.calories,
        user_id: user.id,
      }
      return fetch("http://localhost:3001/api/logs", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newLogData)
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
              console.log("New Log Post", response)
            dispatch(createLog(response))
            dispatch(resetLogForm())
            // history.push(`/challenges/${response.id}/challenge_goals/new`)
          }
        })
        .catch(console.log)
  
    }
  }
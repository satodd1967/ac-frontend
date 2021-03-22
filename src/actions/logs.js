import { resetLogForm } from './logForm';
import { getCurrentUser } from './currentUser';
import { setChallenges } from './challenges';

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

// export const createLog = log => {
//     return {
//         type: "CREATE_LOG",
//         log
//     }
// }

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
            dispatch(setLogs())
            dispatch(setChallenges())
            dispatch(getCurrentUser(history))
            dispatch(resetLogForm())
          }
        })
        .catch(console.log)
  
    }
  }

  export const updateLog = (logData, history, user, logId) => {
    return dispatch => {
      const updateLogData = {
        log_date: logData.logDate,
        worked_out: logData.workedOut,
        tracked_food: logData.trackedFood,
        weight: logData.weight,
        body_fat: logData.bodyFat,
        active_calories: logData.activeCalories,
        calories: logData.calories,
        user_id: user.id,
      }
      return fetch(`http://localhost:3001/api/logs/${logId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateLogData)
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            console.log("New Log Post", response)
            dispatch(setLogs())
            dispatch(setChallenges())
            dispatch(getCurrentUser(history))
          }
        })
        .catch(console.log)
  
    }
  }

  export const deleteLog = (logId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/logs/${logId}`, {
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
            dispatch(setLogs())
            dispatch(setChallenges())
            dispatch(getCurrentUser(history))
            history.push('/')
          }
        })
        .catch(console.log)
  
    }
  
  }
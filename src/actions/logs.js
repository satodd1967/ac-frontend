import { resetLogForm } from './logForm';
import { getCurrentUser } from './currentUser';
import { setChallenges } from './challenges';
import { setErrors } from './errors';
import { apiDelete, apiGet, apiPatch, apiPost} from './services/api';

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
    apiGet("logs")
    .then(response => {
      if (response.error) {
        let logErrorInfo = response.error
          dispatch(setErrors(logErrorInfo))
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
    apiPost("logs", newLogData)
    .then(response => {
      if (response.error) {
        let logErrorInfo = response.error
        dispatch(setErrors(logErrorInfo))
      } else {
        console.log("New Log Post", response)
        dispatch(setLogs())
        dispatch(setChallenges())
        // dispatch(getCurrentUser(history))
        dispatch(resetLogForm())
        history.push('/')
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
      apiPatch("logs", updateLogData, logId)
      .then(response => {
        if (response.error) {
          let logErrorInfo = response.error
          dispatch(setErrors(logErrorInfo))
        } else {
          console.log("New Log Post", response)
          dispatch(setLogs())
          dispatch(setChallenges())
          // dispatch(getCurrentUser(history))
          history.push('/')
        }
      })
      .catch(console.log)
    }
  }

  export const deleteLog = (logId, history) => {
    return dispatch => {
      apiDelete("url", logId)
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
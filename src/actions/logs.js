import { resetLogForm } from './logForm';
import { setErrors } from './errors';
import { apiDelete, apiPatch, apiPost} from './services/api';
import { updateMainState } from './mainState';

//asycchronous actions

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
        dispatch(updateMainState(response.main_state))
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
          dispatch(resetLogForm())
          dispatch(updateMainState(response.main_state))
          history.push('/')
        }
      })
      .catch(console.log)
    }
  }

  export const deleteLog = (logId, history) => {
    return dispatch => {
      apiDelete("logs", logId)
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(updateMainState(response.main_state))
          history.push('/')
        }
      })
      .catch(console.log)
    }
  }
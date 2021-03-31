import { apiGet } from './services/api';
import { setErrors } from './errors';

export const updateMainState = mainState => {
    console.log("First", mainState)
    return {
        type: "UPDATE_MAIN_STATE",
        mainState
    }
}

export const getMainState = mainState => {
    return {
      type: "GET_MAIN_STATE",
      mainState
    }
  }

export const setMainState = () => {
    return dispatch => {
      apiGet("main_state")
      .then(response => {
        if (response.error) {
          let logErrorInfo = response.error
            dispatch(setErrors(logErrorInfo))
          } else {
            dispatch(getMainState(response.main_state))
        }
      })
      .catch(console.log)
    }
  }
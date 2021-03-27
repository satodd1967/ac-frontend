import { apiGet } from "./services/api"

//synchronous actions
export const getUsers = users => {
    return {
        type: "GET_USERS",
        users
    }
}

export const clearUsers = () => {
    return {
      type: "CLEAR_USERS"
    }
  }

//asycchronous actions
export const setUsers = () => {
    return dispatch => {
        apiGet("users")
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(getUsers(response.data))
            }
        })
        .catch(console.log)
    }
}
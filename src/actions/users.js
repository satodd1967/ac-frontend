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
        return fetch("http://localhost:3001/api/users", {
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
                dispatch(getUsers(response.data))
            }
        })
        .catch(console.log)
    }
}
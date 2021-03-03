//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}

export const login = credentials => {
    console.log("Credentials", credentials)
    return dispatch => {
      return fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      
    }
  }

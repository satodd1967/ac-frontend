//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}


//asynchronous action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3001/login" {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: "kris@google.com", password: "Kris1!"})
        })
    }
}
import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'

//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//asynchronous action creators
export const login = credentials => {
    return dispatch => {
      return fetch("http://localhost:3001/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
                dispatch(resetLoginForm())
            }
        })
        .catch(console.log)
    }
  }

  export const signup = (credentials, history) => {
      console.log(credentials.email)
      return dispatch => {
          const userInfo = {
              user: {
                  email: credentials.email,
                  password: credentials.password,
                  username: credentials.username,
                  image: "images/users/defaultUser.png"
              }
          }
          return fetch("http://localhost:3001/signup", {
              credentials: "include",
              method: "Post",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(userInfo)
          })
          .then(resp => resp.json())
          .then(response => {
              if (response.error) {
                  alert(response.error)
              } else {
                  dispatch(setCurrentUser(response))
                  dispatch(resetSignupForm())
                  history.push('/')
              }
          })
          .catch(console.log)
      }
  }
  
  export const logout = () => {
      return (dispatch) => {
          dispatch(clearCurrentUser())
          return fetch('http://localhost:3001/logout', {
              credentials: "include",
              method: "DELETE"
          })
      }
  }

  export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3001/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                console.log("No User")
            } else {
                dispatch(setCurrentUser(response.data))
            }
        })
        .catch(console.log)
    }
  }

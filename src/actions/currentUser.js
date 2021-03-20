import { resetLoginForm } from './loginForm';
import { resetSignupForm } from './signupForm';
import { clearChallenges } from './challenges';
import { clearLogs } from './logs';
import { clearUsers } from './users';
import { setUsers } from './users';

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
export const login = (credentials, history) => {
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
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                console.log("login", response.data.attributes)
                dispatch(getCurrentUser(history))
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
                  console.log("signup", response.data.attributes)
                  dispatch(getCurrentUser(history))
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
            dispatch(clearChallenges())
            dispatch(clearLogs())
            dispatch(clearUsers())
            return fetch('http://localhost:3001/logout', {
                credentials: "include",
                method: "DELETE"
            })
        }
  }

  export const getCurrentUser = (history) => {
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
                dispatch(setCurrentUser(response.data.attributes))
                history.push('/')
            }
        })
        .catch(console.log)
    }
  }

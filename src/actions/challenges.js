

//synchronous actions
export const getChallenges = challenges => {
    return {
        type: "GET_CHALLENGES",
        challenges
    }
}

export const clearChallenges = () => {
    return {
      type: "CLEAR_CHALLENGES"
    }
  }

//asycchronous actions
export const setChallenges = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/challenges", {
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
                console.log("Challenges Response", response.data)
                dispatch(getChallenges(response.data))
            }
        })
        .catch(console.log)
    }
}
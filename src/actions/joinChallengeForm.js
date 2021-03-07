export const updateJoinChallengeForm = formData => {
    return {
      type: "UPDATE_JOIN_CHALLENGE_FORM",
      formData
    }
  }
  
  export const resetSignupForm = () => {
    return {
      type: "RESET_JOIN_CHALLENGE_FORM"
    }
  }
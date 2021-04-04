export const validateLogin = (values, type) => {
    let invalid = {};
    const regEmail = /[a-zA-Z0-9.!$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/;
    const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

    if (!values.email) {
        invalid.email = "Email cannot be blank!"
    } else if (!regEmail.test(values.email)) {
        invalid.email = "Invalid email format!"
    }

    const username = type === "signup" && !values.username ? invalid.username = "Username cannot be blank!" : null

    if (username) invalid.username = username

    if (!values.password) {
        invalid.password = "Password cannot be blank!"
    } else if (!regPassword.test(values.password)) {
        invalid.password = "Must contain at least 6 characters, one lowercase, one upercase, one number and one symbol!"
    }
    console.log("LoginBeforeReducer", invalid)
    return {
        type: "SET_CLIENT_ERRORS",
        invalid
    }   
};

export const validateChallenge = (values, type) => {
    let invalid = {};

    if (!values.name) {
        invalid.name = "Name cannot be blank!"
    }

    if (!values.description) {
        invalid.description = "Description cannot be blank!"
    }

    if (!values.startDate) {
        invalid.startDate = "Start date cannot be blank!"
    } else if (Date.parse(values.startDate) < new Date() && type === "create") {
        invalid.startDate = "Date cannot be in the past!"
    }

    if (!values.duration) {
        invalid.duration = "Duration cannot be blank!"
    }

    if (!values.activeCalorieGoal) {
        invalid.activeCalorieGoal = "Active calorie goal cannot be blank!"
    }

    if (!values.pointsWorkedOut) {
        invalid.pointsWorkedOut = "Points worked out cannot be blank!"
    }

    if (!values.pointsTrackedFood) {
        invalid.pointsTrackedFood = "Points tracked food cannot be blank!"
    }

    if (!values.pointsMetCalorieGoal) {
        invalid.pointsMetCalorieGoal = "Points met calorie goal cannot be blank!"
    }

    if (!values.pointsMaintainWeight) {
        invalid.pointsMaintainWeight = "Points maintained weight cannot be blank!"
    }

    if (!values.pointsMaintainBodyFat) {
        invalid.pointsMaintainBodyFat = "Points maintained body fat cannot be blank!"
    }

    if (!values.pointsMetActiveCalorieGoal) {
        invalid.pointsMetActiveCalorieGoal = "Points met active calorie goal cannot be blank!"
    }

    console.log("BeforeReducer", invalid)
    return {
        type: "SET_CLIENT_ERRORS",
        invalid
    }
};

export const validateChallengeGoal = (values) => {
    let invalid = {};

    if (!values.startBodyFat) {
        invalid.startBodyFat = "Starting body fat cannot be blank!"
    }

    if (!values.startCalorieGoal) {
        invalid.startCalorieGoal = "Starting calorie goal cannot be blank!"
    }

    if (!values.startWeight) {
        invalid.startWeight = "Starting weight cannot be blank!"
    } 

    console.log("BeforeReducer", invalid)
    return {
        type: "SET_CLIENT_ERRORS",
        invalid
    }
};

export const clearClientErrors = () => {
    return {
        type: "CLEAR_CLIENT_ERRORS"
    }
}


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

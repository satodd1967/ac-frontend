import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm"
import { signup } from "../actions/currentUser"

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email"
                value={signupFormData.email}
                name="email"
                type="text"
                onChange={handleChange}/>
            <input placeholder="username"
                value={signupFormData.username}
                name="username"
                type="text"
                onChange={handleChange}/>
            <input placeholder="password"
                value={signupFormData.password}
                name="password"
                type="text"
                onChange={handleChange}/>
            <input type="submit" value="Signup"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
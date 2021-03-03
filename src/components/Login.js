import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"

const Login = ({ loginFormData, updateLoginForm, login }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email"
                value={loginFormData.email}
                name="email"
                type="text"
                onChange={handleChange}/>
            <input placeholder="password"
                value={loginFormData.password}
                name="password"
                type="text"
                onChange={handleChange}/>
            <input type="submit" value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)

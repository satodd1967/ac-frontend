import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import { Link } from 'react-router-dom'

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
        <div className="firstpage">
            <div className="logo-text">
                <h1 style={{textAlign: 'center'}}>Accountability Challenge</h1>
                <h2>Sign in</h2>
            </div>
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
                <span><br/><br/></span>
                <Link to="/signup-form">Sign Up Here!</Link>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)

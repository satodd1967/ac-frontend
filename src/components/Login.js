import React from 'react';
import ErrorCard from './ErrorCard';
import { connect, useStore } from 'react-redux';
import { updateLoginForm } from "../actions/loginForm.js";
import { login } from "../actions/currentUser.js";
import { Link } from 'react-router-dom';
import { clearErrors } from '../actions/errors';

const Login = ({ loginFormData, updateLoginForm, login, history, errors, clearErrors, users }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        clearErrors()
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        event.preventDefault()
        const errors = validate(updatedFormInfo)
        console.log(errors)
        login(loginFormData, history)
    }

    const validate = (values) => {
        let errors = {};

        if (!values.email) {
            errors.email = "Cannot be Blank";
        } else {
            
        }

        return errors

    }

    const formErrors = errors.map(error => {
        return <ErrorCard key={error} error={error}/>
    })

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
                <Link to="/signup">Sign Up Here!</Link>
                <br/>
                <br/>
                {formErrors}
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm,
        errors: state.errors,
        users: state.users
    }
}

export default connect(mapStateToProps, { updateLoginForm, login, clearErrors } )(Login)

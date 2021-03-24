import React from 'react';
import ErrorCard from './ErrorCard';
import { connect } from 'react-redux';
import { updateSignupForm } from "../actions/signupForm";
import { signup } from "../actions/currentUser";
import { clearErrors } from '../actions/errors';

const Signup = ({ signupFormData, updateSignupForm, signup, history, errors, clearErrors }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        clearErrors()
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
    }

    const formErrors = errors.map(error => {
        return <li><ErrorCard key={error} error={error}/></li>
    }) 

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
            <br/>
            <br/>
            <ul>
                {formErrors}
            </ul>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup, clearErrors } )(Signup)
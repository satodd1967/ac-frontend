import React from 'react';
import ErrorCard from './ErrorCard';
import { connect } from 'react-redux';
import { updateSignupForm } from "../actions/signupForm";
import { updatedFormData } from '../actions/services/updateFormData';
import { validateLogin } from '../actions/clientErrors';
import { clearClientErrors } from '../actions/clientErrors';
import ClientErrorsCard from '../components/ClientErrorsCard';
import { signup } from "../actions/currentUser";
import { clearErrors } from '../actions/errors';
import { Link } from 'react-router-dom';

const Signup = ({ formData, updateSignupForm, signup, history, errors, clearErrors, clientErrors, validateLogin, clearClientErrors }) => {

    const handleChange = event => {
        const updatedFormInfo = updatedFormData(event, formData)
        clearErrors()
        clearClientErrors()
        updateSignupForm(updatedFormInfo)
    };

    const handleSubmit = async event => {
        event.preventDefault()
        const updatedFormInfo = updatedFormData(event, formData)
        const isValid = await validateLogin(updatedFormInfo, "signup")
        if (Object.keys(isValid.invalid).length === 0) {
            signup(formData, history)
        }
    };



    const formErrors = errors.map(error => {
        return <li key={error}><ErrorCard error={error}/></li>
    }) 

    return (
        <div className="signup-form">
            <div className="logo-text">
                <h1 style={{textAlign: 'center'}}>Accountability Challenge</h1>
                <h2>Sign Up!</h2>
            </div>
            <form className="signup-form-body" onSubmit={handleSubmit}>
                <input placeholder="email"
                    value={formData.email}
                    name="email"
                    type="email"
                    onChange={handleChange}/>
                <ClientErrorsCard error={clientErrors.email}/> 
                <input className="signup-username" placeholder="username"
                    value={formData.username}
                    name="username"
                    type="text"
                    onChange={handleChange}/>
                <ClientErrorsCard error={clientErrors.username}/>
                <input placeholder="password"
                    value={formData.password}
                    name="password"
                    type="password"
                    onChange={handleChange}/>
                <ClientErrorsCard error={clientErrors.password}/>
                <input type="submit" value="Signup"/>
                <br/>
                <br/>
                <Link to="/">Cancel Signup</Link>
                <br/>
                <br/>
                <ul>
                    {formErrors}
                </ul>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        formData: state.signupForm,
        errors: state.errors,
        clientErrors: state.clientErrors
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup, clearErrors, updatedFormData, clearClientErrors, validateLogin } )(Signup)
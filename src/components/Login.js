import React from 'react';
import ErrorCard from './ErrorCard';
import { connect } from 'react-redux';
import { updatedFormData } from '../actions/services/updateFormData';
import { updateLoginForm } from "../actions/loginForm";
import { validateLogin } from '../actions/clientErrors';
import { clearClientErrors } from '../actions/clientErrors';
import ClientErrorsCard from '../components/ClientErrorsCard';
import { login } from "../actions/currentUser";
import { Link } from 'react-router-dom';
import { clearErrors } from '../actions/errors';

const Login = ({ formData, updateLoginForm, login, history, errors, clearErrors, clearClientErrors, validateLogin, clientErrors }) => {
    
    const handleChange = event => {
        const updatedFormInfo = updatedFormData(event, formData)
        clearErrors()
        clearClientErrors()
        updateLoginForm(updatedFormInfo)
    };

    const handleSubmit = async event => {
        event.preventDefault()
        const updatedFormInfo = updatedFormData(event, formData)
        const isValid = await validateLogin(updatedFormInfo, "login")
        if (Object.keys(isValid.invalid).length === 0) {
            login(formData, history)
        }
    };

    const formErrors = errors.map(error => {
        return <ErrorCard key={error} error={error}/>
    });

    return (
        <div className="login-form">
            <div className="logo-text">
                <h1 style={{textAlign: 'center'}}>Accountability Challenge</h1>
                <h2>Sign in</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="login-email" placeholder="email"
                    value={formData.email}
                    name="email"
                    type="email"
                    onChange={handleChange}/>
                <ClientErrorsCard error={clientErrors.email}/> 
                <input className="login-password" placeholder="password"
                    value={formData.password}
                    name="password"
                    type="password"
                    onChange={handleChange}/>
                <ClientErrorsCard error={clientErrors.password}/>
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
        formData: state.loginForm,
        errors: state.errors,
        clientErrors: state.clientErrors
    }
}

export default connect(mapStateToProps, { updateLoginForm, login, clearErrors, clearClientErrors, validateLogin, updatedFormData } )(Login)

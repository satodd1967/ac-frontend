import React from 'react';
import ErrorCard from './ErrorCard';
import { connect } from 'react-redux';
import { updateSignupForm } from "../actions/signupForm";
import { signup } from "../actions/currentUser";
import { clearErrors } from '../actions/errors';
import { Link } from 'react-router-dom';

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
        <div className="signup-form">
            <div className="logo-text">
                <h1 style={{textAlign: 'center'}}>Accountability Challenge</h1>
                <h2>Sign Up!</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input placeholder="email"
                    value={signupFormData.email}
                    name="email"
                    type="text"
                    onChange={handleChange}/>
                <input className="signup-username" placeholder="username"
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
        signupFormData: state.signupForm,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup, clearErrors } )(Signup)
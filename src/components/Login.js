import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';

const Login = ({ loginForm, updateLoginForm }) => {
    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }
    return (
        <form onSubmit={undefined}>
            <input placeholder="email"
                value={loginForm.email}
                name="email"
                type="text"
                onChange={handleChange}>
            </input>
            <input placeholder="password"
                value={loginForm.password}
                name="password"
                type="text"
                onChange={handleChange}>
            </input>
            <input type="submit" value="Log In"></input>

        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}


export default connect(mapStateToProps, { updateLoginForm } )(Login)
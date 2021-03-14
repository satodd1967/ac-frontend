import React from 'react';
import { connect } from 'react-redux';
import { logout } from "../actions/currentUser.js";

const Logout = ({ logout, history}) => {

    const handleSubmit = event => {
        event.preventDefault()
        logout()
        history.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Log Out"/>
        </form>
    )
}

export default connect(null, { logout } )(Logout)
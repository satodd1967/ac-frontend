import React from 'react';
import Logout from "./Logout";
import { Link } from 'react-router-dom'

const LeftNav = () => {

    return (
        <div className="left-nav">
            <div class="logo-text">
                <h1>Accountability Challenge</h1>
            </div>
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/all-challenges">View All Challenges</Link></h4>
            <h4><Link to="/new-challenge">Create a new challenge</Link></h4>
            <h4><Link to="/new-log">Create a new Log</Link></h4>
            <Logout/>
        </div>
    )
}

export default LeftNav
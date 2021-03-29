import React from 'react';
import Logout from "./Logout";
import { Link } from 'react-router-dom'

const LeftNav = (props) => {

    return (
        <div className="left-nav">
            <h3>Getting Better Together!</h3>
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/challenges">View All Challenges</Link></h4>
            <h4><Link to="/challenges/new">Create a new challenge</Link></h4>
            <h4><Link to="/logs/new">Create a new Log</Link></h4>
            <Logout history={props.history}/>
        </div>
    )
}

export default LeftNav
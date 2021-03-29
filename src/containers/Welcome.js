import React from 'react';
import Login from '../components/Login';
import SignupForm from '../components/SignupForm'
import { Route, Switch } from 'react-router-dom';

const Welcome = () => {

    return (
        <div className="welcome">
            <Switch> 
                <Route exact path='/welcome' component={Login}/>
                <Route exact path='/signup' component={SignupForm}/>
            </Switch>
        </div>
    )
}

export default Welcome
import React from 'react';
import Login from './Login';
import SignupForm from './SignupForm'
import { Route, Switch } from 'react-router-dom';

const Welcome = () => {

    return (
        <div className="welcome">
            <Switch> 
                <Route exact path='/' component={Login}/>
                <Route exact path='/signup' component={SignupForm}/>
            </Switch>
        </div>
    )
}

export default Welcome
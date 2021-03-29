import React from 'react';
import './App.css';
import Welcome from './containers/Welcome';
import Home from './containers/Home';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser(this.props.history)
  }

  render()  {
    return (
      <div className="App">
        <Switch>
          {
            this.props.loggedIn ?
            <Redirect exact from='/' to='/home' />
            :
            <Redirect exact from='/' to='/welcome' />
          }
          <Route path='/home'> <Home /> </Route>
          <Route path='/welcome'> <Welcome /> </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);

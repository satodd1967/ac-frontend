import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import Logout from './components/Logout';
import Challenges from './components/Challenges';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { setChallenges } from './actions/challenges';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends React.Component {

  componentDidMount() {
    console.log("App Props", this.props)
    this.props.getCurrentUser(this.props.history)
  }

  render()  {
    return (
      <div className="App">
          {
            this.props.loggedIn ?
            <Route exact path='/' render={() => <Home/> }/>
             :
            <Route exact path='/' render={() => <Welcome/> }/>
          }
          <Route exact path='/signup-form' component={SignupForm}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/challenges' component={Challenges}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser, setChallenges })(App));

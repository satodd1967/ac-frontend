import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { setChallenges } from './actions/challenges';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends React.Component {

  componentDidMount() {
    console.log("App Props", this.props)
    this.props.getCurrentUser(this.props.history)
  }

  render()  {
    return (
      <div className="App">
        <Switch>
          {
            this.props.loggedIn ?
            <Route path='/' render={(props) => <Home history={props.history}/> }/>
             :
            <Route path='/' render={() => <Welcome/> }/>
          }
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

export default withRouter(connect(mapStateToProps, { getCurrentUser, setChallenges })(App));

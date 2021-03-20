import React from 'react';
import './App.css';
import Welcome from './containers/Welcome';
import Home from './containers/Home';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { setUsers } from './actions/users';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser(this.props.history)
    this.props.setUsers()
  }

  render()  {
    return (
      <div className="App">
        <Switch>
          {
            this.props.loggedIn ?
            <Route path='/' render={(props) => <Home history={props.history}/> }/>
             :
            <Route path='/' render={(props) => <Welcome history={props.history}/> }/>
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

export default withRouter(connect(mapStateToProps, { getCurrentUser, setUsers })(App));

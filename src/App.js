import React from 'react';
import './App.css';
import Welcome from './containers/Welcome';
import Home from './containers/Home';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { Route, Redirect } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render()  {
    return (
      <div className="App">
        {
          this.props.loggedIn ?
          <Route path='/'>
            <Redirect to='/home'/><Home/>
          </Route> :
          <Route path='/'>
            <Redirect to='/welcome'/><Welcome/>
          </Route>
        }
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

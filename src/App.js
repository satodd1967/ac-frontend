import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import SignupForm from './components/SignupForm'
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { Route, withRouteer } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render()  {
    return (
      <div className="App">
          <Route exact path='/' render={()=> this.props.loggedIn ? <Home/> : <Welcome/>}/>
          <Route exact path='/signup-form' component={SignupForm}/>
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

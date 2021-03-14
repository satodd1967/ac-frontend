import React from 'react';
import './App.css';
import Welcome from './containers/Welcome';
import Home from './containers/Home';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

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

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

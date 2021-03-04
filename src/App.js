import React from 'react';
import './App.css';
import Login from "./components/Login"
import Logout from "./components/Logout"
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render()  {
    return (
      <div>
        {this.props.currentUser ? <Logout/> : <Login/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);

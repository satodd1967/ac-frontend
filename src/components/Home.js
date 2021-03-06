import React from 'react';
import LeftNav from './LeftNav';
import YourChallenges from './YourChallenges';
import { setChallenges } from '../actions/challenges';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'


class Home extends React.Component {

    componentDidMount() {
        console.log("Home Props", this.props)
        this.props.setChallenges()
      }

    render() {
        return (
            <div className="home">
                <div className="column-1">
                    <LeftNav/>
                </div>
                <div className="column-2">
                    <YourChallenges/>
                </div>
                <div className="column-3">
    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      loggedIn: !!state.currentUser
    }
  }
  
  export default connect(mapStateToProps, { setChallenges })(Home);
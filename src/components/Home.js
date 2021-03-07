import React from 'react';
import LeftNav from './LeftNav';
import YourChallenges from './YourChallenges';
import Challenges from './Challenges';
import CreateChallenge from './CreateChallengeForm'
import { setChallenges } from '../actions/challenges';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';


class Home extends React.Component {

    componentDidMount() {
        console.log("Home Props", this.props)
        this.props.setChallenges()
      }

    render() {
        return (
            <div className="home">
                <div className="column-1">
                    <LeftNav history={this.props.history}/>
                </div>
                <div className="column-2">
                    <Switch>
                        <Route exact path='/' component={YourChallenges}/>
                        <Route exact path='/challenges' component={Challenges}/>
                        <Route exact path='/challenges/new' component={CreateChallenge}/>
                    </Switch>
                </div>
                <div className="column-3">
    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        loggedIn: !!state.currentUser
    }
  }
  
  export default withRouter(connect(mapStateToProps, { setChallenges })(Home));
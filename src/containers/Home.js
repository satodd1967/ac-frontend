import React from 'react';
import LeftNav from '../components/LeftNav';
import YourChallenges from '../components/YourChallenges';
import YourLogs from '../components/YourLogs';
import Challenges from '../components/Challenges';
import ChallengeShow from '../components/ChallengeShow';
import CreateChallenge from '../components/CreateChallengeForm'
import JoinChallenge from '../components/JoinChallengeForm'
import CreateLog from '../components/CreateLogForm';
import { setChallenges } from '../actions/challenges';
import { setLogs } from '../actions/logs';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';


class Home extends React.Component {

    componentDidMount() {
        this.props.setChallenges()
        this.props.setLogs()
      }

    render() {
        return (
            <div className="home">
                <div className="column-1">
                    <LeftNav history={this.props.history}/>
                </div>
                <div className="column-2">
                    <div className="top-element-column-2">
                    <Switch>
                        <Route exact path='/' component={YourChallenges}/>
                        <Route exact path='/challenges' component={Challenges}/>
                        <Route exact path='/challenges/new' component={CreateChallenge}/>
                        <Route exact path='/challenges/:id' render={props => <ChallengeShow challengeId={props.match.params.id}/> }/>
                        <Route exact path='/challenges/:id/challenge_goals/new' component={JoinChallenge}/>
                        <Route exact path='/logs/new' component={CreateLog}/>
                    </Switch>
                    </div>
                    <div className="bottom-element-column2">
                    <Switch>
                        <Route exact path='/' component={YourLogs}/>
                    </Switch>
                    </div>
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
  
  export default withRouter(connect(mapStateToProps, { setChallenges, setLogs })(Home));
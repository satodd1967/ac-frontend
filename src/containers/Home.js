import React from 'react';
import LeftNav from '../components/LeftNav';
import YourChallenges from './YourChallenges';
import YourLogs from './YourLogs';
import Challenges from './Challenges';
import ChallengeShow from './ChallengeShow';
import GoalShow from './GoalShow';
// import CreateChallenge from '../components/ChallengeForm'
import ChallengeCreateForm from './ChallengeCreateForm';
import JoinChallenge from '../components/JoinChallengeForm'
import CreateLog from '../components/CreateLogForm';
import { setChallenges } from '../actions/challenges';
import { setLogs } from '../actions/logs';
import { setUsers } from '../actions/users';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';


class Home extends React.Component {

    componentDidMount() {
        this.props.setChallenges()
        this.props.setLogs()
        this.props.setUsers()
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
                        <Route exact path='/challenges/new' component={ChallengeCreateForm}/>
                        <Route exact path='/challenges/:id' render={props => <ChallengeShow challengeId={props.match.params.id}/> }/>
                        <Route exact path='/goals/:id' component={GoalShow}/>
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
  
  export default withRouter(connect(mapStateToProps, { setChallenges, setLogs, setUsers })(Home));
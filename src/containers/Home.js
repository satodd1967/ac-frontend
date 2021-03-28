import React from 'react';
import LeftNav from '../components/LeftNav';
import YourChallenges from './YourChallenges';
import YourLogs from './YourLogs';
import Challenges from './Challenges';
import ChallengeShow from './ChallengeShow';
import GoalShow from './GoalShow';
import ChallengeCreateForm from './ChallengeCreateForm';
import ChallengeEditForm from './ChallengeEditForm';
import LogEditForm from './LogEditForm';
import ChallengeGoalCreateForm from './ChallengeGoalCreateForm';
import ChallengeGoalEditForm from './ChallengeGoalEditForm';
import LogCreateForm from './LogCreateForm';
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
            <div className="main">
                <div className="header">
                    <div className="header-image">
                        <h1>Image</h1>
                    </div>
                    <div className="header-title">
                        <h1>Accountability Challenge</h1> 
                    </div>
                </div>
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
                            <Route exact path='/challenges/:id/edit' render={props => {
                                const challenge = this.props.challenges.find(challenge => challenge.id === props.match.params.id)
                                return <ChallengeEditForm challenge={challenge} history={props.history}/>
                                }
                            }/>
                            <Route exact path='/goals/:id' component={GoalShow}/>
                            <Route exact path='/challenges/:id/challenge_goals/new' component={ChallengeGoalCreateForm}/>
                            <Route exact path='/challenge_goals/:id/edit' render={props => {
                                const challengeGoal = this.props.user.challenge_goals.find(challengeGoal => challengeGoal.id === props.location.challengeGoalId)
                                return <ChallengeGoalEditForm challengeGoal={challengeGoal} history={props.history}/>
                                }
                            }/>
                            <Route exact path='/logs/new' component={LogCreateForm}/>
                            <Route exact path='/logs/:id/edit' render={props => {
                                const log = this.props.logs.find(log => log.id === props.match.params.id)
                                return <LogEditForm log={log} history={props.history}/>
                                }
                            }/>
                        </Switch>
                        </div>
                        <div className="bottom-element-column2">
                        <Switch>
                            <Route exact path='/' component={YourLogs}/>
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        loggedIn: !!state.currentUser,
        challenges: state.challenges,
        logs: state.logs
    }
  }
  
  export default withRouter(connect(mapStateToProps, { setChallenges, setLogs, setUsers })(Home));
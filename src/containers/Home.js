import React from 'react';
import LeftNav from '../components/LeftNav';
import YourChallenges from './YourChallenges';
import YourLogs from './YourLogs';
import Challenges from './Challenges';
import ChallengeShow from './ChallengeShow';
import ChallengeLogs from './ChallengeLogs';
import GoalShow from './GoalShow';
import ChallengeCreateForm from './ChallengeCreateForm';
import ChallengeEditForm from './ChallengeEditForm';
import LogEditForm from './LogEditForm';
import ChallengeGoalCreateForm from './ChallengeGoalCreateForm';
import ChallengeGoalEditForm from './ChallengeGoalEditForm';
import LogCreateForm from './LogCreateForm';
import { setMainState } from '../actions/mainState';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';

class Home extends React.Component {

    componentDidMount() {
        this.props.setMainState()
      }

    render() {
        return (
            <div className="main">
                <div className="header">
                    <div className="header-image">
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
                            <Route path='/' component={YourChallenges}/>
                        </Switch>
                        </div>
                        <div className="bottom-element-column2">
                        <Switch>
                        </Switch>
                        </div>
                    </div>
                    <div className="column-3">
                    <Switch>
                        <Route exact path='/' component={YourLogs}/>
                        <Route exact path='/challenges' component={Challenges}/>
                        <Route exact path='/challenges/new' component={ChallengeCreateForm}/>
                        <Route exact path='/challenges/:id' render={props => <ChallengeShow challengeId={props.match.params.id}/> }/>
                        <Route exzct path='/challenges/:id/logs' component={ChallengeLogs}/>
                        <Route exact path='/challenges/:id/edit' render={props => {
                            const challenge = this.props.challenges.find(challenge => challenge.id === props.match.params.id)
                                return <ChallengeEditForm challenge={challenge} history={props.history}/>
                            }
                        }/>
                        <Route exact path='/challenge_goals/:id' component={GoalShow}/>
                        <Route exact path='/challenges/:id/challenge_goals/new' component={ChallengeGoalCreateForm}/>
                        <Route exact path='/challenge_goals/:id/edit' render={props => {
                            const challengeGoal = this.props.challengeGoals.find(challengeGoal => challengeGoal.id.toString() === props.match.params.id)
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.mainState.user,
        challenges: state.mainState.challenges,
        logs: state.mainState.logs,
        users: state.mainState.users,
        challengeGoals: state.mainState.userChallengeGoals
    }
  }
  
  export default withRouter(connect(mapStateToProps, { setMainState })(Home));
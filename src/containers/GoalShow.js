import React from 'react';
import GoalCard from '../components/GoalCard';
import GoalsEditButton from '../components/GoalsEditButton';
import { connect } from 'react-redux';

const GoalShow = (props) => {

    const challenge = props.challenges.find(challenge => {
        return challenge.id === props.location.challengeId
    })

    const challengeGoals = props.user.challenge_goals.map(challengeGoal => {
        if (challengeGoal.id === props.location.challengeGoalId) {
             return <GoalCard key={challengeGoal.id} challengeGoal={challengeGoal}/>
         } else {
             return ""
         }
    })

    const editButton = props.user.challenge_goals.map(challengeGoal => {
        if (challengeGoal.id === props.location.challengeGoalId) {
            return <GoalsEditButton key={challengeGoal.id} challengeGoalId={challengeGoal.id}/>
        } else {
            return ""
        }
    })

    return (
        <div className="goal-show">
            <div className="goal-show-header">
                <h1>Your goals for {challenge ? challenge.attributes.name : `No Goal`}</h1>
                <h4>Start Date: {challenge ? challenge.attributes.start_date : `No Goal`} End Date: {challenge ? challenge.attributes.end_date : `No Goal`} </h4>
                <h3>Duration {challenge ? `${challenge.attributes.duration} weeks` : `No Goal`}</h3>
                {challengeGoals}
                <br/>
                {editButton}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.mainState.user,
        challenges: state.mainState.challenges
    }
}

export default connect(mapStateToProps)(GoalShow)
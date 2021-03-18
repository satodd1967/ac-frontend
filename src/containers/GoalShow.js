import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const GoalShow = (props) => {

    const challenge = props.challenges.find(challenge => {
        return challenge.id === props.challengeId
    })

    return (
        <div className="challenge-show">
            <div className="goal-show-header">
                <h1>{challenge ? challenge.attributes.name : `No Challenge`}</h1>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        challenges: state.challenges
    }
}

export default connect(mapStateToProps)(GoalShow)
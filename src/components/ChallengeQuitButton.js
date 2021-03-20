import React from 'react';
import { connect } from 'react-redux';
import { deleteChallengeGoal } from "../actions/challengeGoals.js";

const quitChallengeButton = ({ deleteChallengeGoal, history, challengeGoalId}) => {

    const handleSubmit = event => {
        event.preventDefault()
        deleteChallengeGoal(challengeGoalId, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Quit Challenge"/>
        </form>
    )
}

export default connect(null, { deleteChallengeGoal } )(quitChallengeButton)
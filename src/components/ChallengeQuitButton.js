import React from 'react';
import { connect } from 'react-redux';
import { deleteChallengeGoal } from "../actions/challengeGoals.js";

const quitChallengeButton = ({ deleteChallengeGoal, history}) => {

    const handleSubmit = event => {
        event.preventDefault()
        deleteChallengeGoal()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Quit Challenge"/>
        </form>
    )
}

export default connect(null, { deleteChallengeGoal } )(quitChallengeButton)
import React from 'react';
import { connect } from 'react-redux';
import { deleteChallengeGoal } from "../actions/challengeGoals";

const deleteButton = ({ deleteChallengeGoal, history, deleteId }) => {

    const handleSubmit = event => {
        event.preventDefault()
        deleteChallengeGoal(deleteId, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Quit Challenge"/>
        </form>
    )
}

export default connect(null, { deleteChallengeGoal } )(deleteButton)
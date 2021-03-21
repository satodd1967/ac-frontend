import React from 'react';
import { connect } from 'react-redux';
import { deleteChallenge } from "../actions/challenges";
import { deleteChallengeGoal } from "../actions/challengeGoals";

const deleteButton = ({ deleteChallengeGoal, deleteChallenge, history, deleteId, type }) => {

    const handleSubmit = event => {
        event.preventDefault()
        const exp = type
        console.log("EXP or TYPE", exp)
        console.log("DeleteId", deleteId)
        console.log("History", history)
        switch (exp) {
            case "CHALLENGE_GOAL":
                deleteChallengeGoal(deleteId, history)
                break;
            case "CHALLENGE":
                deleteChallenge(deleteId, history)
                break;
            default:
                history.push('/')
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Quit Challenge"/>
        </form>
    )
}

export default connect(null, { deleteChallengeGoal, deleteChallenge } )(deleteButton)
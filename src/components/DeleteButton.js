import React from 'react';
import { connect } from 'react-redux';
import { deleteChallenge } from "../actions/challenges";
import { deleteChallengeGoal } from "../actions/challengeGoals";
import { deleteLog } from '../actions/logs';

const DeleteButton = ({ deleteChallengeGoal, deleteChallenge, deleteLog, history, deleteId, type }) => {

    const handleSubmit = event => {
        event.preventDefault()
        switch (type) {
            case "Quit Challenge":
                deleteChallengeGoal(deleteId, history)
                break;
            case "Delete Challenge":
                deleteChallenge(deleteId, history)
                break;
            case "Delete Log":
                deleteLog(deleteId, history)
                break;
            default:
                history.push('/')
                break;
        }
    };

    return (
        <form className="delete-button" onSubmit={handleSubmit}>
            <input type="submit" value={type}/>
        </form>
    )
}

export default connect(null, { deleteChallengeGoal, deleteChallenge, deleteLog } )(DeleteButton)
import React from 'react';
import { Link } from 'react-router-dom';

const viewGoals = (props) => {

    return (
        <div>
            <Link to={{ 
                pathname: `/challenge_goals/${props.currentUserCGId}`, 
                challengeId: props.challengeId,
                challengeGoalId: props.currentUserCGId 
            }}>
            <button type="button">
                View Goals
            </button>
            </Link>
        </div>
    )
}

export default viewGoals
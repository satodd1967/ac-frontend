import React from 'react';
import { Link } from 'react-router-dom';

const editGoals = (props) => {

    return (
        <div>
            <Link to={{ 
                pathname: `/challenge_goals/${props.challengeGoalId}/edit`, 
                challengeGoalId: props.challengeGoalId, 
            }}>
            <button type="button">
                Edit Challenge Goal
            </button>
            </Link>
        </div>
    )
}

export default editGoals
import React from 'react';
import { Link } from 'react-router-dom';

const viewGoals = (props) => {

    return (
        <div>
            <Link to={{ 
                pathname: `/goals/${props.currentUserCGId}`, 
                challengeId: props.challengeId 
            }}>
            <button type="button">
                View Goals
            </button>
            </Link>
        </div>
    )
}

export default viewGoals
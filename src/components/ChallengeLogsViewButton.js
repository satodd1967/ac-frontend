import React from 'react';
import { Link } from 'react-router-dom';

const viewChallengeLogs = ({ challengeId }) => {

    return (
        <div>
            <Link to={{ 
                pathname: `/challenges/${challengeId}/logs`, 
            }}>
            <button type="button">
                View Logs
            </button>
            </Link>
        </div>
    )
}

export default viewChallengeLogs
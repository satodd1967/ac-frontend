import React from 'react';
import { Link } from 'react-router-dom';

const editChallenge = (props) => {

    return (
        <div>
            <li>
                <Link to={{ 
                    pathname: `/challenges/${props.challengeId}/edit`, 
                    challengeId: props.challengeId, 
                }}>
                <button type="button">
                    Edit Challenge
                </button>
                </Link>
            </li>
        </div>
    )
}

export default editChallenge
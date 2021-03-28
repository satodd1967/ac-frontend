import React from 'react';
import { Link } from 'react-router-dom';

const editChallenge = (props) => {

    return (
        <>
                <Link to={{ 
                    pathname: `/challenges/${props.challengeId}/edit`, 
                    challengeId: props.challengeId, 
                }}>
                <button type="button">
                    Edit Challenge
                </button>
                </Link>
        </>
    )
}

export default editChallenge
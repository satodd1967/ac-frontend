import React from 'react';

const ChallengeOwners = (props) => {

    return (
        <div className="challenge-owner">
            Owner: {props.challenge.attributes.user.username}
        </div>
    )
}

export default ChallengeOwners
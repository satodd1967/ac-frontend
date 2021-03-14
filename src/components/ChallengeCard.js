import React from 'react';
import { Link } from 'react-router-dom';

const ChallengeCard = (props) => {

    return (
        <div className="challenge-cards">
            <h1>{props.challenge.attributes.name}</h1>
        </div>
    )
}

export default ChallengeCard
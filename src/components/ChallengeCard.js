import React from 'react';
import { Link } from 'react-router-dom';

const ChallengeCard = (props) => {

    return (
        <div className="challenge-cards">
            <li><h4><Link to={`/challenges/${props.challenge.id}`}>{props.challenge.attributes.name}</Link></h4></li>
            <li>{props.challenge.attributes.description}</li>
        </div>
    )
}

export default ChallengeCard
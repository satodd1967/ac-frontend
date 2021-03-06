import React from 'react';
import { Link } from 'react-router-dom';

const ChallengeCards = (props) => {

    return (
        <div className="participating-challenges">
            <h4><Link to={`/challenges/${props.challenge.attributes.id}`}>{props.challenge.attributes.name}</Link></h4>
            <p>{props.challenge.attributes.description}</p>
            <p>Owner: {props.challenge.attributes.user.username}</p>
        </div>
    )
}

export default ChallengeCards
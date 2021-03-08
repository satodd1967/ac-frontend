import React from 'react';
import { Link } from 'react-router-dom';

const ChallengeCardsP = (props) => {

    return (
        <div className="challenge-cards">
            <h4><Link to={`/challenges/${props.challenge.id}`}>{props.challenge.name}</Link></h4>
            <p>{props.challenge.description}</p>
            <p><Link to={`/challenge-goals/${undefined}`}>View your goals</Link></p>
            <p><Link to={`/challenge-goals/${undefined}/delete`}>Quit this challenge</Link></p>
        </div>
    )
}

export default ChallengeCardsP
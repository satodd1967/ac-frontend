import React from 'react';
import { Link } from 'react-router-dom';

const ChallengeCards = ({ challenge }) => {

    return (
        <div className="challenge-cards">
            <li><h4><Link to={`/challenges/${challenge.id}`}>{challenge.attributes.name}</Link></h4></li>
            <li>{challenge.attributes.description}</li>
            <br/>
        </div>
    )
}

export default ChallengeCards
import React from 'react';
import { Link } from 'react-router-dom';
import GoalsViewButton from './GoalsViewButton';

const ChallengeCards = (props) => {

    return (
        <div className="challenge-cards">
            <li><h4><Link to={`/challenges/${props.challenge.id}`}>{props.challenge.attributes.name}</Link></h4></li>
            <li>{props.challenge.attributes.description}</li>
            <li><GoalsViewButton challengeId={props.challenge.id} currentUserCGId={props.currentUserCGId}/></li>
            <br/>
        </div>
    )
}

export default ChallengeCards
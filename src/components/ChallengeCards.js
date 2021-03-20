import React from 'react';
import { Link } from 'react-router-dom';
import GoalsViewButton from './GoalsViewButton';
import ChallengeQuitButton from './ChallengeQuitButton';

const ChallengeCards = (props) => {

    const goalsViewButton = props.currentUserCGId === "null" ? "" :
        <li>
            <GoalsViewButton challengeId={props.challenge.id} currentUserCGId={props.currentUserCGId}/>
        </li>

    const challengeQuitButton = props.currentUserCGId === "null" ? "" :
        <li>
            <ChallengeQuitButton challengeGoalId={props.currentUserCGId}/>
        </li>
    

    return (
        <div className="challenge-cards">
            <li><h4><Link to={`/challenges/${props.challenge.id}`}>{props.challenge.attributes.name}</Link></h4></li>
            <li>{props.challenge.attributes.description}</li>
            {goalsViewButton}
            {challengeQuitButton}
            <br/>
        </div>
    )
}

export default ChallengeCards
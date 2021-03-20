import React from 'react';
import { Link } from 'react-router-dom';
import GoalsViewButton from './GoalsViewButton';
import ChallengeQuitButton from './ChallengeQuitButton';
import ChallengeEditButton from './ChallengeEditButton';

const ChallengeCards = (props) => {

    const goalsViewButton = props.currentUserCGId === "null" ? "" :
        <li>
            <GoalsViewButton challengeId={props.challenge.id} currentUserCGId={props.currentUserCGId}/>
        </li>

    const challengeQuitButton = props.currentUserCGId === "null" ? "" :
        <li>
            <ChallengeQuitButton challengeGoalId={props.currentUserCGId}/>
        </li>

    const challengeEditButton = props.challenge === "null" ? "" :
        <li>
            <ChallengeEditButton challengeId={props.challenge.id}/>
        </li>

    return (
        <div className="challenge-cards">
            <li><h4><Link to={`/challenges/${props.challenge.id}`}>{props.challenge.attributes.name}</Link></h4></li>
            <li>{props.challenge.attributes.description}</li>
            {goalsViewButton}
            {challengeQuitButton}
            {challengeEditButton}
            <br/>
        </div>
    )
}

export default ChallengeCards
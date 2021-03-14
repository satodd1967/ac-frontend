import React from 'react';
import { connect } from 'react-redux';
import ChallengeCard from './ChallengeCard';
import ChallengeOwner from './ChallengeOwners';
import ChallengeRanking from './ChallengeRanking';
import LogCards from './LogCards'
import { Link } from 'react-router-dom';

const ChallengeShow = (props) => {

    const challenge = props.challenges.find(challenge => {
        return challenge.id === props.challengeId
    })

    const challengeOwner = challenge ? <ChallengeOwner challenge={challenge}/> : <p>No Challenge</p>

    const challengeCard = challenge ? <ChallengeCard challenge={challenge}/> : <p>No Challenge</p>

    const challengeRanking = challenge ? <ChallengeRanking challenge={challenge}/> : <p>No Challenge</p>

    const logs = challenge ? challenge.attributes.logs.map(log => {
        return <li key={log.id}><LogCards key={log.id} log={log}/></li>
        }) : <p>No Challenge</p>

    return (
        <div className="challenge-show">
            <div className="challenge-show-header">
                <h1>{challenge ? challenge.attributes.name : `No Challenge`}</h1>
                <h3>{challengeOwner}</h3>
                <h1>{challengeRanking}</h1>
            </div>
            <div className="challenge-show-details">
                <h1>Details</h1>
                <ul>
                    {challengeCard}
                </ul>
            </div>
            <div className="challenge-show-diary-logs">
                <h1>Diary Logs</h1>
                {logs}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        challenges: state.challenges
    }
}

export default connect(mapStateToProps)(ChallengeShow)
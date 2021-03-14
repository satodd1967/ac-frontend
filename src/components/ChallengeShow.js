import React from 'react';
import { connect } from 'react-redux';
import ChallengeCard from './ChallengeCard';
import LogCards from './LogCards'
import { Link } from 'react-router-dom';

const ChallengeShow = (props) => {

    const challenge = props.challenges.find(challenge => {
        return challenge.id === props.challengeId
    })

    const challengeCard = challenge ? <ChallengeCard key={challenge.id} challenge={challenge}/> : <p>No Challenge</p>

    // const logs = challenge.attributes.logs.map(log => {
    //     return <li key={log.id}><YourLogCards key={log.id} log={log}/></li>
    //     })

    return (
        <div className="challenge-show">
            {challengeCard}
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
import React from 'react';
import { connect } from 'react-redux';
import ChallengeCard from '../components/ChallengeCard';
import ChallengeOwner from '../components/ChallengeOwners';
import ChallengeEditButton from '../components/ChallengeEditButton';
import GoalsViewButton from '../components/GoalsViewButton';
import ChallengeRanking from './ChallengeRanking';
import LogCards from '../components/LogCards'

const ChallengeShow = (props) => {

    const challenge = props.challenges.find(challenge => {
        return challenge.id === props.challengeId
    })

    const currentUserChallengeGoal = challenge.attributes.challenge_goals.find(challengeGoal => {
        return challengeGoal.user_id === props.user.id
    }) 

    const editButton = challenge && challenge.attributes.user_id === props.user.id ? 
        <ChallengeEditButton challengeId={challenge.id}/> : ""
    
    const viewGoals = challenge && challenge.attributes.user_id === props.user.id ?
        <GoalsViewButton challengeId={challenge.id} currentUserCGId={currentUserChallengeGoal.id}/> : ""

    const challengeOwner = challenge ? <ChallengeOwner challenge={challenge}/> : <p>No Challenge</p>

    const challengeCard = challenge ? <ChallengeCard challenge={challenge}/> : <p>No Challenge</p>

    const challengeRanking = challenge ? <ChallengeRanking challenge={challenge} type={"full"}/> : <p>No Challenge</p>

    const logs = challenge ? challenge.attributes.logs.map(log => {
        return <li key={log.id}><LogCards key={log.id} log={log} userId={props.user.id}/></li>
        }) : <p>No Challenge</p>

    return (
        <div className="challenge-show">
            <div className="challenge-show-header">
                <h1>{challenge ? challenge.attributes.name : `No Challenge`}</h1>
                <h3>{challengeOwner}</h3>
                {editButton}
                {viewGoals}
                <h3>Ranking</h3>
                <h3>{challengeRanking}</h3>
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
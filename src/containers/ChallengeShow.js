import React from 'react';
import { connect } from 'react-redux';
import ChallengeCard from '../components/ChallengeCard';
import ChallengeLogsViewButton from '../components/ChallengeLogsViewButton';
import ChallengeOwner from '../components/ChallengeOwners';
import ChallengeEditButton from '../components/EditButton';
import GoalsViewButton from '../components/GoalsViewButton';
import ChallengeRanking from './ChallengeRanking';
import LogCards from '../components/LogCards'

const ChallengeShow = ({ challenges, user, challengeId, users }) => {

    const challenge = challenges.find(challenge => {
        return challenge.id === challengeId
    })

    const currentUserChallengeGoal = challenge ? challenge.attributes.challenge_goals.find(challengeGoal => {
        return challengeGoal.user_id === user.id
    }) : "null"

    const editButton = challenge && challenge.attributes.user_id === user.id ? 
        <ChallengeEditButton value="Edit Challenge" url="challenges" editId={challenge.id}/> : ""
    
    const viewGoals = challenge && challenge.attributes.user_id === user.id ?
        <GoalsViewButton challengeId={challenge.id} currentUserCGId={currentUserChallengeGoal.id}/> : ""

    const viewLogs = challenge ? <ChallengeLogsViewButton challengeId={challenge.id}/> : ""

    const challengeOwner = challenge ? <ChallengeOwner challenge={challenge}/> : ""

    const challengeCard = challenge ? <ChallengeCard challenge={challenge}/> : ""

    const challengeRanking = challenge ? <ChallengeRanking challenge={challenge} type={"full"}/> : ""

    const logs = challenge ? challenge.attributes.logs.map(log => {
        const logUser = users.find(user => {
           return user.attributes.id === log.user_id
        })
        return <ul key={`${logUser.attributes.username}-${log.id}`}>
                    <li key={logUser.attributes.username}>{logUser.attributes.username}</li>
                    <LogCards key={log.id} log={log} currentUserId={user.id}/>
                </ul>
        }) : ""

    return (
        <div className="challenge-show">
            <div className="challenge-show-header">
                <h2>{challenge ? challenge.attributes.name : ""}</h2>
                <h3>{challengeOwner}</h3>
                {editButton}
                {viewGoals}
                {viewLogs}
                <h3>Ranking</h3>
                <h5>{challengeRanking}</h5>
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
        user: state.mainState.user,
        challenges: state.mainState.challenges,
        users: state.mainState.users,
        logs: state.mainState.logs
    }
}

export default connect(mapStateToProps)(ChallengeShow)
import React from 'react';
import { connect } from 'react-redux';
import LogCards from '../components/LogCards'
import { Link } from 'react-router-dom';

const ChallengeLogs = ({ challenges, user, match, users }) => {

    const challenge = challenges.find(challenge => {
        return challenge.id === match.params.id
    })

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
                <h4>{challenge ? <Link to={`/challenges/${challenge.id}`}>x</Link> : ""}</h4>
                <h1>Logs</h1>
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

export default connect(mapStateToProps)(ChallengeLogs)
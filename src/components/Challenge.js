import React from 'react';
import { connect } from 'react-redux';
import YourLogCards from './LogCards'
import { Link } from 'react-router-dom';

const Challenge = (props) => {

    const challenge = props.challenges.find(challenge => {
        return challenge.id === props.match.params.id
    })

    const logs = challenge.attributes.logs.map(log => {
        return <li key={log.id}><YourLogCards key={log.id} log={log}/></li>
        })

    return (
        <div className="challenge-show">
            <h1>{challenge.attributes.name}</h1>
            <h3>Challenge Owner: {challenge.attributes.user.username}</h3> 
            <h3>Start Date: {challenge.attributes.start_date}</h3>
            <h3>End Date: {challenge.attributes.end_date}</h3>
            <h2>Ranking:</h2>
            <h3>Details:</h3>
            <div>
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

export default connect(mapStateToProps)(Challenge)
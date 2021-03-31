import React from 'react';
import { resetChallengeGoalForm } from '../actions/challengeGoalForm';
import { connect } from 'react-redux';

const DontJoinButton = ({ history, resetChallengeGoalForm }) => {

    const handleSubmit = event => {
        event.preventDefault()
        resetChallengeGoalForm()
        history.push('/home')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Don't Join"/>
        </form>
    )
}

export default connect(null, { resetChallengeGoalForm })(DontJoinButton)

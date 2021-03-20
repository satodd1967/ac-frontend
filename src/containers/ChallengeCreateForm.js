import React from 'react'
import ChallengeForm from '../components/ChallengeForm';
import { sendChallenge } from '../actions/challenges'
import { connect } from 'react-redux'

const CreateChallenge = ({ sendChallenge, history, user}) => {

    const handleSubmit = (challengeFormData, user) => {
        sendChallenge(challengeFormData, history, user)
    }
    return  <div>
                <h1>Start a new Challenge</h1>
                <ChallengeForm history={history} handleSubmit={handleSubmit} />
            </div>
}

export default connect(null, { sendChallenge } )(CreateChallenge)
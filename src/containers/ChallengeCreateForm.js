import React from 'react'
import ChallengeForm from '../components/ChallengeForm';
import { sendChallenge } from '../actions/challenges'
import { connect } from 'react-redux'

const CreateChallenge = ({ sendChallenge, history, match }) => {

    const handleSubmit = (challengeFormData, user) => {
        sendChallenge(challengeFormData, history, user)
    }
    return  <div>
                <h2>Start a new Challenge</h2>
                <ChallengeForm history={history} handleSubmit={handleSubmit} />
                <br/>
                <br/>
            </div>
}

export default connect(null, { sendChallenge } )(CreateChallenge)
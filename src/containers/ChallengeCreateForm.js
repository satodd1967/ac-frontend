import React from 'react'
import ChallengeForm from '../components/ChallengeForm';
import { sendChallenge } from '../actions/challenges'
import { connect } from 'react-redux'

const CreateChallengeWrapper = ({ sendChallenge, history, user}) => {

    const handleSubmit = (challengeFormData, user) => {
        sendChallenge(challengeFormData, history, user)
    }
    return  <ChallengeForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { sendChallenge } )(CreateChallengeWrapper)
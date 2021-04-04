import React from 'react';
import ChallengeForm from '../components/ChallengeForm';
import { sendChallenge } from '../actions/challenges';
import { validateChallenge } from '../actions/clientErrors';
import { connect } from 'react-redux';

const CreateChallenge = ({ sendChallenge, history, validateChallenge }) => {

    const handleSubmit = async (challengeFormData, user) => {
        const isValid = await validateChallenge(challengeFormData)
        if (Object.keys(isValid.invalid).length === 0) {
            sendChallenge(challengeFormData, history, user)
        }
    }
    return  <div className="start-new-challenge">
                <h2>Start a new Challenge</h2>
                <ChallengeForm history={history} handleSubmit={handleSubmit} />
                <br/>
                <br/>
            </div>
};

export default connect(null, { sendChallenge, validateChallenge } )(CreateChallenge)
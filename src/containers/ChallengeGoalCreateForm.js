import React from 'react'
import ChallengeGoalForm from '../components/ChallengeGoalForm';
import DontJoinChallengeButton from '../components/DontJoinChallengeButton';
import { validateChallengeGoal } from '../actions/clientErrors';
import { sendChallengeGoal } from '../actions/challengeGoals'
import { connect } from 'react-redux'

const CreateChallengeGoal = ({ sendChallengeGoal, history, match, validateChallengeGoal }) => {

    const challengeId = match.params.id

    const handleSubmit = async (challengeGoalFormData, user) => {
        const isValid = await validateChallengeGoal(challengeGoalFormData)
        if (Object.keys(isValid.invalid).length === 0) {
            sendChallengeGoal(challengeGoalFormData, history, user, challengeId)
        }
    }

    return  <div>
                <h2>Join This Challenge</h2>
                <ChallengeGoalForm challengeId={challengeId} history={history} handleSubmit={handleSubmit} />
                <DontJoinChallengeButton history={history}/>
            </div>
}

export default connect(null, { sendChallengeGoal, validateChallengeGoal } )(CreateChallengeGoal)
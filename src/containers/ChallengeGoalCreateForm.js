import React from 'react'
import ChallengeGoalForm from '../components/ChallengeGoalForm';
import { sendChallengeGoal } from '../actions/challengeGoals'
import { connect } from 'react-redux'

const CreateChallengeGoal = ({ sendChallengeGoal, history, match }) => {

    const challengeId = match.params.id

    const handleSubmit = (challengeGoalFormData, user) => {
        sendChallengeGoal(challengeGoalFormData, history, user, challengeId)
    }
    return  <div>
                <h2>Join This Challenge</h2>
                <ChallengeGoalForm history={history} handleSubmit={handleSubmit} />
            </div>
}

export default connect(null, { sendChallengeGoal } )(CreateChallengeGoal)
import React from 'react'
import ChallengeGoalForm from '../components/ChallengeGoalForm';
import { sendChallengeGoal } from '../actions/challengeGoals'
import { connect } from 'react-redux'

const CreateChallengeGoal = ({ sendChallengeGoal, history, match }) => {

    const handleSubmit = (challengeGoalFormData, user) => {
        sendChallengeGoal(challengeGoalFormData, history, user, match)
    }
    return  <div>
                <h1>Start a new Challenge</h1>
                <ChallengeGoalForm history={history} handleSubmit={handleSubmit} />
            </div>
}

export default connect(null, { sendChallengeGoal } )(CreateChallengeGoal)
import React from 'react'
import ChallengeGoalForm from '../components/ChallengeGoalForm';
import { sendChallengeGoal } from '../actions/challengeGoals'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const CreateChallengeGoal = ({ sendChallengeGoal, history, match }) => {

    const challengeId = match.params.id

    const handleSubmit = (challengeGoalFormData, user) => {
        sendChallengeGoal(challengeGoalFormData, history, user, challengeId)
    }
    return  <div>
                <h2>Join This Challenge</h2>
                <ChallengeGoalForm challengeId={challengeId} history={history} handleSubmit={handleSubmit} />
                <Link to={{ 
                    pathname: "/", 
                }}>
                    <button type="button">
                        Don't Join
                    </button>
                </Link>
            </div>
}

export default connect(null, { sendChallengeGoal } )(CreateChallengeGoal)
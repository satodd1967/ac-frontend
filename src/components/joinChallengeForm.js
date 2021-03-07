import React from 'react'
import { connect } from 'react-redux'
import { updateJoinChallengeForm } from "../actions/joinChallengeForm"
import { sendChallengeGoal } from "../actions/challengeGoals"

const JoinChallenge = ({ joinChallengeFormData, updateJoinChallengeForm, sendChallengeGoal, history, match, user}) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...joinChallengeFormData,
            [name]: value
        }
        updateJoinChallengeForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        sendChallengeGoal(joinChallengeFormData, history, user, match)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="start body fat"
                value={joinChallengeFormData.startBodyFat}
                name="startBodyFat"
                type="text"
                onChange={handleChange}/>
            <input placeholder="start calorie goal"
                value={joinChallengeFormData.startCalorieGoal}
                name="startCalorieGoal"
                type="text"
                onChange={handleChange}/>
            <input placeholder="start weight"
                value={joinChallengeFormData.startWeight}
                name="startWeight"
                type="text"
                onChange={handleChange}/>
              
            <input type="submit" value="Join Challenge"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        joinChallengeFormData: state.joinChallengeForm
    }
}

export default connect(mapStateToProps, { updateJoinChallengeForm, sendChallengeGoal } )(JoinChallenge)
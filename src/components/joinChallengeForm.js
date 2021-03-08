import React from 'react'
import { connect } from 'react-redux'
import { updateJoinChallengeForm } from "../actions/joinChallengeForm"
import { sendChallengeGoal } from "../actions/challengeGoals"

const JoinChallenge = ({ joinChallengeFormData, updateJoinChallengeForm, sendChallengeGoal, history, match, user, lastChallenge}) => {

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

    const fixChallengeName = input => {
        if (input) {
            return input.name
        } else {
            return null
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Join This Challenge</h2>
            <h3>{user.username} Setup Your Challenge Goals for {fixChallengeName(lastChallenge)} </h3>
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
        joinChallengeFormData: state.joinChallengeForm,
        lastChallenge: state.challenges[state.challenges.length -1]
    }
}

export default connect(mapStateToProps, { updateJoinChallengeForm, sendChallengeGoal } )(JoinChallenge)
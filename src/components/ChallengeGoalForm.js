import React from 'react';
import ErrorCard from './ErrorCard';
import { connect } from 'react-redux';
import { updateChallengeGoalForm } from "../actions/challengeGoalForm";
import { sendChallengeGoal } from "../actions/challengeGoals";
import { clearErrors } from '../actions/errors';

const ChallengeGoalForm = ({ challengeGoalFormData, updateChallengeGoalForm, handleSubmit, user, lastChallenge, errors, clearErrors }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...challengeGoalFormData,
            [name]: value
        }
        clearErrors()
        updateChallengeGoalForm(updatedFormInfo)
    }

    const fixChallengeName = input => {
        if (input) {
            return input.name
        } else {
            return null
        }
    };

    const formErrors = errors.map(error => {
        return <li><ErrorCard key={error} error={error}/></li>
    }) 

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(challengeGoalFormData, user)
            }}>
            <ul>
                {formErrors}
            </ul>
            <h3>{user.username} Setup Your Challenge Goals for {fixChallengeName(lastChallenge)} </h3>
            <input placeholder="start body fat"
                value={challengeGoalFormData.startBodyFat}
                name="startBodyFat"
                type="text"
                onChange={handleChange}/>
            <input placeholder="start calorie goal"
                value={challengeGoalFormData.startCalorieGoal}
                name="startCalorieGoal"
                type="text"
                onChange={handleChange}/>
            <input placeholder="start weight"
                value={challengeGoalFormData.startWeight}
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
        challengeGoalFormData: state.challengeGoalForm,
        lastChallenge: state.challenges[state.challenges.length -1],
        errors: state.errors
    }
}

export default connect(mapStateToProps, { updateChallengeGoalForm, sendChallengeGoal, clearErrors } )(ChallengeGoalForm)
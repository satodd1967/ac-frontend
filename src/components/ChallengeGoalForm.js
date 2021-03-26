import React from 'react';
import ErrorCard from './ErrorCard';
import { connect } from 'react-redux';
import { updateChallengeGoalForm } from "../actions/challengeGoalForm";
import { sendChallengeGoal } from "../actions/challengeGoals";
import { clearErrors } from '../actions/errors';

const ChallengeGoalForm = ({ challengeGoalFormData, updateChallengeGoalForm, handleSubmit, user, lastChallenge, errors, clearErrors, editMode }) => {

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

    const formErrors = Array.isArray(errors) ? errors.map(error => {
        return <li><ErrorCard key={error} error={error}/></li>
    }) : <ErrorCard key={errors} error={errors}/>

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
              
            <input type="submit" value={ editMode ? "Update Goals" : "Join Challenge" }/>
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
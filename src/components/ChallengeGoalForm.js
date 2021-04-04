import React from 'react';
import ErrorCard from './ErrorCard';
import { connect } from 'react-redux';
import { updateChallengeGoalForm } from "../actions/challengeGoalForm";
import { updatedFormData } from '../actions/services/updateFormData';
import { clearClientErrors } from '../actions/clientErrors';
import ClientErrorsCard from '../components/ClientErrorsCard';
import { sendChallengeGoal } from "../actions/challengeGoals";
import { clearErrors } from '../actions/errors';

const ChallengeGoalForm = ({ formData, updateChallengeGoalForm, handleSubmit, user, challenges, challengeId, errors, clearErrors, editMode, clearClientErrors, clientErrors }) => {

    const challenge = challenges.find(challenge => {
        return challenge.id === challengeId
    })

    const handleChange = event => {
        const updatedFormInfo = updatedFormData(event, formData)
        clearErrors()
        clearClientErrors()
        updateChallengeGoalForm(updatedFormInfo)
    }

    const formErrors = Array.isArray(errors) ? errors.map(error => {
        return <li key={error}><ErrorCard error={error}/></li>
    }) : <ErrorCard key={errors} error={errors}/>

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData, user)
            }}>
            <ul>
                {formErrors}
            </ul>
            <h3>{user.username} Setup Your Challenge Goals for {challenge ? challenge.attributes.name : ""} </h3>
            Start Body Fat:
            <input placeholder="start body fat"
                value={formData.startBodyFat}
                name="startBodyFat"
                type="text"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.startBodyFat}/> 
            Start Calorie Goal:
            <input placeholder="start calorie goal"
                value={formData.startCalorieGoal}
                name="startCalorieGoal"
                type="text"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.startCalorieGoal}/>
            Start Weight:
            <input placeholder="start weight"
                value={formData.startWeight}
                name="startWeight"
                type="text"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.startWeight}/>
            <input type="submit" value={ editMode ? "Update Goals" : "Join Challenge" }/>

        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.mainState.user,
        formData: state.challengeGoalForm,
        challenges: state.mainState.challenges,
        errors: state.errors,
        clientErrors: state.clientErrors
    }
}

export default connect(mapStateToProps, { updateChallengeGoalForm, sendChallengeGoal, clearErrors, clearClientErrors, updatedFormData } )(ChallengeGoalForm)
import React from 'react';
import ErrorCard from './ErrorCard';
import { updateChallengeForm } from '../actions/challengeForm';
import { updatedFormData } from '../actions/services/updateFormData';
import { clearClientErrors } from '../actions/clientErrors';
import ClientErrorsCard from '../components/ClientErrorsCard';
import { connect } from 'react-redux';
import { clearErrors } from '../actions/errors';

const ChallengeForm = ({ formData, updateChallengeForm, handleSubmit, user, editMode, errors, clearErrors, clearClientErrors, clientErrors }) => {

    const handleChange = event => {
        const updatedFormInfo = updatedFormData(event, formData)
        clearErrors()
        clearClientErrors()
        updateChallengeForm(updatedFormInfo)
    }

    const formErrors = Array.isArray(errors) ? errors.map(error => {
        return <li key={error}><ErrorCard error={error}/></li>
    }) : <ErrorCard key={errors} error={errors}/>

    return (
        <form className="challenge-form" onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData, user, clientErrors)
            }}>
            <ul>
                {formErrors}
            </ul>
            <br/>
            Name:
            <input placeholder="name"
                value={formData.name}
                name="name"
                type="text"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.name}/> 
            Description:
            <input placeholder="description"
                value={formData.description}
                name="description"
                type="text"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.description}/> 
            Start Date:
            <input placeholder="start date"
                value={formData.startDate}
                name="startDate"
                type="date"
                onChange={handleChange}/>
                <ClientErrorsCard error={clientErrors.startDate}/> 
            Duration:
             <input placeholder="duration in number of weeks"
                value={formData.duration}
                name="duration"
                type="text"
                onChange={handleChange}/>
            Active Calorie Goal:
            <input placeholder="active calorie goal"
                value={formData.activeCalorieGoal}
                name="activeCalorieGoal"
                type="text"
                onChange={handleChange}/>
            Points Worked Out:
            <input placeholder="points worked out"
                value={formData.pointsWorkedOut}
                name="pointsWorkedOut"
                type="text"
                onChange={handleChange}/>
            Points Tracked Food:
            <input placeholder="points tracked food"
                value={formData.pointsTrackedFood}
                name="pointsTrackedFood"
                type="text"
                onChange={handleChange}/>
            Points Met Calorie Goal:
            <input placeholder="points met calorie goal"
                value={formData.pointsMetCalorieGoal}
                name="pointsMetCalorieGoal"
                type="text"
                onChange={handleChange}/>
            Points Maintain Weight:
            <input placeholder="points maintain weight"
                value={formData.pointsMaintainWeight}
                name="pointsMaintainWeight"
                type="text"
                onChange={handleChange}/>
            Points Maintain Body Fat:
            <input placeholder="points maintain body fat"
                value={formData.pointsMaintainBodyFat}
                name="pointsMaintainBodyFat"
                type="text"
                onChange={handleChange}/>
            Points Met Active Calorie Goal:
            <input placeholder="points met active calorie goal"
                value={formData.pointsMetActiveCalorieGoal}
                name="pointsMetActiveCalorieGoal"
                type="text"
                onChange={handleChange}/>  
            <input type="submit" value={ editMode ? "Update Challenge" : "Create Challenge" }/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.mainState.user,
        formData: state.challengeForm,
        errors: state.errors,
        clientErrors: state.clientErrors
    }
}

export default connect(mapStateToProps, { updateChallengeForm, clearErrors, updatedFormData, clearClientErrors } )(ChallengeForm)
import React from 'react';
import ErrorCard from './ErrorCard';
import { updateChallengeForm } from '../actions/challengeForm';
import { connect } from 'react-redux';
import { clearErrors } from '../actions/errors';

const ChallengeForm = ({ challengeFormData, updateChallengeForm, handleSubmit, user, editMode, errors, clearErrors }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...challengeFormData,
            [name]: value
        }
        clearErrors()
        updateChallengeForm(updatedFormInfo)
    }

    const formErrors = Array.isArray(errors) ? errors.map(error => {
        return <li key={error}><ErrorCard error={error}/></li>
    }) : <ErrorCard key={errors} error={errors}/>

    return (
        <form className="challenge-form" onSubmit={event => {
            event.preventDefault()
            handleSubmit(challengeFormData, user)
            }}>
            <ul>
                {formErrors}
            </ul>
            Name:
            <input placeholder="name"
                value={challengeFormData.name}
                name="name"
                type="text"
                onChange={handleChange}/>
            Description:
            <input placeholder="description"
                value={challengeFormData.description}
                name="description"
                type="text"
                onChange={handleChange}/>
            Start Date:
            <input placeholder="start date"
                value={challengeFormData.startDate}
                name="startDate"
                type="date"
                onChange={handleChange}/>
            Duration:
             <input placeholder="duration in number of weeks"
                value={challengeFormData.duration}
                name="duration"
                type="text"
                onChange={handleChange}/>
            Active Calorie Goal:
            <input placeholder="active calorie goal"
                value={challengeFormData.activeCalorieGoal}
                name="activeCalorieGoal"
                type="text"
                onChange={handleChange}/>
            Points Worked Out:
            <input placeholder="points worked out"
                value={challengeFormData.pointsWorkedOut}
                name="pointsWorkedOut"
                type="text"
                onChange={handleChange}/>
            Points Tracked Food:
            <input placeholder="points tracked food"
                value={challengeFormData.pointsTrackedFood}
                name="pointsTrackedFood"
                type="text"
                onChange={handleChange}/>
            Points Met Calorie Goal:
            <input placeholder="points met calorie goal"
                value={challengeFormData.pointsMetCalorieGoal}
                name="pointsMetCalorieGoal"
                type="text"
                onChange={handleChange}/>
            Points Maintain Weight:
            <input placeholder="points maintain weight"
                value={challengeFormData.pointsMaintainWeight}
                name="pointsMaintainWeight"
                type="text"
                onChange={handleChange}/>
            Points Maintain Body Fat:
            <input placeholder="points maintain body fat"
                value={challengeFormData.pointsMaintainBodyFat}
                name="pointsMaintainBodyFat"
                type="text"
                onChange={handleChange}/>
            Points Met Active Calorie Goal:
            <input placeholder="points met active calorie goal"
                value={challengeFormData.pointsMetActiveCalorieGoal}
                name="pointsMetActiveCalorieGoal"
                type="text"
                onChange={handleChange}/>  
            <input type="submit" value={ editMode ? "Update Challenge" : "Create Challenge" }/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        challengeFormData: state.challengeForm,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { updateChallengeForm, clearErrors } )(ChallengeForm)
import React from 'react';
import { updateChallengeForm } from '../actions/challengeForm';
import { connect } from 'react-redux';

const ChallengeForm = ({ challengeFormData, updateChallengeForm, handleSubmit, user }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...challengeFormData,
            [name]: value
        }
        updateChallengeForm(updatedFormInfo)
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(challengeFormData, user)
            }}>
            <input placeholder="name"
                value={challengeFormData.name}
                name="name"
                type="text"
                onChange={handleChange}/>
            <input placeholder="description"
                value={challengeFormData.description}
                name="description"
                type="text"
                onChange={handleChange}/>
            <input placeholder="start date"
                value={challengeFormData.startDate}
                name="startDate"
                type="date"
                onChange={handleChange}/>
             <input placeholder="duration in number of weeks"
                value={challengeFormData.duration}
                name="duration"
                type="text"
                onChange={handleChange}/>
            <input placeholder="active calorie goal"
                value={challengeFormData.activeCalorieGoal}
                name="activeCalorieGoal"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points worked out"
                value={challengeFormData.pointsWorkedOut}
                name="pointsWorkedOut"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points tracked food"
                value={challengeFormData.pointsTrackedFood}
                name="pointsTrackedFood"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points met calorie goal"
                value={challengeFormData.pointsMetCalorieGoal}
                name="pointsMetCalorieGoal"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points maintain weight"
                value={challengeFormData.pointsMaintainWeight}
                name="pointsMaintainWeight"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points maintain body fat"
                value={challengeFormData.pointsMaintainBodyFat}
                name="pointsMaintainBodyFat"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points met active calorie goal"
                value={challengeFormData.pointsMetActiveCalorieGoal}
                name="pointsMetActiveCalorieGoal"
                type="text"
                onChange={handleChange}/>  
            <input type="submit" value="Create Challenge"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        challengeFormData: state.challengeForm
    }
}

export default connect(mapStateToProps, { updateChallengeForm } )(ChallengeForm)
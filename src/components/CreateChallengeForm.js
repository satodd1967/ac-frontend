import React from 'react'
import { updateChallengeForm } from '../actions/createChallengeForm'
import { sendChallenge } from '../actions/challenges'
import { connect } from 'react-redux'

const CreateChallenge = ({ challengeFormData, updateChallengeForm, sendChallenge, history, user}) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...challengeFormData,
            [name]: value
        }
        console.log(updatedFormInfo)
        updateChallengeForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        sendChallenge(challengeFormData, history, user)
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <input placeholder="start data"
                value={challengeFormData.startDate}
                name="startDate"
                type="text"
                onChange={handleChange}/>
             <input placeholder="duration"
                value={challengeFormData.duration}
                name="duration"
                type="text"
                onChange={handleChange}/>
            <input placeholder="end data"
                value={challengeFormData.startDate}
                name="endData"
                type="text"
                onChange={handleChange}/>
            <input placeholder="active calorie goal"
                value={challengeFormData.startDate}
                name="activeCalorieGoal"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points worked out"
                value={challengeFormData.startDate}
                name="pointsWorkedOut"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points tracked food"
                value={challengeFormData.startDate}
                name="pointsTrackedFood"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points met calorie goal"
                value={challengeFormData.startDate}
                name="pointsMetCalorieGoal"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points maintain weight"
                value={challengeFormData.startDate}
                name="pointsMaintainWeight"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points maintain body fat"
                value={challengeFormData.startDate}
                name="pointsMaintainBodyFat"
                type="text"
                onChange={handleChange}/>
            <input placeholder="points met active calorie goal"
                value={challengeFormData.startDate}
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

export default connect(mapStateToProps, { updateChallengeForm, sendChallenge } )(CreateChallenge)
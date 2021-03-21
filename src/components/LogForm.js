import React from 'react'
import { updateLogForm } from '../actions/logForm'
import { connect } from 'react-redux'

const LogForm = ({ logFormData, updateLogForm, handleSubmit, user, editMode }) => {

    const handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const updatedFormInfo = {
            ...logFormData,
            [name]: value
        }
        updateLogForm(updatedFormInfo)
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(logFormData, user)
            }}>
            Log Date:
            <input
                value={logFormData.logDate}
                name="logDate"
                type="date"
                onChange={handleChange}/>
            Worked Out?
            <input id="workedOut"
                value={logFormData.workedOut}
                name="workedOut"
                type="checkbox"
                onChange={handleChange}/>
            Tracked Food?
            <input id="trackedFood"
                value={logFormData.trackedFood}
                name="trackedFood"
                type="checkbox"
                onChange={handleChange}/>
            Weight:
             <input placeholder="weight"
                value={logFormData.weight}
                name="weight"
                type="text"
                onChange={handleChange}/>
            Body Fat%:
            <input placeholder="body fat %"
                value={logFormData.bodyFat}
                name="bodyFat"
                type="text"
                onChange={handleChange}/>
            Active Calories:
            <input placeholder="active calories"
                value={logFormData.activeCalories}
                name="activeCalories"
                type="text"
                onChange={handleChange}/>
            Calories:
            <input placeholder="calories"
                value={logFormData.calories}
                name="calories"
                type="text"
                onChange={handleChange}/>
            <input type="submit" value={ editMode ? "Update Log" : "Create Log" }/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        logFormData: state.logForm
    }
}

export default connect(mapStateToProps, { updateLogForm } )(LogForm)
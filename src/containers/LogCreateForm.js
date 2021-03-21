import React from 'react'
import { updateLogForm } from '../actions/createLogForm'
import { sendLog } from '../actions/logs'
import { connect } from 'react-redux'

const CreateLog = ({ logFormData, updateLogForm, sendLog, history, user}) => {

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

    const handleSubmit = event => {
        event.preventDefault()
        sendLog(logFormData, history, user)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create a New Log</h1>
            Log Date
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
             <input placeholder="weight"
                value={logFormData.weight}
                name="weight"
                type="text"
                onChange={handleChange}/>
            <input placeholder="body fat %"
                value={logFormData.bodyFat}
                name="bodyFat"
                type="text"
                onChange={handleChange}/>
            <input placeholder="active calories"
                value={logFormData.activeCalories}
                name="activeCalories"
                type="text"
                onChange={handleChange}/>
            <input placeholder="calories"
                value={logFormData.calories}
                name="calories"
                type="text"
                onChange={handleChange}/>
            <input type="submit" value="Create Log"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        logFormData: state.logForm
    }
}

export default connect(mapStateToProps, { updateLogForm, sendLog } )(CreateLog)
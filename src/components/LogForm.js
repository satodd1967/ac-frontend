import React from 'react'
import ErrorCard from './ErrorCard';
import { updateLogForm } from '../actions/logForm'
import { connect } from 'react-redux'
import { clearErrors } from '../actions/errors';

const LogForm = ({ logFormData, updateLogForm, handleSubmit, user, editMode, clearErrors, errors }) => {

    const handleChange = event => {
        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const updatedFormInfo = {
            ...logFormData,
            [name]: value
        }
        clearErrors()
        updateLogForm(updatedFormInfo)
    }

    const formErrors = Array.isArray(errors) ? errors.map(error => {
        return <li><ErrorCard key={error} error={error}/></li>
    }) : <ErrorCard key={errors} error={errors}/>

    return (
        <form className="log-form" onSubmit={event => {
            event.preventDefault()
            handleSubmit(logFormData, user)
            }}>
            <ul>
                {formErrors}
            </ul>
            Log Date:
            <input
                value={logFormData.logDate}
                name="logDate"
                type="date"
                onChange={handleChange}/>
            Worked Out?
            <input id="workedOut"
                // value={logFormData.workedOut}
                name="workedOut"
                type="checkbox"
                checked={logFormData.workedOut}
                onChange={handleChange}/>
            Tracked Food?
            <input id="trackedFood"
                // value={logFormData.trackedFood}
                name="trackedFood"
                type="checkbox"
                checked={logFormData.trackedFood}
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
        logFormData: state.logForm,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { updateLogForm, clearErrors } )(LogForm)
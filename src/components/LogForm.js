import React from 'react'
import ErrorCard from './ErrorCard';
import { updateLogForm } from '../actions/logForm'
import { clearClientErrors } from '../actions/clientErrors';
import ClientErrorsCard from '../components/ClientErrorsCard';
import { connect } from 'react-redux'
import { clearErrors } from '../actions/errors';

const LogForm = ({ logFormData, updateLogForm, handleSubmit, user, editMode, clearErrors, clearClientErrors, clientErrors, errors }) => {

    const handleChange = event => {
        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const updatedFormInfo = {
            ...logFormData,
            [name]: value
        }
        clearErrors()
        clearClientErrors()
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
            <br/>
            <ul>
                {formErrors}
            </ul>

            Log Date:
            <input
                value={logFormData.logDate}
                name="logDate"
                type="date"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.logDate}/>
            Worked Out?
            <input id="workedOut"
                // value={logFormData.workedOut}
                name="workedOut"
                type="checkbox"
                checked={logFormData.workedOut}
                onChange={handleChange}/>
            <br/>
            Tracked Food?
            <input id="trackedFood"
                // value={logFormData.trackedFood}
                name="trackedFood"
                type="checkbox"
                checked={logFormData.trackedFood}
                onChange={handleChange}/>
            <br/>
            <br/>
            Weight:
             <input placeholder="weight"
                value={logFormData.weight}
                name="weight"
                type="text"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.weight}/>
            Body Fat%:
            <input placeholder="body fat %"
                value={logFormData.bodyFat}
                name="bodyFat"
                type="text"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.bodyFat}/>
            Active Calories:
            <input placeholder="active calories"
                value={logFormData.activeCalories}
                name="activeCalories"
                type="text"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.activeCalories}/>
            Calories:
            <input placeholder="calories"
                value={logFormData.calories}
                name="calories"
                type="text"
                onChange={handleChange}/>
            <ClientErrorsCard error={clientErrors.calories}/>
            <input type="submit" value={ editMode ? "Update Log" : "Create Log" }/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.mainState.user,
        logFormData: state.logForm,
        errors: state.errors,
        clientErrors: state.clientErrors
    }
}

export default connect(mapStateToProps, { updateLogForm, clearErrors, clearClientErrors } )(LogForm)
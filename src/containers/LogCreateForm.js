import React from 'react'
import LogForm from '../components/LogForm';
import { sendLog } from '../actions/logs'
import { validateLog } from '../actions/clientErrors';
import { connect } from 'react-redux'
import { sendChallenge } from '../actions/challenges';

const CreateLog = ({ sendLog, history, validateLog }) => {

    const handleSubmit = async (logFormData, user) => {
        const isValid = await validateLog(logFormData, "create")
        if (Object.keys(isValid.invalid).length === 0) {
            sendLog(logFormData, history, user)
        }
    }
    return  <div className="create-log-form">
                <h2>Create a new Log</h2>
                <LogForm history={history} handleSubmit={handleSubmit} />
            </div>
}

export default connect(null, { sendLog, validateLog } )(CreateLog)
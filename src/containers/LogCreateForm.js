import React from 'react'
import LogForm from '../components/LogForm';
import { sendLog } from '../actions/logs'
import { connect } from 'react-redux'

const CreateLog = ({ sendLog, history }) => {

    const handleSubmit = (logFormData, user) => {
        sendLog(logFormData, history, user)
    }
    return  <div>
                <h1>Create a new Log</h1>
                <LogForm history={history} handleSubmit={handleSubmit} />
            </div>
}

export default connect(null, { sendLog } )(CreateLog)
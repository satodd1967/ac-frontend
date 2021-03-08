import React from 'react';
import LogCards from './YourLogCards'
import { connect } from 'react-redux';

const YourLogs = (props) => {

    const logs = props.logs.map(log => {
        return <li key={log.id}><LogCards key={log.id} log={log}/></li>
        })
    
    return (
        <div className="your-logs">
            <h3>Your Logs</h3>
            <ul>
            {logs}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        logs: state.currentUser.logs
    }
}

export default connect(mapStateToProps)(YourLogs)
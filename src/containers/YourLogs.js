import React from 'react';
import LogCards from '../components/LogCards'
import LogEditButton from '../components/LogEditButton';
import { connect } from 'react-redux';

const YourLogs = (props) => {

    const logs = props.logs.map(log => {
        const editButton = log && log.user_id === props.user.id ? 
            <LogEditButton logId={log.id}/> : ""
        return <ul key={`${log.user_id}-${log.id}`}>
                    <li key={log.id}><LogCards key={log.id} log={log} currentUserId={props.user.id}/></li>
                    {editButton}
                </ul>
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
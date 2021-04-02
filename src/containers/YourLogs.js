import React from 'react';
import LogCards from '../components/LogCards'
import EditButton from '../components/EditButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const YourLogs = (props) => {

    const logSort = props.logs ? props.logs.sort((a,b) => Date.parse(b.log_date) - Date.parse(a.log_date)) : null
    console.log("LogSort", logSort)

    

    const logs = logSort ? logSort.map(log => {
        const editButton = log && log.user_id === props.user.id ? 
            <EditButton value="Edit Log" url="logs"editId={log.id}/> : ""
        const challengeScores = log.log_scores.map(ls => {
            return <p key={ls.id}>{ls.challenge} - {ls.total_points}</p>
        })
        return <ul className="your-logs-log" key={`${log.user_id}-${log.id}`}>
                    <li key={log.id}><LogCards key={log.id} log={log} currentUserId={props.user.id}/></li>
                    {challengeScores}
                    {editButton}
                    <br/>
                    <br/>
                </ul>
    }) : ""

    const noLogs = logs.length > 0 ? 
        "" :<div className="no-logs"> 
                <ul>
                    <Link to="/logs/new">Create your first log!</Link>
                </ul>
            </div>
            
    return (
        <div className="your-logs">
            <h2>Your Logs</h2>
            <ul>
            {logs}
            {noLogs}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.mainState.user,
        logs: state.mainState.user.logs
    }
}

export default connect(mapStateToProps)(YourLogs)
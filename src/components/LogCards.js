import React from 'react';
import { Link } from 'react-router-dom';

const LogCards = (props) => {

    const fixBoolean = input => {
        if (input) {
            return "Yes" 
        } else {
            return "No"
        }
    };

    const logDate = props.log.user_id === props.currentUserId ? 
        <h4><Link to={`/logs/${props.log.id}`}>{props.log.log_date}</Link></h4> 
        : <h4>{props.log.log_date}</h4>

    return (
        <div className="your-log-cards">
            {logDate}
            <p>Worked Out: {fixBoolean(props.log.worked_out)}</p>
            <p>Tracked Food: {fixBoolean(props.log.tracked_food)}</p>
            <p>Weight: {props.log.weight}</p>
            <p>Active Calories: {props.log.active_calories}</p>
            <p>Calories: {props.log.calories}</p>
            <p>Body Fat %: {props.log.body_fat}</p>
        </div>
    )
}



export default LogCards
import React from 'react';

const LogCards = (props) => {

    const fixBoolean = input => {
        if (input) {
            return "Yes" 
        } else {
            return "No"
        }
    };

    return (
        <div className="your-log-cards">
            <h4>{props.log.log_date}</h4>
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
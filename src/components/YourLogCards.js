import React from 'react';
import { Link } from 'react-router-dom';

const YourLogCards = (props) => {

    const fixBoolean = input => {
        if (input) {
            return input.toString()
        } else {
            return null
        }
    };

    return (
        <div className="your-log-cards">
            <h4><Link to={`/logs/${props.log.id}`}>{props.log.log_date}</Link></h4>
            <p>Worked Out: {fixBoolean(props.log.worked_out)}</p>
            <p>Tracked Food: {fixBoolean(props.log.tracked_food)}</p>
            <p>Weight: {props.log.weight}</p>
            <p>Active Calories: {props.log.active_calories}</p>
            <p>Calories: {props.log.calories}</p>
            <p>Body Fat %: {props.log.body_fat}</p>
        </div>
    )
}

export default YourLogCards
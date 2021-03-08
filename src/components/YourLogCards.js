import React from 'react';
import { Link } from 'react-router-dom';

const YourLogCards = (props) => {
    console.log("Missing Log", props.log.worked_out)
    return (
        <div className="your-log-cards">
            <h4><Link to={`/logs/${props.log.id}`}>{props.log.log_date}</Link></h4>
            <p>Worked Out: {props.log.worked_out.toString()}</p>
            <p>Tracked Food: {props.log.tracked_food.toString()}</p>
            <p>Weight: {props.log.weight}</p>
            <p>Active Calories: {props.log.active_calories}</p>
            <p>Calories: {props.log.calories}</p>
            <p>Body Fat %: {props.log.body_fat}</p>
        </div>
    )
}

export default YourLogCards
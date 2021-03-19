import React from 'react';

const ChallengeCard = (props) => {

    return (
        <div className="challenge-cards">
            <li>Start Date: {props.challenge.attributes.start_date}</li>
            <li>End Date: {props.challenge.attributes.end_date}</li>
            <li>Duration: {props.challenge.attributes.duration}</li>
            <li>Description: {props.challenge.attributes.description}</li>
            <li>Active Calorie Goal: {props.challenge.attributes.active_calorie_goal}</li>
            <li>Points Worked Out: {props.challenge.attributes.points_worked_out}</li>
            <li>Points Tracked Food: {props.challenge.attributes.points_tracked_food}</li>
            <li>Points Met Calorie Goal: {props.challenge.attributes.points_met_calorie_goal}</li>
            <li>Points Maintain Weight: {props.challenge.attributes.points_maintain_weight}</li>
            <li>Points Maintain Body Fat: {props.challenge.attributes.points_maintain_body_fat}</li>
            <li>Points Met Active Calorie goal: {props.challenge.attributes.points_met_active_calorie_goal}</li>
        </div>
    )
}

export default ChallengeCard
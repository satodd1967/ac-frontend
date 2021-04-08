import React from 'react';

const ChallengeCard = ({ challenge }) => {
    
    return (
        <div className="challenge-cards">
            <li>Start Date: {challenge.attributes.start_date}</li>
            <li>End Date: {challenge.attributes.end_date}</li>
            <li>Duration in weeks: {challenge.attributes.duration}</li>
            <li>Description: {challenge.attributes.description}</li>
            <li>Active Calorie Goal: {challenge.attributes.active_calorie_goal}</li>
            <li>Points Worked Out: {challenge.attributes.points_worked_out}</li>
            <li>Points Tracked Food: {challenge.attributes.points_tracked_food}</li>
            <li>Points Met Calorie Goal: {challenge.attributes.points_met_calorie_goal}</li>
            <li>Points Maintain Weight: {challenge.attributes.points_maintain_weight}</li>
            <li>Points Maintain Body Fat: {challenge.attributes.points_maintain_body_fat}</li>
            <li>Points Met Active Calorie goal: {challenge.attributes.points_met_active_calorie_goal}</li>
        </div>
    )
}

export default ChallengeCard
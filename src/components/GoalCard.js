import React from 'react';

const GoalCard = (props) => {

    return (
        <div className="goal-card">
            <ul>
                 <li>Start Weight: {props.challengeGoal.start_weight}</li>
                 <li>Start Body Fat%: {props.challengeGoal.start_body_fat}</li>
                 <li>Start Calorie Goal: {props.challengeGoal.start_calorie_goal}</li>
             </ul>
        </div>
    )
}

export default GoalCard
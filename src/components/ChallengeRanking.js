import React from 'react';

const ChallengeRanking = (props) => {

    const logScores = props.challenge.attributes.log_scores.map(log => { return log });

    const pointsArray = logScores.map(ls => {
        return {
            challenge_goal_id: ls.challenge_goal_id,
            total_points: ls.total_points
        }
    });

    const totalPoints = pointsArray.reduce(function(total, element){
        if(!total[element.challenge_goal_id]){
          total[element.challenge_goal_id] = {...element};
          return total;
        }
        total[element.challenge_goal_id].total_points += element.total_points;
        return total;
     },[]);

     const ranking = totalPoints.filter(item => item).sort((a,b) => b.total_points - a.total_points)

    return (
        <div className="challenge-owner">
            {console.log("LogScores", logScores)}
            {console.log("NewObject",pointsArray)}
            {console.log("TotalPoints", totalPoints)}
            {console.log("Check", ranking)}
            <p>Ranking</p>
        </div>
    )
}

export default ChallengeRanking

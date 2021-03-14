import React from 'react';
import { connect } from 'react-redux';

const ChallengeRanking = (props) => {

    const logScores = props.challenge.attributes.log_scores

    const users = props.users

    const pointsArray = logScores.map(ls => {
        const user = users.find(user => {
            return user.attributes.challenge_goals.find(challenge_goal => {
                return challenge_goal.id === ls.challenge_goal_id
            })
        })
        return {
            user_id: user.id,
            total_points: ls.total_points
        }
    });

    const totalPoints = pointsArray.reduce(function(total, element){
        if(!total[element.user_id]){
          total[element.user_id] = {...element};
          return total;
        }
        total[element.user_id].total_points += element.total_points;
        return total;
     },[]);

     const ranking = totalPoints.filter(item => item).sort((a,b) => b.total_points - a.total_points)

     const rankingWithName = ranking.map(rank => {
         const user = users.find(user => {
            return user.id === rank.user_id
         })
         return {
            username: user.attributes.username,
            total_points: rank.total_points
         }
     })

    return (
        <div className="challenge-owner">
            {console.log("LogScores", logScores)}
            {console.log("Users", users)}
            {/* {console.log("User", user)} */}
            {console.log("PointsArray",pointsArray)}
            {console.log("TotalPoints", totalPoints)}
            {console.log("Ranking", ranking)}
            {console.log("Ranking With Name", rankingWithName)}
            <p>Ranking</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ChallengeRanking)

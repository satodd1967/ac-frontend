import React from 'react';
import ChallengeRankingCard from '../components/ChallengeRankingCard'
import { connect } from 'react-redux';

const ChallengeRanking = ( {challenge, users, type, user }) => {

    const logScores = challenge.attributes.log_scores

    const pointsArray = logScores.map(ls => {
        const user = users.find(user => {
            return user.attributes.challenge_goals.find(challenge_goal => {
                return challenge_goal.id === ls.challenge_goal_id
            })
        })
        return {
            user_id: user ? user.id : "",
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

     const rankingCard = challenge ? type === "full" ? 
        rankingWithName.map((place, index) => {
            return <ChallengeRankingCard key={place.username} index={index} place={place}/>
        }) : 
            rankingWithName.map((place, index) => {
                 if(place.username === user.username) {
                    return <div key={index}><h4>Ranking</h4> 
                    <ChallengeRankingCard key={place.username} index={index} place={place}/></div>
                } else {
                    return ""
                }
            }) 
        : ""
        
    return (
        <div className="challenge-owner">
            <ul>
                {rankingCard}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.mainState.users,
        user: state.mainState.user
    }
}

export default connect(mapStateToProps)(ChallengeRanking)

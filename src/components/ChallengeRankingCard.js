import React from 'react';

const ChallengeRankingCard = (props) => {

    return (
        <div className="challenge-ranking-card">
            <li>{props.index + 1} - {props.place.username} - {props.place.total_points}</li>
            <br/>
        </div>
    )
}

export default ChallengeRankingCard
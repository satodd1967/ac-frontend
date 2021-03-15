import React from 'react';
import ChallengeCards from './ChallengeCards';
import ChallengeRanking from './ChallengeRanking';
import { connect } from 'react-redux';

const YourChallenges = (props) => {

    const yourChallenges = props.challenges.filter(challenge => {
        return challenge.attributes.user.id === props.user.id
    })

    const challenges = yourChallenges.map(challenge => {
        return <ChallengeCards key={challenge.id} challenge={challenge}/>
    })

    // const challenges = yourChallenges.map(challenge => {
    //     return challenge ? <ul><ChallengeCards key={challenge.id} challenge={challenge}/>
    //         <h3>Ranking</h3>
    //         <ChallengeRanking challenge={challenge}/></ul> : <p>No Challenge</p>
    // })

    return (
        <div className="your-challenges">
            <h1>Welcome {props.user.username}</h1>
            <h3>Your Challenges</h3>
            <ul>
            {challenges}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        challenges: state.challenges
    }
}

export default connect(mapStateToProps)(YourChallenges)
import React from 'react';
import ChallengeCards from '../components/ChallengeCards';
import ChallengeRanking from './ChallengeRanking';
import { connect } from 'react-redux';

const YourChallenges = (props) => {

    const yourChallenges = props.challenges.filter(challenge => {
        return challenge.attributes.user.id === props.user.id
    })

    const challenges = yourChallenges.map(challenge => {
        return challenge ? <ul key={challenge.id}><ChallengeCards challenge={challenge}/>
            <h4>Ranking</h4>
            <ChallengeRanking challenge={challenge} type={"single"}/></ul> : <p>No Challenge</p>
    })

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
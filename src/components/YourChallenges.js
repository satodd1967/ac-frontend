import React from 'react';
import ChallengeCards from './YourChallengeCards'
import { connect } from 'react-redux';

const YourChallenges = (props) => {

    const challenges = props.challenges.map(challenge => {
        return <li key={challenge.id}><ChallengeCards key={challenge.id} challenge={challenge}/></li>
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
        challenges: state.currentUser.challenges,
    }
}

export default connect(mapStateToProps)(YourChallenges)
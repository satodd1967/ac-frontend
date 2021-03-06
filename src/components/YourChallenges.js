import React from 'react';
import ChallengeCardsP from './ChallengeCardsP'
import { connect } from 'react-redux';

const YourChallenges = (props) => {

    const challenges = props.partChallenges.map(pc => {
        return <li><ChallengeCardsP key={pc.id} challenge={pc}/></li>
        })
    
    return (
        <div className="your-challenges">
            <h1>Welcome {props.user.username}</h1>
            <h3>Your Challenges</h3>
            <h4>Participating</h4>
            <ul>
            {challenges}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser.attributes,
        partChallenges: state.currentUser.attributes.challenges,
        nonPartChallenges: state.currentUser.attributes.owned_challenges
    }
}

export default connect(mapStateToProps)(YourChallenges)
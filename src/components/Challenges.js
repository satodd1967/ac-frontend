import React from 'react';
import ChallengeCards from './ChallengeCards'
import { connect } from 'react-redux';

const Challenges = (props) => {

    const challenges = props.challenges.map(challenge => {
        return <li><ChallengeCards key={challenge.id} challenge={challenge}/></li>
        })
    
    return (
        <div className="all-challenges">
            <h1>All Challenges</h1>
            <ul>
            {challenges}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser.attributes,
        challenges: state.challenges
    }
}

export default connect(mapStateToProps)(Challenges)
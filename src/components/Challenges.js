import React from 'react';
import ChallengeCards from './ChallengeCards';
import ChallengeOwners from './ChallengeOwners';
import { connect } from 'react-redux';

const Challenges = (props) => {

    const challenges = props.challenges.map(challenge => {
        return <ul key={challenge.id}>
            <ChallengeCards challenge={challenge}/>
            <li key={challenge.attributes.user.id}><ChallengeOwners key={challenge.attributes.user.id} challenge={challenge}/></li>
            </ul>
        })

    // const challengeOwners = props.challenges.map(challenge => {
    //     return <li key={challenge.attributes.user.id}><ChallengeOwners key={challenge.attributes.user.id} challenge={challenge}/></li>
    // })
    
    return (
        <div className="all-challenges">
            <h1>All Challenges</h1>
            {challenges}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        challenges: state.challenges
    }
}

export default connect(mapStateToProps)(Challenges)
import React from 'react';
import ChallengeCards from '../components/ChallengeCards';
import ChallengeOwners from '../components/ChallengeOwners';
import { connect } from 'react-redux';

const Challenges = (props) => {

    const challenges = props.challenges.map(challenge => {
        const currentUserChallengeGoal = challenge.attributes.challenge_goals.find(challengeGoal => {
            return challengeGoal.user_id === props.user.id
        }) 
        return <ul key={challenge.id}>
            <ChallengeCards challenge={challenge} currentUserCGId={currentUserChallengeGoal ? currentUserChallengeGoal.id : "null"}/>
            <li key={challenge.attributes.user.id}><ChallengeOwners key={challenge.attributes.user.id} challenge={challenge}/></li>
            </ul>
        })
    
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
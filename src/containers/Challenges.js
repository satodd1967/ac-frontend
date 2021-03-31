import React from 'react';
import ChallengeCards from '../components/ChallengeCards';
import ChallengeOwners from '../components/ChallengeOwners';
import ChallengeRanking from './ChallengeRanking';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Challenges = (props) => {

    const challenges = props.challenges.map(challenge => {
        const currentUserChallengeGoal = challenge.attributes.challenge_goals.find(challengeGoal => {
            return challengeGoal.user_id === props.user.id
        })
        const joinChallenge = !currentUserChallengeGoal ? <li><Link to={`/challenges/${challenge.id}/challenge_goals/new`}>Join This Challenge!</Link></li> : ""
        return <ul key={challenge.id}>
            <ChallengeCards challenge={challenge} currentUserCGId={currentUserChallengeGoal ? currentUserChallengeGoal.id : "null"}/>
            <li key={challenge.attributes.user.id}><ChallengeOwners key={challenge.attributes.user.id} challenge={challenge}/></li>
            <br/>
            <h4>Ranking</h4>
            <ChallengeRanking challenge={challenge} type={"full"}/>
            {joinChallenge}
            <br/>
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
        user: state.mainState.user,
        challenges: state.mainState.challenges
    }
}

export default connect(mapStateToProps)(Challenges)
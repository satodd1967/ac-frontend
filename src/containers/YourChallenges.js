import React from 'react';
import ChallengeCards from '../components/ChallengeCards';
import DeleteButton from '../components/DeleteButton';
import ChallengeEditButton from '../components/ChallengeEditButton';
import GoalsViewButton from '../components/GoalsViewButton';
import ChallengeRanking from './ChallengeRanking';
import { connect } from 'react-redux';

const YourChallenges = (props) => {

    const yourChallenges = props.challenges.filter(challenge => {
        return challenge.attributes.users.find(user => {
           return user.id === props.user.id
        })
    })

    const challenges = yourChallenges.map(challenge => {
        const currentUserChallengeGoal = challenge.attributes.challenge_goals.find(challengeGoal => {
            return challengeGoal.user_id === props.user.id
        })  
        const editButton = challenge && challenge.attributes.user_id === props.user.id ? 
        <ChallengeEditButton challengeId={challenge.id}/> : ""

        return challenge ? <ul key={challenge.id}><ChallengeCards challenge={challenge}/>
            <li>
            <GoalsViewButton challengeId={challenge.id} currentUserCGId={currentUserChallengeGoal.id}/>
            </li>
            <li>
            <DeleteButton type={"Quit Challenge"} deleteId={currentUserChallengeGoal.id} history={props.history}/>
            </li>
            {editButton}
            <br/>
            <ChallengeRanking challenge={challenge} type={"single"}/></ul> : <p>No Challenge</p>
    })

    return (
        <div className="your-challenges">
            <div classname="your-challenges-header">
                <h1>Welcome {props.user.username}</h1>
                <h2>Your Challenges</h2>
            </div>
            <ul classname="your-challenges-ul">
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
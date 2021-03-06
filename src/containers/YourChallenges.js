import React from 'react';
import ChallengeCards from '../components/ChallengeCards';
import DeleteButton from '../components/DeleteButton';
import ChallengeEditButton from '../components/EditButton';
import GoalsViewButton from '../components/GoalsViewButton';
import ChallengeRanking from './ChallengeRanking';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <ChallengeEditButton value="Edit Challenge" url="challenges" editId={challenge.id}/> : ""

        return challenge ? 
            <div key={challenge.id}>
            <ul className="your-challenges-challenge" key={challenge.id}><ChallengeCards challenge={challenge}/>
                <li>
                    <DeleteButton type={"Quit Challenge"} deleteId={currentUserChallengeGoal.id} history={props.history}/>
                    <GoalsViewButton challengeId={challenge.id} currentUserCGId={currentUserChallengeGoal.id}/>
                    {editButton}
                </li>
                <br/>
            </ul>
                <ChallengeRanking challenge={challenge} type={"single"}/>
            </div>
             : ""
    })

    const noChallenge = yourChallenges.length > 0 ? 
        "" :<div className="no-challenges"> 
                <ul>
                    <Link to="/challenges">View Challenges</Link>
                    <br/>
                    <br/>
                    <Link to="/challenges/new">Create Your Own!</Link>
                </ul>
            </div>

    return (
        <div className="your-challenges">
            <div className="your-challenges-header">
                <h1>Welcome {props.user.username}</h1>
                <h2>Your Challenges</h2>
            </div>
            <ul className="your-challenges-ul">
                {challenges}
                {noChallenge}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.mainState.user,
        challenges: state.mainState.challenges,
    }
}

export default connect(mapStateToProps)(YourChallenges)
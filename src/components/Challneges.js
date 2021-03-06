import React from 'react';
import ChallengeCards from './ChallengeCards'
import { connect } from 'react-redux';

const Challenges = (props) => {

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
    
    }
}

export default connect(mapStateToProps)(Challenges)
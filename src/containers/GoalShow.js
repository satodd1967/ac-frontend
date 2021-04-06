import GoalCard from '../components/GoalCard';
import EditButton from '../components/EditButton';
import { connect } from 'react-redux';

const GoalShow = ({ challenges, location, match, challengeGoals }) => {

    const challengeGoal = challengeGoals.find(challengeGoal => {
       return challengeGoal.id.toString() === match.params.id
    })
    
    const challenge = challengeGoal ? challenges.find(challenge => {
        return challenge.id === challengeGoal.challenge_id.toString()
    }) : ""

    const userChallengeGoal = challengeGoal ? <GoalCard key={challengeGoal.id + 1} challengeGoal={challengeGoal}/> : ""


    const editButton = challengeGoal ? <EditButton key={challengeGoal.id} value="Edit Goal" url="challenge_goals" editId={location.challengeGoalId}/> : ""


    return (
        <div className="goal-show">
            <div className="goal-show-header">
                <h2>Your goals for<br/>{challenge ? challenge.attributes.name : ``}</h2>
                <h4>Start Date: {challenge ? challenge.attributes.start_date : ``} End Date: {challenge ? challenge.attributes.end_date : ``} </h4>
                <h3>Duration {challenge ? `${challenge.attributes.duration} weeks` : ``}</h3>
                {userChallengeGoal}
                <br/>
                {editButton}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.mainState.user,
        challenges: state.mainState.challenges,
        challengeGoals: state.mainState.userChallengeGoals
    }
}

export default connect(mapStateToProps)(GoalShow)
import React from 'react';
import ChallengeGoalForm from '../components/ChallengeGoalForm';
import DeleteButton from '../components/DeleteButton';
import { updateChallengeGoal, deleteChallengeGoal } from '../actions/challengeGoals';
import { setEditChallengeGoalForm, resetChallengeGoalForm } from '../actions/challengeGoalForm';
import { connect } from 'react-redux';

class EditChallengeGoal extends React.Component {
    componentDidMount(){
        this.props.challengeGoal && this.props.setEditChallengeGoalForm(this.props.challengeGoal)
    }

    componentDidUpdate(prevProps) {
        this.props.challengeGoal && !prevProps.challengeGoal && this.props.setEditChallengeGoalForm(this.props.challengeGoal)
    }

    componentWillUnmount() {
        this.props.resetChallengeGoalForm()
    }

    handleSubmit = (challengeGoalFormData, user) => {
        this.props.updateChallengeGoal(challengeGoalFormData, this.props.history, user, this.props.challengeGoal.id)
    }

  render() {
    const challengeGoalId = this.props.challengeGoal ? this.props.challengeGoal.id : null
    const history = this.props.history ? this.props.history : null
    return  <>
                <ChallengeGoalForm editMode handleSubmit={this.handleSubmit}/>
                <DeleteButton type={"Delete ChallengeGoal"} deleteId={challengeGoalId} history={history}/>
            </>
  }
};

export default connect(null, { updateChallengeGoal, setEditChallengeGoalForm, resetChallengeGoalForm, deleteChallengeGoal })(EditChallengeGoal);
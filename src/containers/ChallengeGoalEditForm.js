import React from 'react';
import ChallengeGoalForm from '../components/ChallengeGoalForm';
import { updateChallengeGoal } from '../actions/challengeGoals';
import { setEditChallengeGoalForm, resetChallengeGoalForm } from '../actions/challengeGoalForm';
import { validateChallengeGoal } from '../actions/clientErrors';
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

    handleSubmit = async (challengeGoalFormData, user) => {
        const isValid = await this.props.validateChallengeGoal(challengeGoalFormData)
        if (Object.keys(isValid.invalid).length === 0) {
            this.props.updateChallengeGoal(challengeGoalFormData, this.props.history, user, this.props.challengeGoal.id)
        }
    }

  render() {
    const challengeId = this.props.challengeGoal ? this.props.challengeGoal.challenge_id : null
    return  <>
                <ChallengeGoalForm editMode challengeId={challengeId} handleSubmit={this.handleSubmit}/>
                <br/>
            </>
  }
};

export default connect(null, { updateChallengeGoal, setEditChallengeGoalForm, resetChallengeGoalForm, validateChallengeGoal })(EditChallengeGoal);
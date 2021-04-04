import React from 'react';
import ChallengeForm from '../components/ChallengeForm';
import DeleteButton from '../components/DeleteButton';
import { updateChallenge, deleteChallenge } from '../actions/challenges';
import { setEditChallengeForm, resetChallengeForm } from '../actions/challengeForm';
import { validateChallenge } from '../actions/clientErrors';
import { connect } from 'react-redux';

class EditChallenge extends React.Component {
    componentDidMount(){
        this.props.challenge && this.props.setEditChallengeForm(this.props.challenge)
    }

    componentDidUpdate(prevProps) {
        this.props.challenge && !prevProps.challenge && this.props.setEditChallengeForm(this.props.challenge)
    }

    componentWillUnmount() {
        this.props.resetChallengeForm()
    }

    handleSubmit = async (challengeFormData, user) => {
        const isValid = await this.props.validateChallenge(challengeFormData, "edit")
            if (Object.keys(isValid.invalid).length === 0) {
                this.props.updateChallenge(challengeFormData, this.props.history, user, this.props.challenge.id)
            }
    }

  render() {
    const challengeId = this.props.challenge ? this.props.challenge.id : null
    const history = this.props.history ? this.props.history : null
    return  <>
                <ChallengeForm editMode handleSubmit={this.handleSubmit}/>
                <DeleteButton type={"Delete Challenge"} deleteId={challengeId} history={history}/>
                <br/>
            </>
  }
};

export default connect(null, { updateChallenge, setEditChallengeForm, resetChallengeForm, deleteChallenge, validateChallenge })(EditChallenge);
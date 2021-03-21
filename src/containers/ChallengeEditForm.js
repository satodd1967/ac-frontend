import React from 'react';
import ChallengeForm from '../components/ChallengeForm';
import DeleteButton from '../components/DeleteButton';
import { updateChallenge, deleteChallenge } from '../actions/challenges';
import { setEditChallengeForm, resetChallengeForm } from '../actions/challengeForm';
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

    handleSubmit = (challengeFormData, user) => {
        this.props.updateChallenge(challengeFormData, this.props.history, user, this.props.challenge.id)
    }

  render() {
    const challengeId = this.props.challenge ? this.props.challenge.id : null
    const history = this.props.history ? this.props.history : null
    return  <>
            {console.log(challengeId)}
                <ChallengeForm editMode handleSubmit={this.handleSubmit}/>
                <DeleteButton type={"Delete Challenge"} deleteId={challengeId} history={history}/>
            </>
  }
};

export default connect(null, { updateChallenge, setEditChallengeForm, resetChallengeForm, deleteChallenge })(EditChallenge);
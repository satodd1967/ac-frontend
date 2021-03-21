import React from 'react';
import ChallengeForm from '../components/ChallengeForm'
import { updateChallenge, deleteChallenge } from '../actions/challenges'
import { setEditChallengeForm, resetChallengeForm } from '../actions/challengeForm'
import { connect } from 'react-redux'

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
    const { history, deleteChallenge, challenge } = this.props
    const challengeId = challenge ? challenge.id : null
    return  <>
              <ChallengeForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}} onClick={()=>deleteChallenge(challengeId, history)}>Delete this trip</button>
            </>
  }
};

export default connect(null, { updateChallenge, setEditChallengeForm, resetChallengeForm, deleteChallenge })(EditChallenge);
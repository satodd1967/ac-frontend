import React from 'react';
import ChallengeForm from '../components/ChallengeForm';
import { sendChallenge } from '../actions/challenges';
import { setEditChallengeForm, resetChallengeForm } from '../actions/challengeForm';
import { connect } from 'react-redux';

class EditChallenge extends React.Component {

    componentDidMount(){
        this.props.setEditChallengeForm(this.props.challenges.find(challenge => {
            return challenge.id === this.props.match.params.id
        }))
    }

    handleSubmit = (challengeFormData, user) => {
        sendChallenge(challengeFormData, this.props.history, user)
    }

    render() {
        return (
            <div>
                <ChallengeForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        challenges: state.challenges
    }
}

export default connect(mapStateToProps, { sendChallenge, setEditChallengeForm, resetChallengeForm } )(EditChallenge)
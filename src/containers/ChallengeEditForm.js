import React from 'react';
import ChallengeForm from '../components/ChallengeForm';
import { sendChallenge } from '../actions/challenges';
import { setEditChallengeForm, resetChallengeForm } from '../actions/challengeForm';
import { connect } from 'react-redux';

class EditChallenge extends React.Component {

    // static challenge = this.props ? this.props.challenges.find(challenge => {
    //     return challenge.id === this.props.match.params.id
    // }) : "No Challenge Id"

    componentDidMount(){
        this.props.setEditChallengeForm(this.props.challenges.find(challenge => {
            return challenge.id === this.props.match.params.id
        }))
        // this.props.setEditChallengeForm(this.challenge)
    }


    // = ({ sendChallenge, history, match, challenges }) => {

    handleSubmit = (challengeFormData, user) => {
        sendChallenge(challengeFormData, this.props.history, user)
    }

    render() {
        return (
            <div>
                <p>stuff</p>
            </div>
        )
    }
    // return  <div>
    //             <h1>Edit </h1>
    //             <ChallengeForm history={history} handleSubmit={handleSubmit} />
    //         </div>
    // }
}

const mapStateToProps = state => {
    return {
        challenges: state.challenges
    }
}

export default connect(mapStateToProps, { sendChallenge, setEditChallengeForm, resetChallengeForm } )(EditChallenge)
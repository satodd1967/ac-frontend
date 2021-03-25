import React from 'react';
import ErrorCard from './ErrorCard';
import { connect } from 'react-redux';
import { updateJoinChallengeForm } from "../actions/joinChallengeForm";
import { sendChallengeGoal } from "../actions/challengeGoals";
import { clearErrors } from '../actions/errors';

const JoinChallenge = ({ joinChallengeFormData, updateJoinChallengeForm, sendChallengeGoal, history, match, user, lastChallenge, errors, clearErrors }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...joinChallengeFormData,
            [name]: value
        }
        clearErrors()
        updateJoinChallengeForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        sendChallengeGoal(joinChallengeFormData, history, user, match)
    }

    const fixChallengeName = input => {
        if (input) {
            return input.name
        } else {
            return null
        }
    };

    const formErrors = errors.map(error => {
        return <li><ErrorCard key={error} error={error}/></li>
    }) 

    return (
        <form onSubmit={handleSubmit}>
            <h2>Join This Challenge</h2>
            <ul>
                {formErrors}
            </ul>
            <h3>{user.username} Setup Your Challenge Goals for {fixChallengeName(lastChallenge)} </h3>
            <input placeholder="start body fat"
                value={joinChallengeFormData.startBodyFat}
                name="startBodyFat"
                type="text"
                onChange={handleChange}/>
            <input placeholder="start calorie goal"
                value={joinChallengeFormData.startCalorieGoal}
                name="startCalorieGoal"
                type="text"
                onChange={handleChange}/>
            <input placeholder="start weight"
                value={joinChallengeFormData.startWeight}
                name="startWeight"
                type="text"
                onChange={handleChange}/>
              
            <input type="submit" value="Join Challenge"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        joinChallengeFormData: state.joinChallengeForm,
        lastChallenge: state.challenges[state.challenges.length -1],
        errors: state.errors
    }
}

export default connect(mapStateToProps, { updateJoinChallengeForm, sendChallengeGoal, clearErrors } )(JoinChallenge)
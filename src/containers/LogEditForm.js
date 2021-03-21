import React from 'react';
import LogForm from '../components/LogForm';
import DeleteButton from '../components/DeleteButton';
import { updateLog, deleteLog } from '../actions/challenges';
import { setEditLogForm, resetLogForm } from '../actions/challengeForm';
import { connect } from 'react-redux';

class EditLog extends React.Component {
    componentDidMount(){
        this.props.log && this.props.setEditLogForm(this.props.log)
    }

    componentDidUpdate(prevProps) {
        this.props.log && !prevProps.log && this.props.setEditChallengeForm(this.props.log)
    }

    componentWillUnmount() {
        this.props.resetLogForm()
    }

    handleSubmit = (logFormData, user) => {
        this.props.updateLog(logFormData, this.props.history, user, this.props.log.id)
    }

  render() {
    const logId = this.props.log ? this.props.log.id : null
    const history = this.props.history ? this.props.history : null
    return  <>
            {console.log(logId)}
                <ChallengeForm editMode handleSubmit={this.handleSubmit}/>
                <DeleteButton type={"Delete Log"} deleteId={logId} history={history}/>
            </>
  }
};

export default connect(null, { updateLog, setEditLogForm, resetLogForm, deleteLog })(EditLog);
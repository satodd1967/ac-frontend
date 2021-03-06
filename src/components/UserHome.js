import React from 'react';
import LeftNav from './LeftNav';
import YourChallenges from './YourChallenges';
import { connect } from 'react-redux';

const Home = (props) => {

    return (
        <div className="home">
            <div className="column-1">
                <LeftNav/>
            </div>
            <div className="column-2">
                <YourChallenges/>
            </div>
            <div className="column-3">

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser.attributes
    }
}

export default connect(mapStateToProps)(Home)
import React from 'react';
import { Link } from 'react-router-dom';

const editLog = (props) => {

    return (
        <div>
            <Link to={{ 
                pathname: `/logs/${props.logId}/edit`, 
                logId: props.logId, 
            }}>
            <button type="button">
                Edit Log
            </button>
            </Link>
        </div>
    )
}

export default editLog
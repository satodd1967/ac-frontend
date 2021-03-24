import React from 'react';

const ErrorCard = (props) => {

    return (
        <div className="error-card">
            {props.error}
            <br/>
        </div>
    )
}

export default ErrorCard
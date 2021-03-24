import React from 'react';

const ErrorCard = (props) => {

    return (
        <div className="error-card">
            <li>{props.error}</li>
            <br/>
        </div>
    )
}

export default ErrorCard
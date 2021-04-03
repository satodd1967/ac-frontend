import React from 'react';

const ClientErrorCard = (props) => {

    return (
        <div className="client-error-card">
            {props.error}
        </div>
    )
}

export default ClientErrorCard
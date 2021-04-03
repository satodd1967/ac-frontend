import React from 'react';

const ClientErrorCard = (props) => {

    console.log("Card", props)

    return (
        <div className="client-error-card">
            {props.error}
        </div>
    )
}

export default ClientErrorCard
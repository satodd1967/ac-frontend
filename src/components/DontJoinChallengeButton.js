import React from 'react';

const DontJoinButton = ({ history }) => {

    const handleSubmit = event => {
        event.preventDefault()
        history.push('/')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Don't Join"/>
        </form>
    )
}

export default DontJoinButton
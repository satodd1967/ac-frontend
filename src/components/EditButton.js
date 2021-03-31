import React from 'react';
import { Link } from 'react-router-dom';

const EditButton = (props) => {

    return (
        <>
                <Link to={{ 
                    pathname: `/${props.url}/${props.editId}/edit`, 
                    editId: props.editId, 
                }}>
                <button type="button">
                    {props.value}
                </button>
                </Link>
        </>
    )
}

export default EditButton
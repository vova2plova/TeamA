import React from 'react';

const InputComments = (props) => {
    return(
        <div className = "inputComment" contentEditable="true" {...props}>
        </div>
    );
}

export default InputComments;
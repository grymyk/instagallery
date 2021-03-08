import React from 'react';

function ErrorMsg(props) {
    const divStyle = {
        margin: '22px 0 0 24px',
        fontStyle: 'italic',
        color: '#c00',
        fontSize: '18px',
    };

    return (
        <div style = {divStyle}>{props.msg}</div>
    )
}

export default ErrorMsg;

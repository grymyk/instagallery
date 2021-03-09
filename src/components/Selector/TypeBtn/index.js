import React from 'react';

import './type_btn.css';

function TypeBtn(props) {
    const { clickHandler, cls, title, value } = props;

    return (
        <>
            <button
                className = { cls }
                // onClick = { clickHandler }
                type = "button"
                value = { value }
            >{ title }</button>
        </>
    )
}

export default TypeBtn;

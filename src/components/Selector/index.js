import React from 'react';

import './selector.css';
import TypeBtn from './TypeBtn/';

function Selector(props) {
    const { clickHandler, selected } = props;

    const btnCls = 'selected';

    const btns = [{
        title: 'IMAGE',
        value: 0
    }, {
        title: 'ALBUM',
        value: 1
    }, {
        title: 'VIDEO',
        value: 2
    }];

    btns[selected]['cls'] = btnCls;

    return (
        <div className = "selector"
            onClick = { clickHandler }
        >
            {
                btns.map( (btn) => {
                    return <TypeBtn
                        key = { btn.value }
                        {...btn}
                    />
                })
            }
        </div>
    );
}

export default Selector;

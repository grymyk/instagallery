import React from 'react';

function Item(elem) {
    console.log(elem);

    const iStyle = {
        lineHeight: '20px',
        margin: '8px 0 0'
    };

    return (
        <li style = {iStyle}>
            <span>{elem.caption}</span>
        </li>
    )
}

const itemed = (elem) => (<Item key={elem.id} {...elem} />);

function List(data) {
    const ulStyle = {margin: '12px 0px 0 0'};

    return (
        <ul style = {ulStyle}>
            { data.data.map(itemed) }
        </ul>
    )
}

export default List;

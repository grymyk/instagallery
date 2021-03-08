import React from 'react';

function Item(elem) {
    console.log(elem);

    const iStyle = {
        lineHeight: '20px',
        margin: '8px 0 0'
    };

    return (
        <li style = {iStyle}>
            <a href={elem.url}>{elem.title}</a>
        </li>
    )
}

const itemed = (elem) => (<Item key={elem.objectID} {...elem} />);

function ListHref(data) {
    const ulStyle = {margin: '12px 0px 0 0'};

    return (
        <ul style = {ulStyle}>
            { data.hits.map(itemed) }
        </ul>
    )
}

export default ListHref;

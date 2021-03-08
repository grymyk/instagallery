import React from "react";

import './imageItem.css'

function ImageItem(elem) {
    const source = elem.media_url;

    return (
        <li>
            <img height="293px" width="293px" alt={elem.caption} className = "poster" src={source} />
            <h2>{elem.caption}</h2>
        </li>
    )
}

export default ImageItem;

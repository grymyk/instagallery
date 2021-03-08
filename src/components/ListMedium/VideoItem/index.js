import React from "react";

function VideoItem(elem) {
    const source = elem.media_url;
    const poster = elem.thumbnail_url;

    return (
        <li className = "video">
            <video className={poster} controls
                   controlsList="nodownload" playsInline
                   poster={poster}
                   preload="metadata" type="video/mp4"
                   src={source}
                   loop
            />

            <h2>{elem.caption}</h2>
        </li>
    )
}

export default VideoItem;

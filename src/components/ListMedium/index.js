import React from 'react';

import ImageItem from './ImageItem/';
import VideoItem from './VideoItem/';

import './listMedium.css';

const filterData = (data, type) => {
    return data.filter( (elem) => elem.media_type === type );
};

const getShowItem = (type) => mediumTypeItems[type];

const showImage = (elem) => <ImageItem key={elem.id} {...elem} />
const showVideo = (elem) => <VideoItem key={elem.id} {...elem} />

const mediumTypeItems = {
    'CAROUSEL_ALBUM': showImage,
    'IMAGE': showImage,
    'VIDEO': showVideo,
};

const sliceData = (media, start, end) => {
    return media.slice(start, end);
};

function List(props) {
    const { data, type } = props;
    const { data: media } = data;

    const medium_types = [
        'IMAGE',
        'CAROUSEL_ALBUM',
        'VIDEO'
    ];

    const START = 0;
    const SCREEN_SIZE = 6;

    // const type = 'VIDEO';
    let typedMedia = filterData(media, type);

    const mediaLen = typedMedia.length;

    if (mediaLen > SCREEN_SIZE) {
        typedMedia = sliceData(typedMedia, START, SCREEN_SIZE);
    }

    const showType = getShowItem(type);

    return (
        <ul className = "media">
           { typedMedia.map( (elem) => showType(elem) )}
       </ul>
    );

    /*return (
    <ul className = "media">
        { sized.map( (elem) => {
                return mediumTypeItems[elem.media_type](elem);
            }
        )}
    </ul>
)*/
}

export default List;

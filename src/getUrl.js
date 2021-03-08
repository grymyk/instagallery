const getUrl = (params) => {
    const keys = Object.keys(params);

    let url = `${params[keys[0]]}?`;

    for ( let i = 1, len = keys.length; i < len; i += 1 ) {
        const key = keys[i];

        url += `&${key}=${params[key]}`
    }

    // console.log(url);

    return url;
};

export default getUrl;


// async/await vs then/catch/finally


/*const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
};*/

const getData = async (url) => {
    const response = await fetch(url);
    return response.json();
};

export default getData;

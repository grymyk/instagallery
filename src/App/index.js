import React, {useState} from 'react';

import './app.css';

import ErrorMsg from "../components/ErrorMsg";
import Header from "../components/Header/";
import ListMedium from "../components/ListMedium/";
import Loader from "../components/Loader/";
import Footer from "../components/Footer/";
import Selector from "../components/Selector/";

import config from '../config';
import getUrl from '../getUrl';

import useDataReducer from "../useDataReducer";

function App() {
    // const initData = { hits: [] };
    const initData = { data: [] };
    const initType = 'IMAGE';

    const initUrl = getUrl(config.instagram);

    const [type, setType] = useState(initType);
    const [selected, setSelected] = useState(0);

    const [news] = useDataReducer(initUrl, initData);
    const { errorMsg, isLoading, data } = news;


    const medium_types = ['IMAGE', 'CAROUSEL_ALBUM', 'VIDEO'];

    const selectorProps = {
        clickHandler: (event) => {
            const selected = event.target.getAttribute('value');

            setSelected(selected);
            setType( medium_types[selected] );
        },

        selected
    };

    const mediaProps = {
        data,
        type
    };

    return (
        <>
            <Header />

            <Selector {...selectorProps} />

            { errorMsg && <ErrorMsg msg = { errorMsg } /> }

            { isLoading ?
                <Loader /> :
                <ListMedium { ...mediaProps } />
            }

            <Footer />
        </>
    );
}

export default App;

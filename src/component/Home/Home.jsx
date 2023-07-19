import React from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Contact from './Contact';
import DownloadApp from './DownloadApp';
import GoogleMap from './GoogleMap';
import HowItWork from './HowItWork';
import Packege from './Packege';
import Market from './Market';
import Count from './count';

const Home = () => {
    return (
        <div>
            <Banner />
            <Market/>
            <HowItWork />
            <DownloadApp />
            <Packege />
            <Aboutus />
            <Count/>
        </div>
    );
};

export default Home;
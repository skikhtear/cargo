import React from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Contact from './Contact';
import DownloadApp from './DownloadApp';
import GoogleMap from './GoogleMap';
import HowItWork from './HowItWork';
import Packege from './Packege';
import Market from './Market';

const Home = () => {
    return (
        <div>
            <Market/>
            <Banner />
            <HowItWork />
            <DownloadApp />
            <Packege />
            <Aboutus />
            <GoogleMap/>
        </div>
    );
};

export default Home;
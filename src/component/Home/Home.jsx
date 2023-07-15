import React from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Contact from './Contact';
import DownloadApp from './DownloadApp';
import GoogleMap from './GoogleMap';
import HowItWork from './HowItWork';
import Packege from './Packege';

const Home = () => {
    return (
        <div>
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
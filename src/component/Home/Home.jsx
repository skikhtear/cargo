import React from 'react';
import Banner from './Banner';
import DownloadApp from './DownloadApp';
import HowItWork from './HowItWork';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWork />
            <DownloadApp/>
        </div>
    );
};

export default Home;
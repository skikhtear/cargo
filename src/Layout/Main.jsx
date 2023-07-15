
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer/Footer';
import Navbar from '../component/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;
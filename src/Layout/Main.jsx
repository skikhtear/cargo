
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../component/Shared/Footer/Footer';
import Navbar from '../component/Shared/Navbar/Navbar';


const Main = () => {
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;
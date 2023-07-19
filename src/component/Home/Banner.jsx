import React from 'react';
import { Link } from 'react-router-dom';
import BannerBg from '../../assets/2.png'


const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className=" flex-col lg:flex-row-reverse py-40 mr-96">
                    <div className='mr-[700px]'>
                        <h1 className="text-5xl font-bold text-white">Earn.Connect.</h1>
                        <h1 className="text-5xl font-bold text-white mb-10">Contribute to <br />Socity</h1>
                        
                        <Link to="/package"><button className="btn bg-black text-white rounded-none">Buttons order </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
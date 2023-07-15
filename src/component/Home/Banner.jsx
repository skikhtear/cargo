import React from 'react';
import { Link } from 'react-router-dom';
import BannerBg from '../../assets/0e1f0689-bc38-47f6-a010-d32a725009f8.png'


const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className=" flex-col lg:flex-row-reverse py-40 mr-96">
                    <div className='mr-[500px]'>
                        <h1 className="text-5xl font-bold">Earn.Connect.</h1>
                        <h1 className="text-5xl font-bold mb-10">Contribute to <br />Socity</h1>
                        
                        <Link to="/signup"><button className="btn bg-black text-white rounded-none">Sign up now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
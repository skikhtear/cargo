import React from 'react';
import { Link } from 'react-router-dom';
import BannerBg from '../../assets/25.png'


const Banner = () => {
    return (
        <div>
            <div className="hero lg:min-h-fit lg:py-32" style={{ backgroundImage: `url(${BannerBg})` }}>
                {/* <img src={BannerBg} alt="" className='w-full'/> */}
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="md:mr-[400px] lg:mr-[700px] mr-80">
                        <h1 className="lg:text-5xl md:text-5xl text-xl font-bold text-black">Commute Smarter </h1>
                        <h1 className="lg:text-5xl md:text-5xl text-xl font-bold text-black mb-10">With <br />XOX Ride</h1>
                        <Link to="/package"><button className="btn bg-black hover:btn-info text-white rounded-none">Exclusive Offers</button></Link>
                    </div>
                </div>
            </div>
            {/* <div className="hero" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className=" flex-col lg:flex-row-reverse py-40 mr-96">
                    <div className='mr-[700px]'>
                        <h1 className="text-5xl font-bold text-black">Earn.Connect.</h1>
                        <h1 className="text-5xl font-bold text-black mb-10">Contribute to <br />Socity</h1>
                        
                        <Link to="/package"><button className="btn bg-black hover:btn-info text-white rounded-none">Buttons order </button></Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;
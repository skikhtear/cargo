import React from 'react';
import imgApp from '../../assets/xox (2).png'
import {FaApple, FaGooglePlay} from 'react-icons/fa';

const DownloadApp = () => {
    return (
        <div className='bg-amber-100'>
            <h1 className='text-5xl text-center pt-20 my-10 font-bold'>XOX App Launching Soon!</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 mx-20'>
                <div>
                    <img src={imgApp} alt="" className='mx-auto' />
                </div>
                <div>
                    <h3 className='text-3xl font-bold mt-20 mb-5'>Download the XOX App Soon.</h3>
                    <p>Our team is working diligently to bring you the best possible experience when using XOX Rides. Follow us on our social media pages or we will also notify you with any updates via email.</p>
                    {/* <h3 className='text-3xl font-bold mt-20 mb-5'>XOX App Launching Soon!</h3> */}
                    {/* <div className='flex mt-10'>
                        <div>
                            <button className='btn bg-black text-white mr-5'><FaApple className='text-2xl'/>Download From <br />APPLE APP STORE</button>
                            <button className='btn bg-black text-white'><FaGooglePlay className='text-2xl'/>Download From <br />GOOGLE PLAY STORE</button>
                        </div>
                        <h2 className='text-3xl font-bold ml-5'>Coming Soon</h2>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;
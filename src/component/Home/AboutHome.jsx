import React from 'react';
import carimg from '../../assets/Tata-Premium-Sedan-Rendering-removebg-preview.png'
import { Link } from 'react-router-dom';


const AboutHome = () => {
    return (
        <div className='bg-amber-100 lg:p-20 md:p-14 p-10'>
            <h2 className='text-5xl my-20 font-bold text-center '>About us.</h2>
            <div className='lg:flex md:flex lg:mx-10 md:mx-10'>
                <div className='lg:w-3/4 md:w-3/4'>
                    <h2 className='text-3xl my-20 font-bold'>Ride Share Company With Purpose</h2>
                    <p className='mb-5'>Welcome to XOX Rides, your friendly and affordable rideshare platform being designed specifically for the vibrant city of Los Angeles and its surrounding communities founded by a former rideshare driver. Our passion for serving the community first sets us apart from other ride sharing services.
                    </p>
                    <br />
                    <p>
                        Our mission is to provide affordable transportation options for everyday working families who have been burdened with high transportation costs. We understand the struggles that come with living in a fast-paced city like Los Angeles, where commuting can be both time-consuming and expensive.
                    </p>
                    <br />
                    <p>
                        With XOX Rides, we aim to revolutionize the way people travel by offering a convenient and cost-effective solution. Our platform will connect drivers with passengers, creating a seamless and efficient ride sharing experience. With our exclusive plans, not only will individuals save money, but also reduce traffic congestion and lower their carbon footprint.

                    </p>
                    
                    <Link to="/about-us"><button className='btn bg-black text-white mt-5 hover:btn-warning text-xl font-bold'>READ MORE</button></Link>
                </div>
                <div>
                    <img src={carimg} alt="" className='w-[1200px] lg:ml-20'/>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;
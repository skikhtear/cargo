import React from 'react';
import carimg from '../../assets/Tata-Premium-Sedan-Rendering-removebg-preview.png'

const Aboutus = () => {
    return (
        <div className='bg-amber-100 lg:p-10 md:p-10 p-5 text-justify'>
            <h2 className='text-5xl my-20 font-bold text-center '>About us.</h2>
            <div>
                <img src={carimg} alt="" className='lg:w-[1000px] mx-auto' />
            </div>
            <div className='lg:mx-10 md:mx-10'>
                <div>
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
                    <br />
                    <p>
                        We are working tirelessly to ensure that our platform is not only user-friendly, but also reliable and safe. We are implementing strict background checks and vehicle inspections to ensure the highest level of safety for our users. Our team is continuously innovating and improving the app, taking into consideration user feedback to provide the best possible experience for everyone.
                    </p>
                    <br />
                    <p>
                        However, starting a new venture is not without its challenges. That's where we need your support. By making early pledges, you can help us overcome some of the initial costs and burdens of starting a company and you’ll be rewarded with exclusive savings available for only to our early backers. Your contribution will not only be appreciated, but also make a significant impact on our journey towards making transportation more accessible and affordable for everyone.

                    </p>
                    <br />
                    <p>
                        We greatly appreciate your support as we work diligently to bring XOX Rides to life. Together, we can transform the way we travel and create a community that is connected and empowered. Join us in our journey and be a part of the change.

                    </p>
                    <br />
                    <p>
                        So hop on board and let's navigate through the bustling streets of Los Angeles and your community together. Your comfort, affordability, and safety are our top priorities. With XOX Rides, you can expect a ride experience like no other. Welcome to the future of transportation in your community. Let's ride, connect, and thrive! Thank you for your support and stay tuned for more updates and news. 
                    </p>
                    
                </div>
                
            </div>
        </div>

    );
};

export default Aboutus;
import React from 'react';

import driver from '../../assets/10.png'
import rider from '../../assets/3.png'
import ambassador from '../../assets/6.png'
import { Link } from 'react-router-dom';

const Market = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-10 mx-10 mb-5 mt-5 border-black border'>
                <div>
                    <div>
                        {/* <figure><img src={img} alt="car" className='h-3/4' /></figure> */}
                        
                        <div className="ml-5 mt-3">
                            <h2 className="text-5xl font-bold">Driver</h2>
                            <p className='text-justify mr-2'>Join the ranks of the elite as a valued member of our team of drivers here at XOX Rides. With my own experience as a former 5-star diamond rideshare driver, I understand the secrets to success in this industry. I have encountered the challenges, the highs and lows, and most importantly, the overwhelming sense of accomplishment that comes from being in control of your own destiny. So, are you ready to embark on a path towards unparalleled success and become part of a community that genuinely cares about your journey? Join us at XOX Rides and let's redefine transportation together. </p>
                            <div className="card-actions justify-start">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-center mt-10'>
                        JOIN AS A DRIVER
                    </h2>
                    <Link to="/driver-signup"><button className='btn bg-black  text-xl font-bold mx-auto  text-white mt-5'>Driver</button></Link>
                </div>
                <div>
                    <img src={driver} alt="" className=''/>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-10 mx-10 mb-5 border-black border'>
                <div>
                    <img src={rider} alt="" />
                </div>
                
                <div className='text-center'>
                    <h2 className="text-4xl font-bold text-center mt-10">JOIN AS A RIDER</h2>
                    <Link to="/package"><button className='btn bg-black text-xl font-bold text-center  text-white mt-5'>Rider</button></Link>
                </div>
                <div>
                    <div >
                        {/* <figure><img src={img} alt="car"  className='h-3/4'/></figure> */}
                        <div className='ml-5'>
                            <h2 className="text-5xl font-bold">Rider</h2>
                            <p className='text-justify mr-2'>Enjoy convenient rides at low prices. At XOX Rides we believe that getting you and your family moving should never break the bank. Together, we can move faster, safer, and cheaper while keeping our community first in mind. By making an early pledge, you'll unlock exclusive discounts and access to our amazing ride-sharing services available exclusively for our early supporters. Say goodbye to exorbitant prices and hello to a more affordable way of getting around. We're not just focused on saving you money; we're also dedicated to ensuring your safety and prioritizing our community. So Buckle up and let's hit the road together, Launching soon!

</p>
                            <div className="card-actions justify-start">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 mx-10 mb-5 border-black border'>
                <div>
                    <div className="h-3/4">
                        {/* <figure><img src={img} alt="car" /></figure> */}
                        <div className="card-body">
                            <h2 className="text-4xl font-bold px-3">Ambassador
</h2>
                            <p className='text-justify'>We are thrilled to introduce our ambassador program, where you can join us in transforming transportation as we know it. Our mission is simple, to make transportation faster, safer, and cheaper for our beloved communities. Join us today and become an ambassador for change. Let's get our communities moving and start earning together. As an ambassador, you'll not only contribute to the betterment of transportation, but you'll also enjoy the benefits of being a part of our forward-thinking company. Sign up today and one of our associates will be in touch with you shortly with more details.
</p>
                            <div className="card-actions justify-end">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className="text-4xl font-bold text-center mt-10">JOIN AS AN AMBASSADOR</h2>
                    <Link to="/ambassador-signup"><button className='btn bg-black  text-xl font-bold text-white  text-center  mt-5'>Ambassador</button></Link>
                </div>
                <div>
                    <img src={ambassador} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Market;
import React from 'react';
import img1 from '../../assets/1.webp'
import img2 from '../../assets/2.webp'
import img3 from '../../assets/3.webp'
import img4 from '../../assets/4.webp'

const HowItWork = () => {
    return (
        <div>
            <h1 className='text-5xl text-center my-10 font-bold'>How It Works</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-20'>
                <div className='m-10 '>
                    {/* <img src={img1} className="border p-10 rounded-full bg-amber-100 border-black mx-auto mb-5" alt="" /> */}
                    <div>
                        <p className='text-5xl font-bold text-center border border-black w-28 py-7 rounded-full mx-auto mb-5'>1</p> 
                    </div>
                    <div>
                        {/* <h3 className='text-3xl text-center '>Book your ride</h3> */}
                        <p className='text-center'>Choose your plan according to your transportation needs and pre-pay to start your journey with XOX Rides. Remember only our early backers will have the opportunity to get these offers. It’s a once in a lifetime opportunity to get savings this big. Take advantage and join the early backers club.</p>
                    </div>
                </div>
                <div className='m-10'>
                    {/* <img src={img2} className="border p-10 rounded-full bg-amber-100 border-black mx-auto mb-5" alt="" /> */}
                    <div>
                        <p className='text-5xl font-bold text-center border border-black w-28 py-7 rounded-full mx-auto mb-5'>2</p>
                    </div>
                    <div>
                        {/* <h3 className='text-3xl text-center'>Start your ride</h3> */}
                        <p className='text-center'>Once you choose and pay for your preferred plan, you will get a confirmation email with special code. Please save it, you will need your unique code to start using the XOX app once it’s ready for download. We’re working diligently to bring you the best possible experience in riding around LA.
</p>
                    </div>
                </div>
                <div className='m-10'>
                    {/* <img src={img3} className="border p-10 rounded-full bg-amber-100 border-black mx-auto mb-5" alt="" /> */}
                    <div>
                        <p className='text-5xl font-bold text-center border border-black w-28 py-7 rounded-full mx-auto mb-5'>3</p>
                    </div>
                    <div>
                        {/* <h3 className='text-3xl text-center'>End your ride</h3> */}
                        <p className='text-center'>We will notify you via email and text when launch date is near so you can download the XOX app and get you started enjoying your low cost and easy to use app for all your rides in and around LA! Remember XOX Rides will only be available in LA County, for now.</p>
                    </div>
                </div>
                <div className='m-10'>
                    {/* <img src={img4} className="border p-10 rounded-full bg-amber-100 border-black mx-auto mb-5" alt="" /> */}
                    <div>
                        <p className='text-5xl font-bold text-center border border-black w-28 py-7 rounded-full mx-auto mb-5'>4</p>
                    </div>
                    <div>
                        {/* <h3 className='text-3xl text-center'>Rate your ride</h3> */}
                        <p className='text-center'>When you need to purchase more rides, Don’t worry, you can simply pay and refill your card with the same plan or we can automatically refill it for you and your special pricing will stay the same. If you choose to opt out, you can simply enjoy on demand rides at regular prices. You will have these options in our app once it’s ready at launch.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;
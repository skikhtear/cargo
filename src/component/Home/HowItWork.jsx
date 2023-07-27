import React from 'react';
import img1 from '../../assets/1.webp'
import img2 from '../../assets/2.webp'
import img3 from '../../assets/3.webp'
import img4 from '../../assets/4.webp'

const HowItWork = () => {
    return (
        <div>
            <h1 className='text-5xl text-center my-10 font-bold'>How It Work</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-20'>
                <div className='m-10'>
                    <img src={img1} className="border p-10 rounded-full bg-amber-100 border-black mx-auto mb-5" alt="" />
                    <div>
                        <h3 className='text-3xl text-center '>Book your ride</h3>
                        <p className='text-center'>Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.</p>
                    </div>
                </div>
                <div className='m-10'>
                    <img src={img2} className="border p-10 rounded-full bg-amber-100 border-black mx-auto mb-5" alt="" />
                    <div>
                        <h3 className='text-3xl text-center'>Start your ride</h3>
                        <p className='text-center'>Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.</p>
                    </div>
                </div>
                <div className='m-10'>
                    <img src={img3} className="border p-10 rounded-full bg-amber-100 border-black mx-auto mb-5" alt="" />
                    <div>
                        <h3 className='text-3xl text-center'>End your ride</h3>
                        <p className='text-center'>Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.</p>
                    </div>
                </div>
                <div className='m-10'>
                    <img src={img4} className="border p-10 rounded-full bg-amber-100 border-black mx-auto mb-5" alt="" />
                    <div>
                        <h3 className='text-3xl text-center'>Rate your ride</h3>
                        <p className='text-center'>Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;
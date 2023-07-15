import React from 'react';
import contact from '../../assets/contact_info.webp'
import contact2 from '../../assets/contact_info-2.webp'
import contact3 from '../../assets/contact_info-3.webp'

const Contact = () => {
    return (
        <div>
            <div className='py-20 bg-amber-100'>
                <h1 className='text-5xl font-bold text-center'>Contact</h1>
            </div>
            <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2 my-10 lg:mx-32 md:mx-20 mx-10'>
                <div className='border border-black p-10'>
                    <img src={contact} alt="" className='mx-auto' />
                    <h3 className='text-3xl text-center my-4'>Address</h3>
                    <p>#</p>
                </div>
                <div className='border border-black p-10'>
                    <img src={contact2} alt="" className='mx-auto' />
                    <h3 className='text-3xl text-center my-4'>Phone</h3>
                    <p>#</p>
                </div>
                <div className='border border-black p-10'>
                    <img src={contact3} alt="" className='mx-auto' />
                    <h3 className='text-3xl text-center my-4'>Email</h3>
                    <p>#</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import carimg from '../../assets/95f6ddb4-bbea-46d9-8e08-d4d42899d320-removebg-preview.png'

const Aboutus = () => {
    return (
        <div className='bg-amber-100 lg:p-20 md:p-14 p-10'>
            <h2 className='text-5xl my-20 font-bold text-center '>About us.</h2>
            <div className='lg:flex md:flex lg:mx-40 md:mx-20'>
                <div>
                    <h2 className='text-3xl mb-5 font-bold'>Trusted Cab Services
                        in the World</h2>
                    <p className='mb-5'>Curabitur placerat cursus nisi nec pharetra. Proin quis tortor fringilla, placerat nisi nec, auctor ex. Donec commodo orci ac lectus mattis, sed interdum sem scelerisque.</p>
                    <ul>
                        <li className='flex mb-3'><FaCheckCircle className='mt-1' />Cras justo odio</li>
                        <li className='flex mb-3'><FaCheckCircle className='mt-1' />Cras justo odio</li>
                        <li className='flex mb-3'><FaCheckCircle className='mt-1' />Cras justo odio</li>

                    </ul>
                    <button className='btn bg-black text-white mt-5 hover:btn-warning text-xl font-bold'>READ MORE</button>
                </div>
                <div>
                    <img src={carimg} alt="" className='w-[1000px]' />
                </div>
            </div>
        </div>
        
    );
};

export default Aboutus;
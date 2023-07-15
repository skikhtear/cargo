import React from 'react';
import img from '../../assets/95f6ddb4-bbea-46d9-8e08-d4d42899d320.png'
const Packege = () => {
    return (
        <div className='my-20'>
            <h2 className='text-5xl font-bold text-center my-10'>Package</h2>
            <div className='grid gap-20 lg:grid-cols-3 md:grid-cols-2 lg:mx-40 md:mx-20 mx-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={img} alt="car" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Share your ride</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={img} alt="car" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Share your ride</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={img} alt="car" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Share your ride</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packege;
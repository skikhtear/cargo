import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({ pac }) => {
    const { title, price, subtitle, detailsField1, detailsField2, detailsField3, detailsField4 } = pac
    return (
        <div className="card bg-base-100 rounded-xl shadow-2xl shadow-black">
            <h2 className='text-4xl text-center font-bold bg-blue-900 text-white p-16'>{title}</h2>
            <div className="card-body text-xl text-center">
                <h1 className='text-5xl font-bold text-center '>${price}</h1>
                <p className='mb-5 text-sm'>{subtitle}</p>
                <h2 className=" mb-5">{detailsField1}</h2>
                <hr />
                <h2 className=" mb-5">{detailsField2}</h2>
                <hr />
                <h2 className=" mb-5">{detailsField3}</h2>
                <hr />
                <h2 className=" mb-5">{detailsField4}</h2>

                <div className="card-actions justify-center">
                    <Link to="/rider-signup"><button className="btn bg-black hover:btn-warning text-white">Buy Package</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
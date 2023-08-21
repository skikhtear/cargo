import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const PackageCard = ({ pac }) => {
    const [data, setData] = useState([]);

    const handleDelete = async (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this package');
        try {
            if (proceed) {
                const response = await fetch(`https://xoxrides-server.vercel.app/package/${id}`, { method: 'DELETE' }); // Replace 'API_ENDPOINT' with your actual API endpoint
                setData(data.filter((item) => item.id !== id));
                // if (data.deletedCount > 0) {
                //     toast('deleted successfully');
                //     window.location.reload();
                // }
                if (response.ok) {
                    setData(data.filter((item) => item.id !== id));
                    toast('Deleted successfully');
                    window.location.reload();
                } else {
                    toast('Failed to delete');
                }




            }

        } catch (error) {
            console.log('Error deleting data:', error);
        }
    };
    const { title, price, subtitle, detailsField1, detailsField2, detailsField3, detailsField4,_id } = pac
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
                    <button className="btn bg-black hover:btn-warning text-white">Buy Package</button>
                    <button className="btn bg-black hover:btn-warning text-white" onClick={() => handleDelete(_id)} >Delete</button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RiderSignup from './RiderSignup';

const MapSignup = () => {
    const payments = useLoaderData()
    console.log(payments);
    return (
        <div>
            {
                payments.map(payment => <RiderSignup
                    key={payment._id}
                    payment={payment}
                ></RiderSignup>)
            }
        </div>
    );
};

export default MapSignup;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EditRider from './EditRider';

const MapRider = () => {
    const riders =useLoaderData()
    return (
        <div>
            {
                riders.map(rider => <EditRider
                    key={rider._id}
                    rider={rider}
                ></EditRider>)
            }
        </div>
    );
};

export default MapRider;
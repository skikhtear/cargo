import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    const [drivers, setDrivers] = useState();
    const [riders, setRiders] = useState();
    const [ambassadors, setAmbassadors] = useState();
    const [packages, setPackages] = useState();

    useEffect(() => {
        fetch('https://xox-server-gb2y.onrender.com/driver')
            .then(res => res.json())
            .then(data => setDrivers(data))
    }, [])
    console.log(drivers);
    useEffect(() => {
        fetch('https://xox-server-gb2y.onrender.com/rider')
            .then(res => res.json())
            .then(data => setRiders(data))
    }, [])
    console.log(riders);
    // const riderLength = riders.length;
    // console.log(riderLength);

    useEffect(() => {
        fetch('https://xox-server-gb2y.onrender.com/ambassador')
            .then(res => res.json())
            .then(data => setAmbassadors(data))
    }, [])

   

    console.log(ambassadors);
    useEffect(() => {
        fetch('https://xox-server-gb2y.onrender.com/package')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    console.log(packages);
    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-10">
            <Link to="/dashboard/all-ambassadors">
                <div className="font-bold bg-green-700 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
                    <h1 className="text-[60px] mb-5">
                        {ambassadors && ambassadors.length}
                    </h1>
                    <h3 className="text-2xl">Ambassador</h3>
                </div>
            </Link>
            
            <Link to="/dashboard/all-drivers">
                <div className="font-bold bg-violet-500 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
                    <h1 className="text-[60px] mb-5">
                     {drivers && drivers.length}
                    </h1>
                    <h3 className="text-2xl">Driver</h3>
                </div>
            </Link>
            <Link to="/dashboard/all-riders">
                <div className="font-bold bg-red-700 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
                    <h1 className="text-[60px] mb-5">
                      {riders && riders.length}
                    </h1>
                    <h3 className="text-2xl">Rider</h3>
                </div>
            </Link>
            <Link to="/dashboard/all-packages">
                <div className="font-bold bg-blue-500 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
                    <h1 className="text-[60px] mb-5">
                        {packages&& packages.length}
                    </h1>
                    <h3 className="text-2xl">Packages</h3>
                </div>
            </Link>
            
            
        </div>
    );
};

export default DashboardHome;
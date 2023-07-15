import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-10">
            <Link to="/dashboard/all-ambassador">
                <div className="font-bold bg-green-700 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
                    <h1 className="text-[60px] mb-5">

                    </h1>
                    <h3 className="text-2xl">Ambassador</h3>
                </div>
            </Link>
            
            <Link to="/dashboard/all-package">
                <div className="font-bold bg-violet-500 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
                    <h1 className="text-[60px] mb-5">

                    </h1>
                    <h3 className="text-2xl">Packages</h3>
                </div>
            </Link>
        </div>
    );
};

export default DashboardHome;
import React, { useEffect, useState } from 'react';
import PackageCard from './PackageCard';

const Packeges = () => {
    const [packages, setPackages] = useState();

    useEffect(() => {
        fetch('https://xox-server-gb2y.onrender.com/package')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    console.log(packages);
    return (
        
        <div className='my-20'>
            
            <h2 className='text-5xl font-bold text-center my-10'>Packages</h2>
            <div className='grid gap-20 lg:grid-cols-3 md:grid-cols-2 lg:mx-40 md:mx-20 mx-10'>
                {packages &&
                    packages.map(pac => <PackageCard
                        key={pac._id}
                        pac={pac}
                    ></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Packeges;
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { toast } from 'react-hot-toast';


const AllRider = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://xox-api.vercel.app/rider'); // Replace 'API_ENDPOINT' with your actual API endpoint
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    

    const handleDelete = async (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this Driver information');
        try {
            if (proceed) {
                const response = await fetch(`https://xox-api.vercel.app/rider/${id}`, { method: 'DELETE' }); // Replace 'API_ENDPOINT' with your actual API endpoint
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

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
        },
        {
            name: 'Mobile',
            selector: (row) => row.mobile, 
        },
        {
            name: 'Email',
            selector: (row) => row.email,
        },
        {
            name: 'Invite Code',
            selector: (row) => row.invite_code,
        },
        {
            name: 'Delete',
            cell: (row) => (
                <button onClick={() => handleDelete(row._id)}>Delete</button>
            ),
            button: true,
        },
    ];

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>All Riders</h2>
            <input type="text" placeholder="Search" onChange={handleSearch} className='input input-info w-full max-w-xs my-5'/>
            
            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                striped
                responsive
                theme="solarized"
                selectableRows
            />
        </div>
    );
};

export default AllRider;

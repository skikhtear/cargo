import React, { useState } from 'react';
import register from '../assets/register_bg_2.png'


const PackagePost = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [detailsField1, setDetailsField1] = useState('');
    const [detailsField2, setDetailsField2] = useState('');
    const [detailsField3, setDetailsField3] = useState('');
    const [detailsField4, setDetailsField4] = useState('');
    const [payment, setPayment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create an object with the form data
        const formData = {
            title,
            price,
            subtitle,
            detailsField1,
            detailsField2,
            detailsField3,
            detailsField4,
            payment
        };

        try {
            // Make a POST request to your API endpoint
            const response = await fetch('https://xoxrides-server.vercel.app/add-package', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Check if the request was successful
            if (response.ok) {
                // Handle successful package addition
                console.log('Package added successfully!');
                window.location.href ="/dashboard/all-packages"
            } else {
                // Handle package addition error
                console.log('Failed to add package.');
            }
        } catch (error) {
            // Handle any network or API errors
            console.log('An error occurred:', error);
        }
    };
    return (
        <>
            <main>
                <section className="absolute w-full h-full">
                    <div
                        className="absolute top-0 w-full h-full bg-gray-500"
                        style={{
                            backgroundImage:
                                `url(${register})`,
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat"
                        }}
                    ></div>
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                    <div className="rounded-t mb-0 px-6 py-6">
                                        <div className="text-center mb-3">
                                            <h6 className="text-gray-600 text-2xl font-bold">
                                               Add Package 
                                            </h6>
                                        </div>
                                        
                                        <hr className="mt-6 border-b-1 border-gray-400" />
                                    </div>
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                        <form onSubmit={handleSubmit}>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                   Title
                                                </label>
                                                <input
                                                    type="text"
                                                    id="title"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Title"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                   Price
                                                </label>
                                                <input
                                                    
                                                    type="text"
                                                    id="price"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Price"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                   Subtitle
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subtitle"
                                                    value={subtitle}
                                                    onChange={(e) => setSubtitle(e.target.value)}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="subtitle"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Feture 1
                                                </label>
                                                <input
                                                    type="text"
                                                    id="detailsField1"
                                                    value={detailsField1}
                                                    onChange={(e) => setDetailsField1(e.target.value)}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Feture 1"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                   Feture 2
                                                </label>
                                                <input
                                                    type="text"
                                                    id="detailsField2"
                                                    value={detailsField2}
                                                    onChange={(e) => setDetailsField2(e.target.value)}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder=" Feture 2"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Feture 3
                                                </label>
                                                <input
                                                    type="text"
                                                    id="detailsField3"
                                                    value={detailsField3}
                                                    onChange={(e) => setDetailsField3(e.target.value)}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Feture 3"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                   Feture 4
                                                </label>
                                                <input
                                                    type="text"
                                                    id="detailsField4"
                                                    value={detailsField4}
                                                    onChange={(e) => setDetailsField4(e.target.value)}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Feture 4"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                   Payment Link
                                                </label>
                                                <input
                                                    type="text"
                                                    id="payment"
                                                    value={payment}
                                                    onChange={(e) => setPayment(e.target.value)}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Feture 4"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>

                                            
                                            

                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                    type="submit"
                                                    style={{ transition: "all .15s ease" }}

                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
};

export default PackagePost;
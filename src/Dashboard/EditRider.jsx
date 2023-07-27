import React, { useState } from "react";
import register from '../assets/register_bg_2.png'



export default function EditRider({rider}) {

    
    const [review, setReview] = useState(rider);

    const handleUpdateReview = event => {
        event.preventDefault();

        fetch(`https://xox-server-gb2y.onrender.com/rider-edit/${rider._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Rider updated')
                    console.log(data);
                    window.location.href ="/dashboard/all-riders"
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <>
            <main>
                <section className="absolute w-full h-full">
                    <div
                        className="absolute top-0 w-full h-full bg-gray-900"
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
                                                Edit Rider
                                            </h6>
                                        </div>

                                        <hr className="mt-6 border-b-1 border-gray-400" />
                                    </div>
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        
                                             <form onSubmit={handleUpdateReview} >
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        // value={name}
                                                        onChange={handleInputChange}
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        placeholder="Name"
                                                        style={{ transition: "all .15s ease" }}
                                                        required
                                                        defaultValue={rider && rider.name}
                                                    />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Mobile
                                                    </label>
                                                    <input
                                                    type="text"
                                                    name="mobile"

                                                        id="mobile"
                                                        // value={mobile}
                                                        onChange={handleInputChange}
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        placeholder="Mobile"
                                                        style={{ transition: "all .15s ease" }}
                                                        required
                                                        defaultValue={rider.mobile}

                                                    />
                                                </div>

                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Invite Code
                                                    </label>
                                                    <input
                                                    type="text"
                                                    name="invite_code"

                                                        id="invite_code"
                                                        // value={invite_code}
                                                        onChange={handleInputChange}
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        placeholder="Invite Code"
                                                        style={{ transition: "all .15s ease" }}
                                                        defaultValue={rider.invite_code}


                                                    />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                    type="email"
                                                    name="email"
                                                        id="email"
                                                        // value={email}
                                                        onChange={handleInputChange}
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        placeholder="Email"
                                                        style={{ transition: "all .15s ease" }}
                                                        required
                                                        defaultValue={rider.email}

                                                    />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                    type="password"
                                                    name="password"
                                                        id="password"
                                                        // value={password}
                                                        onChange={handleInputChange}
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        placeholder="Password"
                                                        style={{ transition: "all .15s ease" }}
                                                        required
                                                        defaultValue={rider.password}

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
                                <div className="flex flex-wrap mt-6">

                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
}

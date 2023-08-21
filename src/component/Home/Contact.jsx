import React, { useState } from 'react';
import contact from '../../assets/contact_info.webp'
import contact2 from '../../assets/contact_info-2.webp'
import contact3 from '../../assets/contact_info-3.webp'
import register from '../../assets/register_bg_2.png'


const Contact = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [your_content, setYour_content] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create an object with the form data
        const formData = {
            name,
            mobile,
            email,
            subject,
            your_content
        };

        try {
            // Make a POST request to your API endpoint
            const response = await fetch('https://xox-api-skikhtear.vercel.app/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Check if the request was successful
            if (response.ok) {
                // Handle successful signup
                console.log('contact info sent');
                try {
                    const nodemailerResponse = await fetch('https://xoxrides-server.vercel.app/contact-email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });

                    if (nodemailerResponse.ok) {
                        console.log('Email sent successfully!');
                    } else {
                        console.log('Failed to send email.');
                    }
                } catch (error) {
                    console.log('An error occurred while sending the email:', error);
                }
                // Make a request to the nodemailer API
                window.location.reload()
            } else {
                // Handle signup error
                console.log('contact info sent failed.');
            }
        } catch (error) {
            // Handle any network or API errors
            console.log('An error occurred:', error);
        }
    };
    return (
        <div>
            <div className='py-20 bg-amber-100'>
                <h1 className='text-5xl font-bold text-center'>Get in touch with us</h1>
            </div>
            
                    <section className="absolute w-full h-full">
                        <div
                            className="absolute top-0 w-full h-full bg-base-300"
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
                                                    Contact form
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
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        placeholder="Name"
                                                        style={{ transition: "all .15s ease" }}
                                                        required
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
                                                        id="mobile"
                                                        value={mobile}
                                                        onChange={(e) => setMobile(e.target.value)}
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        placeholder="Mobile"
                                                        style={{ transition: "all .15s ease" }}
                                                        required
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
                                                        id="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        placeholder="Email"
                                                        style={{ transition: "all .15s ease" }}
                                                        required
                                                    />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Subject
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        value={subject}
                                                        onChange={(e) => setSubject(e.target.value)}
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        placeholder="Subject"
                                                        style={{ transition: "all .15s ease" }}

                                                    />
                                                </div>

                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Your message
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        id="your_content"
                                                        value={your_content}
                                                        onChange={(e) => setYour_content(e.target.value)}
                                                        className="textarea textarea-bordered w-full"
                                                        placeholder="Your content"
                                                        style={{ transition: "all .15s ease" }}
                                                        required
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
                
            
        </div>
    );
};

export default Contact;
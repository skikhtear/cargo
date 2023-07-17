import React from 'react';
import img from '../../assets/95f6ddb4-bbea-46d9-8e08-d4d42899d320.png'
import driver from '../../assets/Driving-position-1160x653.jpg'
import rider from '../../assets/Driving-safely-with-passengers-in-the-car-1-e1463403059746.jpg'
import ambassador from '../../assets/istockphoto-1163423519-612x612.jpg'
import { Link } from 'react-router-dom';

const Market = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 border border-black border-2px mx-10 mb-5 mt-5'>
                <div>
                    <div>
                        {/* <figure><img src={img} alt="car" className='h-3/4' /></figure> */}
                        
                        <div className="ml-5 mt-3">
                            <h2 className="text-5xl font-bold">Get in the driver’s seat and get paid</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero optio aut iste ducimus ullam modi ad corrupti qui dolores architecto nobis soluta numquam nostrum voluptate iusto illo nesciunt, sunt libero illum suscipit. Veniam optio corrupti natus, labore eligendi quaerat dolore minus odio nam possimus eaque, adipisci, fugiat numquam obcaecati.</p>
                            <div className="card-actions justify-start">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-center mt-10'>
                        JOIN AS A DRIVER
                    </h2>
                    <Link to="/driver-signup"><button className='btn bg-black  text-xl font-bold mx-auto  text-white mt-5'>Driver</button></Link>
                </div>
                <div>
                    <img src={driver} alt="" className=''/>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 border border-black border-2px mx-10 mb-5'>
                <div>
                    <img src={rider} alt="" />
                </div>
                
                <div className='text-center'>
                    <h2 className="text-4xl font-bold text-center mt-10">JOIN AS A RIDER/PASSENGER</h2>
                    <Link to="/rider-signup"><button className='btn bg-black text-xl font-bold text-center  text-white mt-5'>Rider/Passenger</button></Link>
                </div>
                <div>
                    <div >
                        {/* <figure><img src={img} alt="car"  className='h-3/4'/></figure> */}
                        <div className='ml-5'>
                            <h2 className="text-5xl font-bold">Large Discounts, Price Protection, and Bike Rides</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam dolore, odio quibusdam voluptatem excepturi magnam, ab laboriosam hic repudiandae dolorem enim minima quae quis totam, placeat dolor dignissimos! Inventore, iusto. Natus consequuntur ducimus illo possimus neque vitae, officiis sequi tenetur distinctio sunt facilis quia impedit qui odit sapiente architecto dolorem voluptate ea, deserunt aspernatur. Quasi aspernatur dolorum animi molestias cumque. Expedita odio consequuntur quisquam iusto, tempora vel numquam aliquid!</p>
                            <div className="card-actions justify-start">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 border border-black border-2px mx-10 mb-5'>
                <div>
                    <div className="h-3/4">
                        {/* <figure><img src={img} alt="car" /></figure> */}
                        <div className="card-body">
                            <h2 className="text-5xl font-bold">Sell Our Package Take You Profit </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum impedit earum quasi hic dicta laboriosam qui perspiciatis, similique perferendis accusamus enim aperiam quas est, error autem consequuntur molestiae provident. Voluptates, repellat? Dolorem doloremque quia adipisci placeat blanditiis vitae, odio animi earum saepe at iusto ut illum magnam a sapiente!</p>
                            <div className="card-actions justify-end">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className="text-4xl font-bold text-center mt-10">JOIN AS A AMBASSADOR</h2>
                    <Link to="/ambassador-signup"><button className='btn bg-black  text-xl font-bold text-white  text-center  mt-5'>Ambassador</button></Link>
                </div>
                <div>
                    <img src={ambassador} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Market;
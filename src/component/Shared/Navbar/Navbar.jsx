import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-black text-white">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/package">Package</Link></li>
                            <li><Link to="about-us">About</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                            <li><Link to="/ambassador-signup">Ambassador</Link></li>
                        </ul>
                    </div>
                    <Link><a className="btn btn-ghost normal-case text-xl">XOX</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/package">Package</Link></li>
                        <li><Link to="/about-us">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/ambassador-signup"> Ambassador</Link></li>
                        
                    </ul>
                </div>
                <div className="navbar-end mr-10">
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">Sign Up</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24 text-black gap-3 font-bold">
                            <Link to="/driver-signup"><li className='hover:underline'>Driver</li></Link>
                            <Link to="/rider-signup"><li className='hover:underline'>Rider</li></Link>
                            <Link to="/ambassador-signup"><li className='hover:underline'>Ambassador</li></Link>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">Sign In</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24 text-black gap-3 font-bold ">
                            <Link to="/driver-signin"><li className='hover:underline'>Driver</li></Link>
                            <Link to="/rider-signin"><li className='hover:underline'>Rider</li></Link>
                            <Link to="/ambassador-signin"><li className='hover:underline'>Ambassador</li></Link>
                        </ul>
                    </div>
                    
                    {/* <a className="btn">Ambassador</a> */}
                    {/* <ul className='menu menu-horizontal px-1 text-xl'>
                        <Link to="/login"><li className='btn mr-5'>Sign In</li></Link> 
                        <Link to="/signup"><li className='btn mr-5'>Sign Up</li></Link> 
                       
                    </ul> */}
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
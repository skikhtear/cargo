import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/WhatsApp Image 2023-07-20 at 02.10.04.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white  text-base-content">
                <div>
                    <span className="footer-title">Help</span>
                    <Link to="/contact" className="link link-hover"> Customer support</Link>
                    <Link to="/about-us" className="link link-hover">Our story</Link>
                </div>
                <div>
                    {/* <span className="footer-title">Company</span>
                    <Link to={'/'} className="link link-hover">Home</Link>
                    <Link to={'/about-us'} className="link link-hover">About us</Link>
                    <Link to={'/contact'} className="link link-hover">Contact us</Link>
                    <Link to={'/package'} className="link link-hover">Package</Link>
                    <Link to={'/ambassador-signup'} className="link link-hover">Ambassador</Link> */}


                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/package" className="link link-hover">Sign up to rides</Link>
                    <Link to="/terms-and-condition" className="link link-hover">Terms and Conditions</Link>

                </div>
                <div>
                    <span className="footer-title">Legal policies</span>
                    <Link to="privacy-policy" className="link link-hover">Privacy policy</Link>
                    <Link to="cookies-policy" className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Contact</span>

                    <p className='font-bold'> XOX Rides,inc <br />3400 Cottage Way Ste G2  <br />Sacramento, Ca. 95825<br /> hello@xoxrides.com</p>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src={logo} alt="" />

                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">

                        <Link to="https://twitter.com/xoxrides"><FaTwitter className='text-3xl' /></Link>
                        <Link to="https://www.instagram.com/xoxrides/"><FaInstagram className='text-3xl' /></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100094687068520&mibextid=LQQJ4d"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
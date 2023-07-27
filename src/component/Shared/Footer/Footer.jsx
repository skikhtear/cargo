import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import logo from '../../../assets/WhatsApp Image 2023-07-20 at 02.10.04.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white  text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
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
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src={logo} alt="" />
                    <p className='text-2xl font-bold'>Xox ride </p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        
                        <Link to="https://www.instagram.com/xoxride/"><FaInstagram className='text-3xl'/></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100094687068520&mibextid=LQQJ4d"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                </div>
            </footer>    
        </div>
    );
};

export default Footer;
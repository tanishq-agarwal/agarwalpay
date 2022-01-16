import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='col-6 col-lg-3'>
                                    <h2>Company</h2>
                                    <ul>
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/service">Services</NavLink></li>                                   <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                </div>

                                <div className='col-6 col-lg-3'>
                                    <h2>Company</h2>
                                    <ul>
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/service">Services</NavLink></li>                                   <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <h2>Company</h2>
                                    <ul>
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/service">Services</NavLink></li>                                   <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                </div>

                                <div className='col-6 col-lg-3'>
                                    <h2>Follow Us</h2>
                                    <div className='row'>
                                        <div className='col-3 mx-auto'>
                                            <a href="https://www.facebook.com/tanishq.agarwal.353" target="_tanishq">
                                                <i className='fab fa-facebook-f fontawesome-style'></i>
                                            </a>
                                        </div>
                                        <div className='col-3 mx-auto'>
                                            <a href="https://www.instagram.com/iamtanishqagarwal/" target="_tanishq">
                                                <i className='fab fa-instagram fontawesome-style'></i>
                                            </a>
                                        </div>
                                        <div className='col-3 mx-auto'>
                                            <a href="https://www.linkedin.com/in/tanishq-agarwal-10a9371a0/" target="_tanishq">
                                                <i className='fab fa-linkedin fontawesome-style'></i>
                                            </a>
                                        </div>
                                        <div className='col-3 mx-auto'>
                                            <a href="https://github.com/tanishq-agarwal" target="_tanishq">
                                                <i className='fab fa-github fontawesome-style'></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='mt-5'>
                                <p className='main-hero-para text-center w-100'>&copy; 2021 AgarwalPay. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;

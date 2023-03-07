import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div className='bg-dark p-3 mt-3 text-white' style={{ fontFamily: 'serif' }}>
            <div className='row my-3'>
                <div className='col-2'>
                    <img
                        src="Logo.png"
                        width="70"
                        height="60"
                        className="d-inline-block align-top rounded-circle mx-2 d-none d-sm-inline"
                        alt="React Bootstrap logo"
                    />
                </div>
                <div className='col-5'>
                    <div className='row justify-content-center'>
                        <div className='col-4'>
                            <h4>Quick Links</h4>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-4'>
                                    <Link to={'/'} className='text-white' style={{ textDecoration: 'none' }}><h5>Home</h5></Link>
                                </div>
                                <div className='col-4'>
                                    <Link to={'/about'} className='text-white' style={{ textDecoration: 'none' }}><h5>About</h5></Link>
                                </div>
                                <div className='col-4'>
                                    <Link to={'/login'} className='text-white' style={{ textDecoration: 'none' }}><h5>Login</h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='row justify-content-center'>
                        <div className='col-4'>
                            <h4>Social Media</h4>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-3'>
                                    <Link to={'https://www.facebook.com/TransUnionCIBIL/'} target='_blank' className='text-white' style={{ textDecoration: 'none' }}><i className='mx-3'><FaFacebookF size={'2rem'} /></i></Link>
                                </div>
                                <div className='col-3'>
                                    <Link to={'https://twitter.com/CIBIL_Official'} target='_blank' className='text-white' style={{ textDecoration: 'none' }}><i className='mx-3'><FaTwitter size={'2rem'} /></i></Link>
                                </div>
                                <div className='col-3'>
                                    <Link to={'https://www.linkedin.com/company/credit-information-bureau-india-limited/'} target='_blank' className='text-white' style={{ textDecoration: 'none' }}><i className='mx-3'><FaLinkedinIn size={'2rem'} /></i></Link>
                                </div>
                                <div className='col-3'>
                                    <Link to={'mailto:nodalofficer@transunion.com'} target='_blank' className='text-white' style={{ textDecoration: 'none' }}><i className='mx-3'><SiGmail size={'2rem'} /></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row pt-3'>
                <div className='col-12'>
                    <h6>© Copyright 2023 Cibil System (Formerly: Credit Information Bureau (India) Limited). All Rights Reserved.</h6>
                </div>
            </div>
        </div>
    )
}


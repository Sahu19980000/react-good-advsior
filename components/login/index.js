"use client";
import React from 'react';

const LoginPanel = (props) => {

    const handleClose = () => {
        let ans = document.getElementsByClassName('login-container')[0];
        console.log(ans);
        ans.style.display="none";
    };

    return (
            <section className='login-container' >
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='sign-left'>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='sign-right p-5'>
                                <div className='cross-icon text-end'>
                                    <button onClick={handleClose}>
                                        <img src="../../images/icon/cross-icon.png" alt="Close" />
                                    </button>
                                </div>
                                <h5 className='heading mt-3 mb-3'>Sign in to your account</h5>
                                <p className='mt-3 mb-3'>Hey, Enter your details to get sign into your account </p>
                                <form>
                                    <div className='mt-3 mb-3 p-2 login-form'>
                                        <label className='text-muted'>Enter Mobile Number</label>
                                        <input type='text' placeholder='+91 00000 00000' className='sign-mobile-no' />
                                    </div>
                                    <button className='sign-btn'>Get Started</button>
                                </form>
                                <div className='mt-3 mb-3'>
                                    <p>Or Sign in with</p>
                                    <div className='social-media'>
                                        <img src='../../images/icon/facebook-original.png' className='img-fluid p-2' alt="Facebook" />
                                        <img src='../../images/icon/google-original.png' className='img-fluid p-2' alt="Google" />
                                        <img src='../../images/icon/apple.png' className='img-fluid p-2' alt="Apple" />
                                    </div>
                                </div>
                                <div className='mt-4 mb-3'>
                                    <p>Don’t have an account? Sign up now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
};

export default LoginPanel;

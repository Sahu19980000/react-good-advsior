import { Buttoncomponent } from '@/components/button'

import Link from 'next/link'
import React from 'react'
import Certificate from '../certificate-desc'
import Image from 'next/image'

const Good_advisor_registration = () => {
    return (
        <div className="good-advisor-gst-registration-container">
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-6 col-xl-4 col-12">
                        <div className="registration-step-box mt-4 rounded ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <b><h4 className='sub-heading text-white mt-2'>Apply for GST Registration</h4></b>
                                        <form action="" className='mt-3 '>
                                            <div className='p-2 mb-2 form-input rounded'>
                                                <label className='w-100'>Email</label>
                                                <input type="email" name="gst-email" id="gst-email" placeholder='alpinetechnologies@gmail.com' />
                                            </div>
                                            <div className='p-2 mb-2 form-input'>
                                                <label className='w-100'>Mobile Number</label>
                                                <input type="tel" name="gst-tel" id="gst-tel" placeholder='alpinetechnologies@gmail.com' />
                                            </div>
                                            <div className='p-2 mb-2 form-input'>
                                                <label className='w-100'>City/Pincode</label>
                                                <input type="email" name="gst-email" id="gst-email" placeholder='Nagpur' />
                                            </div>
                                            <div className='mt-4 mb-2'>
                                                <Buttoncomponent title_data="Get Started" color="#ffffff" />
                                            </div>

                                            <div className=''>
                                                <div className='text-white gst-notification'>Get easy updates through  <Image src="/images/whatspp.png" className='Image-fluid' width={20} height={20} alt="whatspp-icon"/>&nbsp;Whatsapp&nbsp;
                                                <input type="checkbox" id="cbx" style={{ display: "none" }} />
                                                        <label for="cbx" class="toggle"><span></span></label>
                                                    <span class="checkbox">
                                                     
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-8 col-12 certificate" >
                        <Certificate />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Good_advisor_registration
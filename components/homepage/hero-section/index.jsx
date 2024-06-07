"use client";
import Image from 'next/image';
import React from 'react'

const Hero_section = () => {

    const gst_array = ["company registration", "gst registration", 
    "trademark" , "Accounting & Business Compliance " , "e-FIR" ,"GST Resistration"];

    return (
        <section className="register-companies">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-section-container">
                            <h2 className='text-white pt-3 '>We register <span style={{ color: "#f6f6f6" }}>10%</span> of all
                                Indian companies</h2>
                            <h4 className='text-white pt-3'>That’s one company every 9 minutes</h4>
                            <input type="text" name="" id="good-advisor-search" placeholder='Try ' />

                            <div className='all-type-gst-data'>
                                
                                {
                                    gst_array.map((ele , index)=>{
                                        return(
                                            <div className="services-box" key={index}>
                                               <p>{ele}</p>
                                             </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <Image src="/images/legal-services-platform.png"
                                    className='Image-fluid'
                                    alt="legal-services-platform"  width={1000} height={130}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero_section;

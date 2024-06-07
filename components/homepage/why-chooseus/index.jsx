import Link from 'next/link'
import React from 'react'
import Card_box from './card-box'
import Subheading from '@/components/all-shared/sub-heading'

const Whychooseus = () => {
    return (
        <section className='Why-choose-us-container'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12 d-flex flex-column justify-content-center ">
                        <div className='customer-left p-5' >
                            <Subheading  title="Reason Why Customers Love Us" textAlign="start"/>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                        <Link href="/">Documents Required</Link>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="reasons-box">
                                    <Card_box image="../../images/icon/easy-to-use-dashboard.png" 
                                    title="Easy-to-Use Dashboard" 
                                    para="Complete the entire process and chat with us from your dashboard!"
                                    />
                                </div>
                                <div className="reasons-box">
                                    <Card_box image="../../images/icon/lawyes.png" 
                                    title="Lawyers, Chartered 
                                    Accountants, & Company 
                                    Secretaries in One Place" 
                                    para="From registering a company to compliance, all the services you need are here on GoodAdvisor."
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="reasons-box">
                                    <Card_box image="../../images/icon/professional-services.png" 
                                    title="Professional Services at 
                                    Affordable Prices" 
                                    para="Usually, “professional” equals “expensive,” but not at GoodAdvisor!"
                                    />
                                </div>
                                <div className="reasons-box">
                                    <Card_box image="../../images/icon/quick-support.png" 
                                    title="Quick Support" 
                                    para="All your queries answered within 24 hours."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whychooseus

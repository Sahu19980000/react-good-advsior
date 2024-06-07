import Subheading from '@/components/all-shared/sub-heading';
import React from 'react'

const Our_supporter = () => {
  return (
    <section className='our-supporter-container'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 ">
                <h2 className='text-black pt-3 text-center heading'></h2>
                    <Subheading  title="Our Supporter" textalign="center"/>
                    <img src='../../images/our-supporter.png' className='img-fluid'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Our_supporter;

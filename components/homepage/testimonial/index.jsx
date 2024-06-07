import React from 'react'
import TestimonialCards from './testimonial-card';

const Testimonial_container = () => {
  return (
    <section className='testimonial_container '>
      <div className="container">
         <div className="row">  
            <div className="col-12">
            <h2 className='text-center pt-3 pb-3 heading'>What people say about us</h2>
            <TestimonialCards />
            </div>
         </div>
      </div>
    </section>
  )
}

export default Testimonial_container;

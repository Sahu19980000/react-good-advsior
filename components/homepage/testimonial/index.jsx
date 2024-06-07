import React from 'react'
import TestimonialCards from './testimonial-card';
import Subheading from '@/components/all-shared/sub-heading';

const Testimonial_container = () => {
  return (
    <section className='testimonial_container '>
      <div className="container">
         <div className="row">  
            <div className="col-12">
              <Subheading title="What people say about us" textalign="center"/>
            <TestimonialCards />
            </div>
         </div>
      </div>
    </section>
  )
}

export default Testimonial_container;

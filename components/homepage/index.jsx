import React from 'react'
import Hero_section from './hero-section';
import Our_supporter from './our-supporter';
import Whychooseus from './why-chooseus';
import Our_services from './our-services';
import Testimonial_container from './testimonial';

const Homepage = () => {
  return (
    <div>
      <Hero_section />
      <Our_services />
      <Whychooseus />
      <Testimonial_container />
      <Our_supporter />
    </div>
  )
}
export default Homepage;

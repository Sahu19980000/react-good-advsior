import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footerfile = () => {
  return (
    <footer>
      <div className="container p-3">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
            <div className="footer-list-box">
              <div className="logo">
                <Link href="/">
                <img src="../../images/logo.png" />
                </Link>
                <h5>good adviosr</h5>
              </div>
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="social-icon">
                <FontAwesomeIcon icon={faFacebook} className='p-2 text-white' />
                <FontAwesomeIcon icon={faInstagram} className='p-2 text-white' />
                <FontAwesomeIcon icon={faYoutube} className='p-2 text-white' />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-12 ">
            <div className="footer-list-box ">
              <h4 className='text-white '>Start a business</h4>
              <ul>
                <li>Basic of GST</li>
                <li>GST Enrolllment</li>
                <li>GST Registration Process</li>
                <li>GST Eligibility</li>
                <li>Why Do Companies Need GSTIN ?</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="footer-list-box">
              <h4 className='text-white'>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="footer-list-box">
              <h4 className='text-white'>Support</h4>
              <ul>
                <li>Faq</li>
                <li>Privacy & Policy</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="footer-list-box">
              <h4 className='text-white'>Contact Us</h4>
              <ul>
                <li>E. Hello@company.com</li>
                <li>A. Lorem </li>
                <li>P. (+91)00000 0000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footerfile;

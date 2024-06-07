import Image from 'next/image';
import React from 'react'

const Certificate = () => {
  return (
    <div className='gst-registration-feature'>
      <div className='container'>
         <div className="row">
           <div className="col-lg-12">
              <h2 className='heading'>GST Registration Online 
at</h2>
              <ul className='list-certificate-feature'>
                <li className=''>
                    <Image src='/images/arrow-icon.png' width={50} height={50} alt="arrow-icon"/>
                    <div className='certificate-container'>
                    <h4>Timely submission of application</h4>
                     <p>100% compliance assurance so that you can focus only on your business</p>
                    </div>
                </li>
                <li className=''>
                    <Image src='/images/arrow-icon.png' width={50} height={50} alt="arrow-icon"/>
                    <div className='certificate-container'>
                    <h4>Timely submission of application</h4>
                     <p>100% compliance assurance so that you can focus only on your business</p>
                    </div>
                     
                </li>
                <li className=''>
                    <Image src='/images/arrow-icon.png' width={50} height={50} alt="arrow-icon"/>
                    <div className='certificate-container'>
                    <h4>Timely submission of application</h4>
                     <p>100% compliance assurance so that you can focus only on your business</p>
                    </div>
                </li>
                <li className=''>
                    <Image src='/images/arrow-icon.png' width={50} height={50} alt="arrow-icon"/>
                    <div className='certificate-container'>
                    <h4>Timely submission of application</h4>
                     <p>100% compliance assurance so that you can focus only on your business</p>
                    </div>
                </li>
                <Image src='/images/image-client.png' className='img-fluid p-4' width={600} height={100} alt="arrow-icon"/>
              </ul>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Certificate;
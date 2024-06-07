import Image from 'next/image';
import React from 'react'

const Certificate = () => {
  return (
    <div className='registration-feature'>
      <div className='container'>
         <div className="row">
           <div className="col-lg-12">
              <h2 className='heading'>10 Lakh+ PT Registrations Certificate Submitted Successfully</h2>
              <ul className='list-certificate-feature'>
                <li  >
                    <Image src='/images/arrow-icon.png' alt='arrow-icon' width={25} height={25}/>
                    <div className='certificate-container'>
                    <h4>Timely submission of application</h4>
                     <p>100% compliance assurance so that you can focus only on your business</p>
                    </div>
                     
                </li>
                <li >
                    <Image src='/images/arrow-icon.png' alt='arrow-icon' width={25} height={25}/>
                    <div className='certificate-container'>
                    <h4>Timely submission of application</h4>
                     <p>100% compliance assurance so that you can focus only on your business</p>
                    </div>
                     
                </li>
                <li >
                    <Image src='/images/arrow-icon.png' alt='arrow-icon' width={25} height={25}/>
                    <div className='certificate-container'>
                    <h4>Timely submission of application</h4>
                     <p>100% compliance assurance so that you can focus only on your business</p>
                    </div>
                     
                </li>
                <li > 
                    <Image src='/images/arrow-icon.png' alt='arrow-icon' width={25} height={25}/>
                    <div className='certificate-container'>
                    <h4>Timely submission of application</h4>
                     <p>100% compliance assurance so that you can focus only on your business</p>
                    </div>
                     
                </li>
              </ul>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Certificate;
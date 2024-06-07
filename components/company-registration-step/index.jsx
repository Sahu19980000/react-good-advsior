"use client"
import React, { createContext, useState } from 'react';
import Formone from './form-one';
import Formtwo from './form-two';
import Formthree from './form-three';
import Formstep from './form-step';
import Certificate from './certificate-desc';
import Link from 'next/link';
import { Buttoncomponent } from '../button';

export const ThemeContext = createContext(33);

const Company_registration_step = () => {

  const [step, setStep] = useState(0);
  const [width, setWidth] = useState(33);

  const[formdata,setformdata] = useState({
      "entity" :"solar propership",
      "employees_details":{
        "first":0,
        "second":30,
        "third":60
      },
      "name":"",
      "email":"",
      "city":""
  })

  const get_nextform = () => {
    setStep(prevStep => prevStep + 1);
    setWidth(prevWidth => prevWidth + 33);

    if (step === 4 || width === 99) {

      let get_data = document.getElementsByClassName("registration-step-box")[0];
      let get_certificate = document.getElementsByClassName("certificate")[0];
      console.log(get_certificate);
      get_data.style.display = "none";
      get_certificate.style.display = "none";
      console.log(get_data);
    }
  };

  const get_backform = () => {
    setStep(prevStep => prevStep - 1);
    setWidth(prevWidth => prevWidth - 33);

    if (step === -1 || width === 0) {
      let get_data = document.getElementsByClassName("registration-step-box")[0];
      let get_certificate = document.getElementsByClassName("certificate")[0];
      console.log(get_certificate);
      console.log(get_data);
    }
  };

  const value = {
    "width": width,formdata,setformdata
};

  return (
    <ThemeContext.Provider value={value}>
      <div className="good-advisor-registration-container">
        <div className='container-fluid'>
          <div className="row">
            <div className="col-lg-4 col-12">
              <Link href="/">
              <img src='../../images/logo.png' /><br />
              </Link>
              <h5 style={{ display: "none" }} className='heading_data'><Link href="/">Home</Link></h5>
              <div className="registration-step-box m-2 rounded">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <Formstep />
                      {step === 0 && <Formone type=""/>}
                      {step === 1 && <Formtwo />}
                      {step === 2 && <Formthree />}
                      <div className='d-flex justify-content-between' style={{ width: "170px" }}>
                        <span onClick={get_nextform}>
                          <Buttoncomponent title_data="Next" />
                        </span>
                        {
                          step > 0 && <span onClick={get_backform}>
                            <Buttoncomponent title_data="Back" />
                          </span>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 certificate" >
              <Certificate />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Company_registration_step;

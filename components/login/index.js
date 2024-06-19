"use client";
import React, { useState } from "react";

const LoginPanel = (props) => {

  const [form,Setform ] = useState(true);
   
  const handleClose = () => {
    let ans = document.getElementsByClassName("login-container")[0];
    
    console.log(ans);
    ans.style.display = "none";
  };

  const show_form = (data)=>{
   if(data == 'signup'){
    Setform(false);
   }
   else{
    Setform(true);
   }
    
  } 

  return (
    <section className="login-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="sign-left"></div>
          </div>
          <div className="col-lg-4">
            <div className="sign-right p-5">
              <div className="cross-icon text-end">
                <button onClick={handleClose}>
                  <img src="../../images/icon/cross-icon.png" alt="Close" />
                </button>
              </div>
              {
                form ? <div className="login-box">
                <h5 className="heading mt-3 mb-3">Sign in to your account</h5>
                <p className="mt-3 mb-3">
                  Hey, Enter your details to get sign into your account{" "}
                </p>

                <form>
                  <div className="mt-3 mb-3 p-2 login-form">
                    <label className="text-muted">enter email id</label>
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="sign-email"
                    />
                  </div>
                  <div className="mt-3 mb-3 p-2 login-form">
                    <label className="text-muted">enter password </label>
                    <input
                      type="text"
                      placeholder="example:1234"
                      className="sign-password"
                    />
                  </div>
                  <button className="sign-btn">Get Started</button>
                </form>

                <div className="mt-4 mb-3">
                  <p >
                    Don’t have an account?{" "}
                    <a href="#" onClick={()=>show_form("signup")}>Sign up now</a>
                  </p>
                </div>
              </div>:''
              }

              {
                form ? '':<div className="signup-box">
                <h5 className="heading mt-3 mb-3">
                  Sigup in to your account
                </h5>
                <p className="mt-3 mb-3">
                  Hey, Enter your details to get signup into your account{" "}
                </p>

                <form>
                <div className="mt-3 mb-3 p-2 login-form">
                    <label className="text-muted">enter full name </label>
                    <input
                      type="text"
                      placeholder="enter your name"
                      className="sign-email"
                    />
                </div>
                  <div className="mt-3 mb-3 p-2 login-form">
                    <label className="text-muted">enter email id</label>
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="sign-email"
                    />
                  </div>
                  
                  <div className="mt-3 mb-3 p-2 login-form">
                    <label className="text-muted">enter phone no </label>
                    <input
                      type="text"
                      placeholder="example:+91000000"
                      className="sign-email"
                    />
                  </div>

                  <div className="mt-3 mb-3 p-2 login-form">
                    <label className="text-muted">enter password </label>
                    <input
                      type="text"
                      placeholder="example:1234"
                      className="sign-email"
                    />
                  </div>

                  <button className="signup-btn">Get Started</button>
                </form>

                <div className="mt-4 mb-3">
                  <p>please <a href="#" onClick={()=>show_form('login')}>login now</a></p>
              </div>
            </div>
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPanel;

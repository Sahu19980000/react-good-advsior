"use client";
import Login_panel from '@/components/login';
import React, { useEffect, useState } from 'react';
import Megamenu from './megamenu';
import { Buttoncomponent } from '@/components/button';
import Link from 'next/link';


const HeaderFile = ({userProfile}) => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [islogin ,setloginopen] = useState(false);
  const [error ,setError] = useState();
  const[username,Setusername] = useState(null);

 console.log('header userprofile',userProfile);
 Setusername(userProfile)
 console.log(username.username);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleLoginClick = () => {
        setloginopen(true); 
        let ans = document.getElementsByClassName('login-container')[0];
        console.log(ans);
        ans.style.display="block";
  };

  return (
    <header className='good-advsior-header-section'>
      <div className="container-fluid">
        <div className="row">
          <p className='warning-msg'>Professional tax is mandatory in your state! Avoid penalties.   </p>
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg ">
              <div className="container">
                <Link href="/">
                <img
                  src="../../images/logo.png"
                  width={250}
                  height={50}
                  alt="good advisor logo"
                />
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                {
                  !isMenuOpen ?'':<div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ">
                    <li className="nav-item ">
                    <a className="nav-link" href="#">
                        Consult an expert
                        </a>
                    </li>
                    <li className="nav-item">
                    <Megamenu />
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Tax & Compliance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Trademark & IP</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Documentation</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Others</a>
                    </li>
                    <li className="nav-item" onClick={handleLoginClick}>
                      
                    {username != null ? username : <Buttoncomponent title_data="Login" />}
                    </li>
                  
                  </ul>
                </div>
                }
              </div>
            </nav>
          </div>
        </div>
      </div>
      {
        islogin && <Login_panel />
      }
    </header>
  );
};

export default HeaderFile;

"use client";
import Login_panel from '@/components/login';
import React, { useEffect, useState } from 'react';
import Megamenu from './megamenu';
import { Buttoncomponent } from '@/components/button';
import Link from 'next/link';

const HeaderFile = ({ userProfile }) => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [islogin, setloginopen] = useState(false);
  const [username, Setusername] = useState(null);

  useEffect(() => {
    if (userProfile) {
      Setusername(userProfile.username);
    }
  }, [userProfile]);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleLoginClick = () => {
    setloginopen(true);
    let ans = document.getElementsByClassName('login-container')[0];
    ans.style.display = "block";
  };

  const handleLogout = async () => {
    try {
      const res = await fetch(
        'https://dish.najmainternational.com/api/user/logout',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
      }

      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userdata');
      Setusername(null);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <header className='good-advsior-header-section'>
      <div className="container-fluid">
        <div className="row">
          <p className='warning-msg'>Professional tax is mandatory in your state! Avoid penalties.</p>
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
                  !isMenuOpen ? '' : <div className="collapse navbar-collapse" id="navbarNav">
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
                        {username != null ? (
                          <>
                            <span>Welcome, {username}</span>
                            <button onClick={handleLogout} className="btn btn-link">Logout</button>
                          </>
                        ) : <Buttoncomponent title_data="Login" />}
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

"use client";

import React, { useEffect, useState } from 'react';
import HeaderFile from './header';
import Footerfile from './footer';

const Layout = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token');
    setToken(storedToken);
    
    const fetchUserProfile = async () => {
      try {
        const res = await fetch('https://dish.najmainternational.com/api/user/details', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
        }

        const data = await res.json();
        setUserProfile(data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (storedToken) {
      fetchUserProfile();
    }
  }, []);

  return (
    <>
      <HeaderFile userProfile={userProfile} />
      {children}
      <Footerfile />
    </>
  );
};

export default Layout;

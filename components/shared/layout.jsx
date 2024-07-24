"use client"

import React, { useEffect, useState } from 'react'
import HeaderFile  from './header'
import Footerfile from './footer'

const Layout = ({children}) => {

  const[userProfile,SetuserProfile] = useState(null);
  const [token,setToken] = useState(null);
 
   useEffect(() => {
     const token = window.localStorage.getItem('token');
     setToken(token);
 
     const handleGetUserDetails = async () => {
       try {
         const res = await fetch(
           "https://dish.najmainternational.com/api/user/details",
           {
             method: "GET",
             headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
             },
           }
         );
   
         if (!res.ok) {
           throw new Error(
             `HTTP error! status: ${res.status} - ${res.statusText}`
           );
         }
         
         const data = await res.json();
         SetuserProfile(data);
         console.log("user details", userProfile);
       } catch (err) {
         setError(err.message);
         console.log("user error", err);
       }
     };
 
     handleGetUserDetails();
   }, [token]);

  return (
    <>
    <HeaderFile userProfile={userProfile}/>
    {children}
    <Footerfile />
    </>
  )
}
export default Layout;

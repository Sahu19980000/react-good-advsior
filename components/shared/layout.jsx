import React from 'react'
import HeaderFile  from './header'
import Footerfile from './footer'

const Layout = ({children}) => {
  return (
    <>
    <HeaderFile />
    {children}
    <Footerfile />
    </>
  )
}
export default Layout;

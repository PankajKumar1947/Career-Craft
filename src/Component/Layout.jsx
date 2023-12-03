import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar1 from './Navbar/Navbar1'
import Navbar2 from './Navbar/Navbar2'

const Layout = () => {
  return (
    <>
        <Navbar1/>
        <Navbar2/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
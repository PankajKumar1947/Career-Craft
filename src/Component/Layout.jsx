import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer/Footer.jsx'
import Home from '../Pages/Home.jsx'
import SignUp from '../Component/Login/SignUp.jsx'
import Login from '../Component/Login/Login.jsx'
import Explore from '../Pages/Explore.jsx'
import Checkout from './Checkout/Checkout.jsx'
import Dashboard from '../Pages/Dashboard.jsx'

const Layout = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/explore' element={<Explore/>}/>
                <Route path='/explore/enroll' element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  )
}

export default Layout
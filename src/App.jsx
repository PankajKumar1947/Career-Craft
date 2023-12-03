import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Component/Login/SignUp'
import Login from './Component/Login/Login'
import Dashboard from './Pages/Dashboard'
import Explore from './Pages/Explore'
import Checkout from './Component/Checkout/Checkout'
import Layout from './Component/Layout'

function App() {

  return (
    <>
    
    <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>} />
                <Route path='/explore' element={<Explore/>}/>
                <Route path='/explore/enroll' element={<Checkout/>}/>
                </Route>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App

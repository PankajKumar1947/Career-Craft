import React from 'react'
import logo from '../Assests/logo.png'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <>
        <div className='flex max-w-[95%] gap-4 mx-auto px-3 py-1 items-center '>
          <Link to={"/"}>
          <div><img src={logo} alt="" /></div>
          </Link>
            
            <div className='bg-gray-100 w-full relative rounded-md py-1'>
                <input type="text" placeholder='Search by product title' className='w-[95%] lg:w-[40%] px-2 py-2 rounded-md ml-2 ' />
            </div>
            <Link to={"/signup"}>
            <button className='text-black bg-yellow-400 hover:bg-yellow-600 px-4 py-3 rounded-md '>Login/Register</button>
            </Link>
            
        </div>
    </>
  )
}

export default Navbar1
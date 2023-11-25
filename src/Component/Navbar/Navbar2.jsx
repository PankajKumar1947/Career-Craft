import React from 'react'
import desktop from '../Assests/desktop.png'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
        <div className=' max-w-[95%] gap-4 mx-auto px-3 py-1 rounded-md  bg-[#F2F2F2] text-black '>
            <div className='flex justify-around items-center'>
                <div className='flex gap-2 items-center'>
                    <p>Courses</p>
                    
                </div>

                <Link to={"/dashboard"}>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <img src={desktop} alt="" />
                    <p className='hidden md:block lg:block'>Your Dashboard</p>
                </div>
                </Link>

                <div>Checkout</div>
            </div>

        </div>
        
    </>
  )
}

export default Navbar2
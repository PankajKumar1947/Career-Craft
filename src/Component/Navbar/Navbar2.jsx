import React from 'react'
import desktop from '../Assests/desktop.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
        <div className=' max-w-[95%] gap-4 mx-auto px-3  rounded-md  bg-[#F2F2F2] text-black sticky top-0 z-10'>
            <div className='flex justify-around items-center'>
                <div className='flex gap-2 items-center'>
                    <NavLink to={"/"}
                    className={({isActive})=>` ${isActive ? 'bg-black text-white px-4 py-1 rounded-2xl' : 'text-black'}`}>
                        Home
                    </NavLink>
                </div>

            
                <NavLink 
                to={"/dashboard"} 
                className={({isActive})=>` ${isActive ? 'text-blue-500' : 'text-black'} flex gap-2 items-center cursor-pointer`}>
                    <img src={desktop} alt="" />
                    <p className='hidden md:block lg:block'>Your Dashboard</p>
                </NavLink>
                

                <NavLink to={"/courses"}
                    className={({isActive})=>` ${isActive ? 'bg-black text-white px-4 py-1 rounded-2xl' : 'text-black'}`}>
                        Courses
                </NavLink>
            </div>

        </div>
        
    </>
  )
}

export default Navbar2
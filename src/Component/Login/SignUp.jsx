import React from 'react'
import logo from '../Assests/logo.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    
    <div className='bg-black min-h-[100vh] px-3 pb-5'>
            <Link to={"/"}><img src={logo} alt="" className='cursor-pointer'/></Link>
            <div className='text-white max-w-[520px] mx-auto mt-2 lg:mt-0'>
                <h1 className='text-center text-2xl font-semibold'>Welcome ! </h1>
                <p className='text-center mt-2 '>Sign up to access exclusive data science content and resources</p>
                {/* input box */}
                <div className='flex flex-col justify-center items-center  mt-7 gap-4 text-green-600 font-semibold'>
                    <input type="text" placeholder='Username' className='w-full p-2 placeholder-black rounded-sm' />
                    <input type="text" placeholder='Your full Name' className='w-full p-2 placeholder-black rounded-sm' />  
                    <input type="text" placeholder='Username' className='w-full p-2 placeholder-black rounded-sm' />  
                    <input type="password" placeholder='Enter a strong password' className='w-full p-2 placeholder-black rounded-sm' />  
                    <input type="password" placeholder='Email' className='w-full p-2 placeholder-black rounded-sm' />  
                    <input type="text" placeholder='Phone Number' className='w-full p-2 placeholder-black rounded-sm' />  
                
                </div>
                <button className=' bg-yellow-600 text-black font-semibold mt-8 py-2 w-full hover:bg-yellow-700 rounded-sm '>Create Accouont</button>
                
                
                <p className='text-center mt-3 font-mono'>Already have an acoount ? <Link to={"/login"} className='italic underline hover:text-red-500'>Login here</Link> </p>
                
                
            </div>
            <div className='w-full flex justify-center items-center mt-7'>
                <Link to={"/"} >
                    <button className='bg-white text-black  font-semibold px-5 py-1 rounded-full hover:bg-gray-500 text-xl'>Home</button>
                </Link>
            </div>
        </div>
  )
}

export default SignUp
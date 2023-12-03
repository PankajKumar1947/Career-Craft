import React from 'react'
import logo from '../Assests/logo.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    
    <div className='bg-black min-h-[100vh] px-3 pb-5 '>
            <div className='flex justify-between items-center'>
                <Link to={"/"}><img src={logo} alt="" className='cursor-pointer  h-[50px] md:h-[70px]'/></Link>
                <div className='text-xl rounded-full'>
                    <Link to={"/"}><i class="fa-solid fa-house"></i></Link>
                </div>
            </div>
            
            <div className='text-white max-w-[520px] mx-auto mt-2 lg:mt-0 bg-gray-500 bg-opacity-40 rounded-md p-2' >
                <h1 className='text-center text-2xl font-semibold'>Welcome ! </h1>
                <p className='text-center mt-2 '>Sign up to access exclusive data science content and resources</p>
                {/* input box */}
                <div className='flex flex-col justify-center items-center  mt-7 gap-4 text-black '>
                    <input type="text" placeholder='Username' className='w-full p-2  rounded-md outline-0' />
                    <input type="text" placeholder='Your full Name' className='w-full p-2  rounded-md outline-0' />  
                    <input type="text" placeholder='Username' className='w-full p-2  rounded-md outline-0' />  
                    <input type="password" placeholder='Enter a strong password' className='w-full p-2  rounded-md outline-0' />  
                    <input type="password" placeholder='Email' className='w-full p-2  rounded-md outline-0' />  
                    <input type="text" placeholder='Phone Number' className='w-full p-2  rounded-md outline-0' />  
                
                </div>
                <button className=' bg-[#FCFB00] hover:bg-[#b9b959] text-black font-semibold mt-6 py-2 w-full rounded-md '>Create Accouont</button>
                
                
                <p className='text-center mt-3 font-mono'>Already have an acoount ? <Link to={"/login"} className='italic underline hover:text-red-500'>Login here</Link> </p>
                
                
            </div>
        </div>
  )
}

export default SignUp
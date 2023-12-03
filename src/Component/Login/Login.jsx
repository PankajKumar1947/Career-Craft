import React from 'react'
import logo from '../Assests/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className='bg-black min-h-[100vh] px-3'>
            <div className='flex justify-between items-center'>
                <Link to={"/"}><img src={logo} alt="" className='cursor-pointer  h-[50px] md:h-[70px]'/></Link>
                <div className='text-xl rounded-full'>
                    <Link to={"/"}><i class="fa-solid fa-house"></i></Link>
                </div>
            </div>
            <div className='text-white max-w-[520px] mx-auto mt-4 lg:mt-0 bg-gray-500 bg-opacity-40 rounded-md p-2'>
                <h1 className='text-center text-2xl font-semibold'>Welcome back to Data Science</h1>
                <p className='text-center mt-3 '>Sign in to explore our courses and career opportunities</p>
                {/* input box */}
                <div className='flex flex-col justify-center items-center  mt-9 gap-5 text-green-600 font-semibold'>
                    <input type="text" placeholder='Username' className='w-full p-2 outline-0 rounded-md' />
                    <input type="password" placeholder='Password' className='w-full p-2 outline-0 rounded-md' />  
                
                </div>
                <button className=' bg-[#FCFB00] hover:bg-[#b9b959] text-black font-semibold mt-8 py-2 w-full  rounded-md '>Sign in</button>
                <p className='text-sm text-center mt-1 cursor-pointer hover:text-gray-200'>Forgot your password ?</p>
               
               <div className='flex gap-3 justify-between items-center mt-4'>
                    <p className='bg-gray-600 h-[1px] w-[30%]'></p>
                    <p className='italic text-center'>or continue with</p>
                    <p className='bg-gray-600 h-[1px] w-[30%]'></p>
               </div>
                
                {/* sign methhod */}
                <div className='flex justify-between mt-6'>
                    <button className='px-5 py-2 bg-gray-400 text-black font-semibold w-[48%] hover:text-cyan-900 rounded-md'>Google</button>
                    <button className='px-5 py-2 bg-gray-400 text-black font-semibold w-[48%] hover:text-cyan-900 rounded-md'>Phone no.</button>
                </div>

                <p className='text-center mt-5 font-mono'>New to Career Craft Academy ? <Link to={"/signup"} className='italic underline hover:text-red-500'>Register here</Link> </p>
                
                
            </div>
            
        </div>
    </>
  )
}

export default Login
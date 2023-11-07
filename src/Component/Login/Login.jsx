import React from 'react'
import logo from '../Assests/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className='bg-black min-h-[100vh] px-3'>
        <Link to={"/"}><img src={logo} alt="" className='cursor-pointer'/></Link>
            <div className='text-white max-w-[520px] mx-auto mt-4 lg:mt-0'>
                <h1 className='text-center text-2xl font-semibold'>Welcome back to Data Science</h1>
                <p className='text-center mt-3 '>Sign in to explore our data science courses and career opportunities in</p>
                {/* input box */}
                <div className='flex flex-col justify-center items-center  mt-9 gap-5 text-green-600 font-semibold'>
                    <input type="text" placeholder='Username' className='w-full p-2 placeholder-black rounded-sm' />
                    <input type="password" placeholder='Password' className='w-full p-2 placeholder-black rounded-sm' />  
                
                </div>
                <button className=' bg-yellow-600 text-black font-semibold mt-8 py-2 w-full hover:bg-yellow-700 rounded-sm '>Sign in</button>
                <p className='text-sm text-center mt-1'>Forgot your password ?</p>
               
               <div className='flex gap-3 justify-between items-center mt-9'>
                    <p className='bg-gray-600 h-[1px] w-[30%]'></p>
                    <p className='italic text-center'>or continue with</p>
                    <p className='bg-gray-600 h-[1px] w-[30%]'></p>
               </div>
                
                {/* sign methhod */}
                <div className='flex justify-between mt-6'>
                    <button className='px-5 py-2 bg-gray-400 text-black font-semibold w-[48%] hover:text-cyan-900'>Google</button>
                    <button className='px-5 py-2 bg-gray-400 text-black font-semibold w-[48%] hover:text-cyan-900'>Phone no.</button>
                </div>

                <p className='text-center mt-5 font-mono'>New to Career Craft Academy ? <Link to={"/signup"} className='italic underline hover:text-red-500'>Register here</Link> </p>
                
                
            </div>

            <div className='w-full flex justify-center items-center mt-7'>
                <Link to={"/"} >
                    <button className='bg-white text-black  font-semibold px-5 py-1 rounded-full hover:bg-gray-500 text-xl'>Home</button>
                </Link>
            </div>
            
        </div>
    </>
  )
}

export default Login
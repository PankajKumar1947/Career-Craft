import React from 'react'
import logo from '../Assests/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='bg-black text-white pb-5 mt-6'>
            <div className='max-w-[92%] mx-auto pt-5 pb-10 flex justify-between flex-wrap'>
                <div>
                    <div><img src={logo} alt="" /></div>
                    <div className='flex gap-2 items-center opacity-80 mt-4'>
                        <i className="fa-solid fa-envelope"></i>
                        <p className='text-sm'>support@careercraft.com</p>
                    </div>
                    <div className='flex gap-2 items-center opacity-80 mt-2'>
                        <i className="fa-solid fa-phone"></i>
                        <p className='text-sm '>+91 99999999999</p>
                    </div>
                    <div className='text-xl flex gap-3 justify-start items-center mt-4'>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-telegram"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-discord"></i>
                    </div>
                </div>

                {/* second */}
                <div>
                    <h1 className='text-xl font-semibold mt-6'>Company</h1>
                    <p className='bg-orange-500 h-1 rounded-xl mt-2'></p>
                    <div className='flex gap-10 mt-4 text-gray-300' >
                        <div className='flex flex-col gap-2'>
                            <a className='hover:underline cursor-pointer underline-offset-2'>About us</a>
                            <a className='hover:underline cursor-pointer underline-offset-2'>FAQ</a>
                            <a className='hover:underline cursor-pointer underline-offset-2'>Privay policy</a>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Link to={"/contact"} className='hover:underline cursor-pointer underline-offset-2'>
                            Contact us
                            </Link>
                            <a className='hover:underline cursor-pointer underline-offset-2'>Job assurance</a>
                            <a className='hover:underline cursor-pointer underline-offset-2'>Terms and condition</a>
                        </div>
                        
                    </div>

                </div>
                {/* third */}
                <div>
                    <h1 className='text-xl font-semibold mt-6'>Products</h1>
                    <p className='bg-orange-500 h-1 rounded-xl  mt-2'></p>
                    <div className='flex gap-10 mt-4 text-gray-300' >
                        <div className='flex flex-col gap-2'>
                            <a className='hover:underline cursor-pointer underline-offset-2'>Mentors</a>
                            <a className='hover:underline cursor-pointer underline-offset-2'>Experience Portal</a>
                            <a className='hover:underline cursor-pointer underline-offset-2'>Hall of fame</a>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <a className='hover:underline cursor-pointer underline-offset-2'>Job Portal</a>
                            <a className='hover:underline cursor-pointer underline-offset-2'>Become an affliate</a>
                        </div>
                        
                    </div>

                </div>

            </div>
            
        </div>
    </>
  )
}

export default Footer
import React from 'react'
import profile from '../Assests/profile.png'

const Profile = () => {
  return (
    <>
        <div className='max-w-[500px] bg-gradient-to-br from-gray-100 via-gray-400 to-gray-950 mx-auto rounded-3xl '>
            <h1 className='text-center text-2xl'>My Profile</h1>
            <div className='flex justify-center gap-4 items-center mt-4'>
                <img src={profile} alt=""  className='w-[40%]'/>
                <i className="fa-solid fa-file-arrow-up text-4xl text-white"></i>
            </div>
            
            <div className='flex flex-col gap-4 pb-5 mt-7'>
                <div className='flex justify-between px-4 items-center gap-5'>
                    <h1 className='text-cyan-black'>First Name*</h1>
                    <input type="text" placeholder='Mohani' className='md:w-[60%] lg:w-[70%] px-3 py-1 border-2 rounded-md '/>
                </div>
                <div className='flex justify-between px-4 items-center gap-5'>
                    <h1 className='text-cyan-black'>Second Name*</h1>
                    <input type="text" placeholder='Kholia' className='md:w-[60%] lg:w-[70%] px-3 py-1 border-2 rounded-md '/>
                </div>
                <div className='flex justify-between px-4 items-center gap-5'>
                    <h1 className='text-cyan-black'>Email *</h1>
                    <input type="email" placeholder='mohanikholiya@gmail.com' className='md:w-[60%] lg:w-[70%] px-3 py-1 border-2 rounded-md '/>
                </div>
                <div className='flex justify-between px-4 items-center gap-5'>
                    <h1 className='text-cyan-black'>Phone Number*</h1>
                    <input type="text" placeholder='+91 999999999' className='md:w-[60%] lg:w-[70%] px-3 py-1 border-2 rounded-md '/>
                </div>
            </div>
            
            <div className='flex justify-center'>
                <button className='bg-red-400 px-5 py-2 font-semibold text-white rounded-md hover:bg-red-500'>Save changes</button>
            </div>
            <p className='text-center text-red-600 text-sm hover:underline cursor-pointer font-semibold mt-4 pb-5'>Delete Account</p>
            
            
        </div>
    </>
  )
}

export default Profile
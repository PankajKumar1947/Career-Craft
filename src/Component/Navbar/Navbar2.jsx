import React from 'react'
import desktop from '../Assests/desktop.png'

const Navbar2 = () => {
  return (
    <>
        <div className=' max-w-[95%] gap-4 mx-auto px-3 py-1 rounded-md  bg-gray-100 text-black '>
            <div className='flex justify-around items-center'>
                <div className='flex gap-2 items-center'>
                    <p>Courses</p>
                    <select name="" id="" className='bg-transparent'>
                        
                        
                    </select>
                </div>

                <div className='flex gap-2 items-center'>
                    <img src={desktop} alt="" />
                    <p>Your Dashboard</p>
                </div>

                <div>Checkout</div>
            </div>

            
        </div>
    </>
  )
}

export default Navbar2
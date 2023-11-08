import React from 'react'
import checkoutImage from '../Assests/checkoutImage.png'
import Navbar1 from '../Navbar/Navbar1'
import Navbar2 from '../Navbar/Navbar2'

const Checkout = () => {
    let originalPrice=7000;
    let Discount=3000;
  return ( 
    <>
        <Navbar1/>
        <Navbar2/>
        <div className='max-w-[700px] mt-8 mx-3 md:mx-auto lg:mx-auto p-4 px-5  pt-8 shadow-md shadow-black rounded-xl bg-gradient-to-br from-yellow-300  to-black text-black'>
            <div className='flex justify-between gap-3'>
                <img src={checkoutImage} alt="" className='w-[25%] hidden md:block lg:block'/>
                <div className='flex flex-col justify-around'>
                    <h1 className='text-xl font-bold '>Decode Data Science with Machine Learning 1.0</h1>
                    <div className='flex items-center flex-col lg:flex-row  mt-2 gap-4 rounded-md'>
                        <h2 className='text-red-600 font-bold'>Have any coupen ?</h2>
                        <div className='relative  flex-1 bg-white rounded-md'>
                            <input type="text" className='w-full px-2 py-1 rounded-md' placeholder='Enter your coupen code ' />
                            <button className='absolute right-0 top-0 bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-1'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white mt-5 rounded-md flex flex-col gap-1 py-3'>
                <div className='flex justify-between px-4'>
                    <p className='font-bold'>Sub Total:</p>
                    <p className='text-gray-500'>₹{originalPrice}</p>
                </div>
                <div className='flex justify-between px-4'>
                    <p className='font-bold'>Discount:</p>
                    <p className='text-red-500'>- ₹{Discount}</p>
                </div>
                <div className='h-[1px] bg-gray-800 mx-4 mt-2'></div>
                <div className='flex justify-between px-4'>
                    <p className='font-bold text-green-500'>Total:</p>
                    <p className='text-green-400'>₹{originalPrice-Discount}</p>
                </div>
            </div>

            <div className='flex justify-center items-center my-4'>
                <button className='bg-yellow-300 hover:bg-yellow-600 w-[70%] lg:w-[40%]  mt-4 py-2 rounded-md '>Proceed To Checkout</button>
            </div>
            
        </div>
    </>
  )
}

export default Checkout
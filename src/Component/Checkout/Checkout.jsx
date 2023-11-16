import React from 'react'
import checkoutImage from '../Assests/checkoutImage.png'
import Navbar1 from '../Navbar/Navbar1'
import Navbar2 from '../Navbar/Navbar2'
import { useLocation } from 'react-router-dom'

const Checkout = () => {
    let originalPrice=7000;

    const location=useLocation();
    console.log(location.state)
    const checkoutData=location.state.checkoutData;
    const discount=checkoutData.originalPrice-checkoutData.currentPrice;
  return ( 
    <>
        <Navbar1/>
        <Navbar2/>
        <div className='max-w-[700px] mt-8 mx-3 md:mx-auto lg:mx-auto p-4 px-2 lg:px-5  lg:pt-8 shadow-md shadow-black rounded-xl bg-gradient-to-br from-yellow-300  to-black text-black'>
            <div className='flex justify-center gap-3'>
                <img src={checkoutImage} alt="" className='w-[200px] h-[150px] hidden md:block lg:block'/>
                <div className='flex flex-col justify-around flex-1'>
                    <h1 className='text-xl font-bold  '>{checkoutData.title}</h1>
                    <div className='flex items-center flex-col lg:flex-row  mt-2 gap-4 rounded-md'>
                        <h2 className='text-red-600 font-bold'>Have any coupen ?</h2>
                        <div className='relative w-full   bg-white rounded-md'>
                            <input type="text" className='w-full px-2 py-1 rounded-md placeholder-text-xs' placeholder='Enter your coupen code ' />
                            <button className='absolute right-0 top-0 bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-1'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white mt-5 rounded-md flex flex-col gap-1 py-3'>
                <div className='flex justify-between px-4'>
                    <p className='font-bold'>Sub Total:</p>
                    <p className='text-gray-500'>₹{checkoutData.originalPrice}</p>
                </div>
                <div className='flex justify-between px-4'>
                    <p className='font-bold'>Discount:</p>
                    <p className='text-red-500'>- ₹{discount}</p>
                </div>
                <div className='h-[1px] bg-gray-800 mx-4 mt-2'></div>
                <div className='flex justify-between px-4'>
                    <p className='font-bold text-green-500'>Total:</p>
                    <p className='text-green-400'>₹{checkoutData.currentPrice}</p>
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
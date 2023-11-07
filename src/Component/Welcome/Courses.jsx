import React from 'react'
import userIcon from '../Assests/userIcon.png'
import timerIcon from '../Assests/timerIcon.png'
import jobIcon from '../Assests/jobIcon.png'
import collegeIcon from '../Assests/collegeWorking.png'
import discount from '../Assests/percentage.png'
import { Link } from 'react-router-dom'

const Courses = ({eachCourse}) => {
  return (
    <>
    <div className='border-2 w-full mt-8 p-2 px-4 pb-5 rounded-lg'>
        <div className='  p-4 rounded-xl flex justify-between   gap-5 flex-col lg:flex-row '>
            <div className=' w-[100%] lg:w-[50%] '>
                <img src={eachCourse.img} alt="" className=' rounded-xl h-[200px] md:h-full lg:h-full w-[100%] ' />
            </div>
            <div className=' flex-1 bg-yellow-300 text-black flex flex-col justify-around items-start p-4 rounded-xl'>
                <div className='flex justify-center gap-5 items-center '>
                    <img src={userIcon} alt="" />
                    <p className='text-md font-semibold '>{eachCourse.instructorName} <span className='text-sm text-gray-700'>and 4 more</span></p>
                </div>
                <div className='flex justify-center gap-5 items-center '>
                    <img src={timerIcon} alt="" />
                    <p className='text-md font-semibold  '>Starts on {eachCourse.startDate} </p>
                </div>
                <div className='flex justify-center gap-5 items-center '>
                    <img src={jobIcon} alt="" />
                    <p className='text-md font-semibold  '>{eachCourse.mode} </p>
                </div>
                <div className='flex justify-center gap-5 items-center '>
                    <img src={collegeIcon} alt="" />
                    <p className='text-md font-semibold  '>{eachCourse.eligible} </p>
                </div>
            </div>
        </div>
        <h1 className='text-2xl text-center mt-4'>{eachCourse.title}</h1>
        <div className='flex justify-center gap-5 items-center mt-5'>
            <div>
                <p className='text-xl font-semibold'>₹{eachCourse.currentPrice} <span className='text-sm line-through font-extralight'>₹{eachCourse.originalPrice}</span></p>
            </div>
            <div className='flex items-center gap-2'>
                <img src={discount} alt="" />
                <p className='text-green-500'>{eachCourse.discount}% Discount</p>
            </div>
        </div>

        <div className='flex justify-center gap-4 items-center mt-5'>
            <Link to={"explore"}>
            <button className='bg-yellow-500 font-semibold px-8 py-2 rounded-md hover:bg-yellow-600'>Enroll Now</button>
            </Link>
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
            <button className='bg-yellow-500 font-semibold px-8 py-2 rounded-md hover:bg-yellow-600'>Add to Cart</button>
        </div>
    </div>
        
    </>
  )
}

export default Courses
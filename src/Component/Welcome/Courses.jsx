import React from 'react'
import userIcon from '../Assests/userIcon.png'
import timerIcon from '../Assests/timerIcon.png'
import jobIcon from '../Assests/jobIcon.png'
import collegeIcon from '../Assests/collegeWorking.png'
import discount from '../Assests/percentage.png'
import { useNavigate } from 'react-router-dom'

const Courses = ({eachCourse}) => {

    const navigate=useNavigate();

  return (
    <>
    <div className=' mt-8 p-3 lg:pt-3 lg:px-4 pb-3 rounded-xl bg-gray-800 max-w-[300px] md:max-w-[700px]  lg:max-w-[700px] '>
        <div className='p-2 lg:p-3 rounded-xl flex justify-between  flex-col md:flex-row lg:flex-row md:gap-3  bg-[#FCFB00] '>
            <div className=' w-[100%] md:w-[50%]  lg:w-[50%] '>
                <img src={eachCourse.img} alt="" className='h-[150px] md:h-[200px] lg:h-[200px]  w-[100%] rounded-t-xl md:rounded-xl lg:rounded-xl ' />
            </div>
            <div className=' flex-1  text-black flex flex-col justify-around items-start py-2 lg:p-4 '>
                <div className='flex justify-center gap-2 md:gap-3 lg:gap-5 items-center '>
                    <img src={userIcon} alt="" className='w-[30px]' />
                    <p className='text-sm lg:text-md font-semibold '>{eachCourse.instructorName} <span className='text-sm text-gray-700'>and 4 more</span></p>
                </div>
                <div className='flex justify-center gap-2 md:gap-3 lg:gap-5 items-center '>
                    <img src={timerIcon} alt="" className='w-[30px]' />
                    <p className='text-sm lg:text-md font-semibold  '>Starts on {eachCourse.startDate} </p>
                </div>
                <div className='flex justify-center gap-2 md:gap-3 lg:gap-5 items-center '>
                    <img src={jobIcon} alt="" className='w-[30px]' />
                    <p className='text-sm lg:text-md font-semibold  '>{eachCourse.mode} </p>
                </div>
                <div className='flex justify-center gap-2 md:gap-3 lg:gap-5 items-center '>
                    <img src={collegeIcon} alt="" className='w-[30px]' />
                    <p className='text-sm lg:text-md font-semibold  '>{eachCourse.eligible} </p>
                </div>
            </div>
        </div>
        <h1 className='text-md md:text-2xl lg:text-2xl text-center mt-3'>{eachCourse.title}</h1>
        <div className='flex justify-center gap-2 md:gap-4 lg:gap-5 items-center mt-2'>
            <div>
                <p className='text-md font-semibold'>₹ {eachCourse.currentPrice} <span className='text-xs decoration-solid decoration-green-500 line-through font-bold '>₹ {eachCourse.originalPrice}</span></p>
            </div>
            <div className='flex items-center gap-2'>
                <img src={discount} alt="" className='w-[40px]' />
                <p className='text-green-500 italic '>{eachCourse.discount}% Discount</p>
            </div>
        </div>

        <div className='flex justify-center gap-2 lg:gap-4 items-center mt-2 text-black'>
            <button
            onClick={()=>{navigate('/explore',{replace:false, state:{eachCourse} })}}
            className='bg-[#FCFB00] font-semibold px-4 md:px-6 text-sm lg:px-8 py-2 rounded-md hover:bg-[#b9b959]'>Enroll Now</button>
            <i className="fa-solid fa-cart-shopping text-2xl text-white"></i>
            <button className='bg-[#FCFB00] font-semibold px-4 md:px-6 text-sm lg:px-8 py-2 rounded-md hover:bg-[#b9b959]'>Add to Cart</button>
        </div>
    </div>
        
    </>
  )
}

export default Courses
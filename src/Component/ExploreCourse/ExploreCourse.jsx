import React from 'react'
import video1 from '../Assests/video1.png'
import duration1 from '../Assests/duration1.png'
import startDateImg from '../Assests/startDate.png'
import languageImg from '../Assests/language.png'
import play from '../Assests/play.png'
import discount from '../Assests/percentage.png'
import master from '../Assests/master.png'
import pandas from '../Assests/pandasIcon.png'
import matplotlit from '../Assests/matplotlit.png'
import plotly from '../Assests/plotly.png'
import numpy from '../Assests/numpy.png'
import rightArrowIcon from '../Assests/rightArrowIcon.png'
import { Link, useNavigate } from 'react-router-dom'
import Faculty from '../Faculty/Faculty'
import Banner from './Banner'
import CourseOfferings from './CourseOfferings'
import { useLocation } from 'react-router-dom'

const ExploreCourse = () => {

    //taking data from course card (home routes)
    const location=useLocation();
    console.log(location.state);
    const eachCourse=location.state.eachCourse;

    //for sending data to checkout routes
    const navigate=useNavigate();
    const checkoutData={
        title:eachCourse.title,
        originalPrice:eachCourse.originalPrice,
        currentPrice:eachCourse.currentPrice,
    }

  return (
    <>
        <div className='max-w-[1000px] mx-auto px-3'>
            <div className='max-w-[500px] md:max-w-full lg:max-w-full mx-auto flex justify-around  mt-8 flex-wrap bg-[#FCFB00] md:bg-transparent lg:bg-transparent rounded-lg py-2 gap-3'>
                {/* left */}
                <div className='w-full md:w-[35%] lg:w-[35%] relative h-[180px] lg:h-[200px] px-2'>
                    <img src={video1} alt="" className='w-full h-[100%] lg:h-[110%] rounded-2xl' />
                    
                    <img src={play} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-105' />
                </div>
                {/* right */}
                <div className='border-2 w-full md:w-[33%] lg:w-[33%] lg:border-gray-400 md:border-gray-400 border-none rounded-md flex flex-col justify-around px-4 bg-[#FCFB00] text-black '>
                    <div className='flex gap-3 items-center '>
                        <img src={duration1} alt="" className='w-[45px]' />
                        <p className='text-2xl font-bold'>{eachCourse.duration}</p>
                        <p className='text-green-700 text-sm mt-2 font-semibold'>Duration</p>
                    </div>
                    <div className='flex gap-3 items-center '>
                        <img src={startDateImg} alt=""  className='w-[45px]'/>
                        <p className='text-2xl font-bold'>{eachCourse.startDate}</p>
                        <p className='text-green-700 text-sm mt-2 font-semibold'>Starts On</p>
                    </div>
                    <div className='flex gap-3 items-center mt-3 '>
                        <img src={languageImg} alt=""  className='w-[45px]'/>
                        <p className='text-2xl font-bold'>{eachCourse.language}</p>
                        <p className='text-green-700 text-sm mt-2 font-semibold'>Language</p>
                    </div>
                </div>
            </div>

            <h1 className='text-2xl lg:text-3xl text-center mt-9 font-bold'>{eachCourse.title}</h1>
            <div className='w-[95%] lg:w-[70%] mx-auto mt-4'>
                <p className='text-sm mx-2 lg:mx-10 text-center'>{eachCourse.desc}</p>
            </div>
            <div className='flex justify-center items-center gap-8 mt-5'>
                <div>
                    <h1 className='text-xl font-bold'>₹{eachCourse.currentPrice} <span className='text-sm line-through font-semibold opacity-80'>₹{eachCourse.originalPrice}</span></h1>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={discount} alt="" />
                    <p className='text-green-600'>{eachCourse.discount}% Discount</p>
                </div>
            </div>
            <p className='text-center text-gray-400 text-sm'>* EMI Options Available</p>
            
            
            <div className='h-[50px] flex justify-center items-center gap-5 mt-2'>
                <button
                onClick={()=>{navigate('/explore/enroll',{replace:false,state:{checkoutData}})}}
                className='bg-[#FCFB00] hover:bg-[#b9b959] text-md font-semibold px-8 py-2 rounded-md text-black'>Enroll Now</button>
                
            </div>
    
           
            
        </div>

        {/* banner */}
        <Banner banner={eachCourse.banner}/>

        {/* Course offerings */}
        <CourseOfferings/>

        {/* master the technolgy0 */}
        <div className='mt-10 px-3 max-w-[900px] mx-auto' >
            <div className='flex justify-center relative '>
                <img src={master} alt=""/>
                <h1 className='absolute -mt-6 md:mt-0 lg:mt-5  text-xl md:text-3xl lg:text-3xl font-semibold'>Master these Technology</h1>
            </div>
        </div>

        {/* skillsicon */}
        <div className='w-full px-2 mt-6 '>
            <div className='flex justify-around  h-[80px] py-3  border-2 rounded-lg overflow-hidden'>
                <img src={pandas} alt="" />
                <img src={matplotlit} alt="" />
                <img src={plotly} alt="" />
                <img src={numpy} alt="" />
                <img src={rightArrowIcon} alt="" className='border-2 ' />
            </div>
            

        </div>


        {/* learn from the best */}
        <Faculty/>
        

    </>
  )
}

export default ExploreCourse
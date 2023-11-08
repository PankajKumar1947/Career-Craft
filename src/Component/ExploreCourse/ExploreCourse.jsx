import React from 'react'
import video from '../Assests/video1.png'
import duration1 from '../Assests/duration1.png'
import startDate from '../Assests/startDate.png'
import language from '../Assests/language.png'
import play from '../Assests/play.png'
import discount from '../Assests/percentage.png'
import share from '../Assests/share.png'
import brain from '../Assests/brain.png'
import minElig from '../Assests/minElig.png'
import roles from '../Assests/roles.png'
import mode from '../Assests/mode.png'
import project from '../Assests/projects.png'
import quiz from '../Assests/quiz.png'
import certificate from '../Assests/certificate.png'
import mentors from '../Assests/mentors.png'
import material from '../Assests/materials.png'
import support from '../Assests/support.png'
import leftTiltArrow from '../Assests/leftTiltArrow.png'
import rightTiltArrow from '../Assests/rightTiltArrow.png'
import master from '../Assests/master.png'
import masterTable from '../Assests/masterTable.png'
import pandas from '../Assests/pandasIcon.png'
import matplotlit from '../Assests/matplotlit.png'
import plotly from '../Assests/plotly.png'
import numpy from '../Assests/numpy.png'
import rightArrowIcon from '../Assests/rightArrowIcon.png'
import leftArrow from '../Assests/leftArrow.png'
import rightArrow from '../Assests/rightArrow.png'
import FacultyCard from '../Faculty/FacultyCard'
import { Link } from 'react-router-dom'
import facultyList from '../DataFolder/facultyList'
import { useState } from 'react'

const ExploreCourse = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if(currentIndex===0)
            setCurrentIndex(facultyList.length-1);
        else
            setCurrentIndex(currentIndex-1);
    };

  const handleNext = () => {
        if(currentIndex===facultyList.length-1)
            setCurrentIndex(0);
        else
            setCurrentIndex(currentIndex+1)
  };

  return (
    <>
        <div className='max-w-[1000px] mx-auto px-3'>
            <div className=' flex justify-around  mt-8 flex-wrap bg-yellow-500 md:bg-transparent lg:bg-transparent rounded-lg py-2 gap-3'>
                {/* left */}
                <div className='w-full md:w-[35%] lg:w-[35%] relative h-[180px] lg:h-[200px] px-2'>
                    <img src={video} alt="" className='w-full h-[100%] lg:h-[110%] rounded-2xl' />
                    <img src={play} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-105' />
                </div>
                {/* right */}
                <div className='border-2 w-full md:w-[33%] lg:w-[33%] lg:border-gray-400 md:border-gray-400 border-none rounded-md shadow-md lg:shadow-gray-600 flex flex-col justify-around px-4 bg-yellow-500 text-black '>
                    <div className='flex gap-3 items-center '>
                        <img src={duration1} alt="" className='w-[45px]' />
                        <p className='text-2xl font-bold'>4 Months</p>
                        <p className='text-green-700 text-sm mt-2 font-semibold'>Duration</p>
                    </div>
                    <div className='flex gap-3 items-center '>
                        <img src={startDate} alt=""  className='w-[45px]'/>
                        <p className='text-2xl font-bold'>24 Nov 2023</p>
                        <p className='text-green-700 text-sm mt-2 font-semibold'>Starts On</p>
                    </div>
                    <div className='flex gap-3 items-center mt-3 '>
                        <img src={language} alt=""  className='w-[45px]'/>
                        <p className='text-2xl font-bold'>English</p>
                        <p className='text-green-700 text-sm mt-2 font-semibold'>Language</p>
                    </div>
                </div>
            </div>

            <h1 className='text-2xl lg:text-3xl text-center mt-9 font-bold'>Decoding Data Science With Machine Learning 1.0</h1>
            <div className='w-[95%] lg:w-[70%] mx-auto mt-4'>
                <p className='text-sm mx-2 lg:mx-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero quibusdam sed, dicta accusamus voluptatem repudiandae! Eaque consequatur nostrum fugiat accusamus voluptas saepe aspernatur quia. Veniam dolore praesentium error. Sapiente officiis dolores minus aut cumque placeat corrupti a quo laboriosam, necessitatibus veniam numquam vitae laborum saepe, amet architecto consectetur fugit.</p>
            </div>
            <div className='flex justify-center items-center gap-8 mt-5'>
                <div>
                    <h1 className='text-xl font-bold'>₹3500 <span className='text-sm line-through font-semibold opacity-80'>₹7000</span></h1>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={discount} alt="" />
                    <p className='text-green-600'>50% Discount</p>
                </div>
            </div>
            <p className='text-center text-gray-400 text-sm'>* EMI Options Available</p>
            
            <Link to={"/explore/enroll"}>
            <div className='h-[50px] flex justify-center items-center gap-5 mt-2'>
                <button className='bg-yellow-500 hover:bg-yellow-600 text-md font-semibold px-8 py-2 rounded-md text-black'>Enroll Now</button>
                
            </div>
            </Link>
           
            
        </div>

        {/* banner */}
        <div className='flex  flex-wrap bg-gray-500 text-black mt-5 w-full justify-around items-center gap-2 py-2'>
            <div className='flex gap-2 justify-center items-center'>
                <img src={brain} alt="" />
                <div>
                    <h1 className='font-semibold'>Skills You Will Gain</h1>
                    <p className='text-gray-200 text-sm'>Python, Machine Learning, Statistics</p>
                </div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <img src={minElig} alt="" />
                <div>
                    <h1 className='font-semibold'>Minimum Eligibility</h1>
                    <p className='text-gray-200 text-sm'>Anyone</p>
                </div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <img src={roles} alt="" />
                <div>
                    <h1 className='font-semibold'>Roles After Completion</h1>
                    <p className='text-gray-200 text-sm'>Python, Machine Learning, Statistics</p>
                </div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <img src={mode} alt="" />
                <div>
                    <h1 className='font-semibold'>Learning Mode</h1>
                    <p className='text-gray-200 text-sm'>Hybrid</p>
                </div>
            </div>
        </div>

        {/* Course offerings */}
        <div className='mt-8 px-4'>
            <h1 className='text-center text-2xl font-mono'>Course Offerings</h1>
            <div className='flex items-center justify-center mt-4'>
                <div>
                    <img src={project} alt="" />
                    <p className='text-center -mt-5'>Projects</p>
                </div>
                <div className=' w-[200px]'></div>
            </div>
            <div className='flex justify-center -mt-10'> <img src={rightTiltArrow} alt="" /></div> 

            <div className='flex items-center justify-center -mt-10'>
                <div className=' w-[200px]'></div>
                <div>
                    <img src={quiz} alt="" />
                    <p className='text-center '>Quiz</p>
                </div>
            </div>
            <div className='flex justify-center -mt-8'> <img src={leftTiltArrow} alt="" /></div>    

            <div className='flex items-center justify-center -mt-8'>
                <div>
                    <img src={certificate} alt="" />
                    <p className='text-center'>Certificates</p>
                </div>
                <div className=' w-[200px]'></div>
            </div>
            <div className='flex justify-center -mt-10'> <img src={rightTiltArrow} alt="" /></div>         
            
            <div className='flex items-center justify-center -mt-10'>
                <div className=' w-[200px]'></div>
                <div>
                    <img src={mentors} alt="" />
                    <p className='text-center -mt-4 '>Experienced Mentors</p>
                </div>
            </div>
            <div className='flex justify-center -mt-2'> <img src={leftTiltArrow} alt="" /></div> 

            <div className='flex items-center justify-center -mt-8'>
                <div>
                    <img src={material} alt="" />
                    <p className='text-center'>Course Materials</p>
                </div>
                <div className=' w-[200px]'></div>
            </div>
            <div className='flex justify-center -mt-2'> <img src={rightTiltArrow} alt="" /></div> 

            <div className='flex items-center justify-center -mt-6'>
                <div className=' w-[200px]'></div>
                <div>
                    <img src={support} alt="" />
                    <p className='text-center '>Experienced Mentors</p>
                </div>
            </div>

        </div>

        {/* master the technolgy0 */}
        <div className='mt-10 px-3 ' >
            <div className='flex justify-center relative '>
                <img src={master} alt=""/>
                <h1 className='absolute -mt-6 md:mt-0 lg:mt-16  text-xl md:text-3xl lg:text-3xl font-semibold'>Master these Technology</h1>
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
        <div className='bg-indigo-900 mt-8 py-5 px-2 ' >
            <h1 className='text-4xl font-bold px-2 lg:px-8 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text '>Learn From the Best</h1>
            <p className='px-2 lg:px-8 text-gray-50 md:w-[75%] lg:w-[50%] mb-6'>Our instructors come with extensive industry experience and help you learn in a cohort-learning environment</p>
            
            <div className="max-w-[720px] mx-auto flex items-center justify-center">
                <div className="cursor-pointer hover:scale-110 " onClick={handlePrevious}>
                    <img src={leftArrow} alt="" className='w-[300px]' />
                </div>
                <div className="flex overflow-x-hidden">
                    {facultyList.map((faculty, i) => (
                    <div
                        key={`faculty${i}`}
                        className={`flex-shrink-0 w-full  transform transition-transform 
                        }`}
                        style={{
                            transform:`translateX(-${currentIndex*100}%)`
                        }}
                    >
                        <FacultyCard facultyList={faculty} />
                    </div>
                    ))}
                </div>
                <div className="cursor-pointer hover:scale-110 " onClick={handleNext}>
                    <img src={rightArrow} alt="" className='w-[300px]' />
                </div>
                </div>

            
        </div>
        

    </>
  )
}

export default ExploreCourse
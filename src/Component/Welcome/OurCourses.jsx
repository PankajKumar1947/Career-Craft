import React, { useState } from 'react'
import Courses from './Courses'
import unchecked from '../Assests/circle.png'
import courseList from '../DataFolder/course'

const OurCourses = () => {
  let [current,setCurrent]=useState(0);
  const [category,setCategory]=useState("Trending");

  let previousCourse=()=>{
    if(current===0)
      setCurrent(courseList[category].length-1);
    else
      setCurrent(current-1);
  }

  let nextCourse=()=>{
    if(current===courseList[category].length-1)
      setCurrent(0);
    else
      setCurrent(current+1);
  }

  return (
    <>
        <div className='max-w-[92%] mx-auto mt-5 text-black'>
            <h1 className='text-3xl font-semibold text-center text-white'>Our Courses</h1>
            <ul className='flex  justify-center mt-3 gap-2'>
                <li
                onClick={()=>setCategory("Trending")}
                className={`${category==="Trending" ? "bg-green-300" : "bg-white"}  px-3 py-1 rounded-sm shadow-md  hover:bg-green-400 cursor-pointer`}
                >Trending</li>
                <li
                onClick={()=>setCategory("Live")}
                className={`${category==="Live" ? "bg-green-300 " : "bg-white"} px-7 py-1 rounded-sm shadow-md  hover:bg-green-400 cursor-pointer`}
                >Live</li>
                <li 
                className='px-3 py-1 bg-white rounded-sm shadow-md  hover:bg-green-400 cursor-pointer'>View All </li>
            </ul>
        </div>

        {/* Courses */}

        <div className='flex flex-col justify-center items-center gap-4  overflow-hidden'>
            <div className='flex'>
              {courseList[category].map((crs, index) => (
                <div
                  key={crs.id}
                  className={`flex-shrink-0 ${index === current ? 'block' : 'hidden'}`}
                  style={{ minWidth: '100%' }}
                >
                  <Courses eachCourse={crs} />
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center gap-4'>
              <img
                src={unchecked}
                alt=""
                className='cursor-pointer hover:scale-105 bg-white w-[25px] p-1 rounded-xl'
                onClick={previousCourse}
              />
              <img
                src={unchecked}
                alt=""
                className='cursor-pointer hover:scale-105 bg-white w-[30px] p-1 rounded-xl'
                onClick={previousCourse}
              />
              <img
                src={unchecked}
                alt=""
                className='cursor-pointer hover:scale-105 bg-white w-[40px] p-1 rounded-xl'
              />
              
              <img
                src={unchecked}
                alt=""
                className='cursor-pointer hover:scale-105 bg-white w-[30px] p-1 rounded-xl'
                onClick={nextCourse}
              />
              <img
                src={unchecked}
                alt=""
                className='cursor-pointer hover:scale-105 bg-white w-[25px] p-1 rounded-xl'
                onClick={nextCourse}
              />
            </div>
          </div>


        
    </>
    
  )
}

export default OurCourses
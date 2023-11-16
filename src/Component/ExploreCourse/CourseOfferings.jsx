import React from 'react'
import project from '../Assests/projects.png'
import quiz from '../Assests/quiz.png'
import certificate from '../Assests/certificate.png'
import mentors from '../Assests/mentors.png'
import material from '../Assests/materials.png'
import support from '../Assests/support.png'
import leftTiltArrow from '../Assests/leftTiltArrow.png'
import rightTiltArrow from '../Assests/rightTiltArrow.png'

const CourseOfferings = () => {
  return (
    <>
        <div className='mt-8 px-4  '>
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
    </>
  )
}

export default CourseOfferings
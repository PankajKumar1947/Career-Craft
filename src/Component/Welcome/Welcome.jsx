import React from 'react'
import w1 from '../Assests/w1.png'
import w2 from '../Assests/w2.png'
import w3 from '../Assests/w3.png'
import w4 from '../Assests/w4.png'
import icon1 from '../Assests/icon1.png'
import icon2 from '../Assests/icon2.png'
import icon3 from '../Assests/icon3.png'
import icon4 from '../Assests/icon4.png'
import OurCourses from './OurCourses'
import Join from '../ExploreCourse/Join'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
        <div className='max-w-[92%] mx-auto mt-7 flex gap-5 justify-center '>
            {/* left */}
            <div className='w-[40%] hidden lg:block'>
                <img src={w1} alt="" className='mt-2'/>
                <img src={w2} alt="" className='mt-2'/>
                <img src={w3} alt="" className='mt-2'/>
                <img src={w4} alt="" className='mt-2'/>
            </div>
            {/* right */}
            <div className=''>
                <h1 className='text-3xl text-center'>Get Started with Career Craft Now !</h1>
                <p className='lg:px-10  mt-3 text-[#F5FDB6]'>"Career Craft: Yur Gateway to Data Science Excellence! Explore our comprehensive data science course tailored for success. Dive into the world of data analytics, machine learning, and AI with expert guidance. Start your journey to a lucrative data science career today!"</p>
                <Link to={"/notfound"}>
                <div className=' mt-8 bg-[#FCFB00] cursor-pointer hover:bg-[#c2c262] text-center mx-8 rounded-md'>
                     <button className=' shadow-md  py-3 text-black font-semibold'>Examine Courses</button>
                </div>
                </Link>
                

                <div className='lg:px-10  mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-between'>
                    <div className='flex gap-3 items-center'>
                        <img src={icon1} alt="" />
                        <div>
                            <p>54%</p>
                            <p className='text-sm'>Average Pay Boost for Data Science</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src={icon2} alt="" />
                        <div>
                            <p>600+</p>
                            <p className='text-sm'>Course Offerings</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src={icon3} alt="" />
                        <div>
                            <p>400+</p>
                            <p className='text-sm'>Hiring Partners</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src={icon4} alt="" />
                        <div>
                            <p>120+</p>
                            <p className='text-sm'>Transitioning Careers</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        {/* Our course */}
        <OurCourses/>

        <div>
            <Join/>
        </div>

        <div className='max-w-[92%] m-auto px-2'>
            <h1 className='text-xl text-[#FCFB00] font-bold underline sm:text-2xl mt-5'>Our Missions</h1>
            <div className='mt-1'>At Career-Craft, our mission is to bridge the gap between ambition and achievement. We are dedicated to providing a diverse range of high-quality courses, taught by industry experts, that empower you to master new skills and stay ahead in today's dynamic job market. Whether you're a seasoned professional looking to upskill or a newcomer seeking to enter a new field, Career-Craft is your compass to success.</div>
        </div>
    </>
  )
}

export default Welcome
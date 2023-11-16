import React from 'react'
import LeftDashboard from '../Component/Dashboard/LeftDashboard'
import EnrollCourseCard from '../Component/Dashboard/EnrollCourseCard'
import MyLearning from '../Component/Dashboard/MyLearning'

const Dashboard = () => {
  return (
    <>
        <div className='flex gap-8'>
            {/* left */}
            <div className='hidden md:block lg:block'>
                <LeftDashboard/>
            </div>

            {/* right */}
            <div className='flex-1'>
                <div>
                    <h1 className="text-2xl font-semibold pt-3">Enrolled Courses</h1>       
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-3'>
                    <EnrollCourseCard/>
                    <EnrollCourseCard/>
                    <EnrollCourseCard/>
                    <EnrollCourseCard/>
                    </div>
                </div>
                

                {/* categories */}
                <div>
                <h1 className="text-2xl font-semibold mt-5 ">Categories</h1>
                <div className="flex mt-4 gap-8 text-black">
                    <div className="bg-white px-7 py-2 rounded-lg flex flex-col items-center justify-center  shadow-md hover:shadow-gray-400 cursor-pointer  ">
                        <i className="fa-solid fa-chart-line text-xl"></i>
                        <p>Analysis</p>
                    </div>
                    <div className="bg-gray-800 text-white px-7 py-2 rounded-lg flex flex-col items-center justify-center  shadow-md hover:shadow-gray-400 cursor-pointer ">
                        <i className="fa-solid fa-table-cells-large text-xl"></i>
                        <p>Big Data</p>
                    </div>
                    <div className="bg-gray-800 text-white px-3 py-2 rounded-lg flex flex-col items-center  shadow-md hover:shadow-gray-400 cursor-pointer justify-center ">
                        <i className="fa-solid fa-chart-line text-xl"></i>
                        <p >Deep Learning</p>
                    </div>
                </div>

                
                </div>

                {/* my learing */}
                <div className=''>
                    <h1 className="text-2xl font-semibold mt-6 text-white">My Learning</h1>
                    <div className='mt-3 flex gap-5'>
                        <MyLearning/>
                        <MyLearning/>
                    </div>
                    <div className='flex-1 flex mt-4 justify-center items-center'>
                    <button className='bg-[#FCFB00] text-black px-8 py-1 text-sm rounded-md hover:bg-yellow-500 font-semibold'>See all</button>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Dashboard
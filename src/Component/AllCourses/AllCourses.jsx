import React from 'react'
import Courses from '../Welcome/Courses'
import course from '../DataFolder/course'

const AllCourses = () => {
    const courseArray = Object.values(course).flat();

  return (
    <>
        <div className='w-full flex flex-col items-center'>
                {courseArray.map((crs, index) => (
                <div
                    key={crs.id}>
                    <Courses eachCourse={crs} />
                </div>
                ))}
            </div>
       
    </>
  )
}

export default AllCourses
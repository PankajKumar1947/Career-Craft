import React from 'react'
import workExp from '../Assests/ExpIcon.png'
import teachingExp from '../Assests/ExpIcon1.png'

const FacultyCard = ({facultyList}) => {
  return (
    <>
      <div className=' flex flex-col gap-1 justify-center items-center py-4 bg-gradient-to-br border-[1.5px] rounded-3xl '>
          <img src={facultyList.img} alt="" className='w-[50%] rounded-full'/>
          <h1 className='text-2xl font-semibold'>{facultyList.name}</h1>
          <p className='text-gray-300'>{facultyList.domain}</p>

          <div className='flex sm:gap-2 text-sm'>
            <div className='flex justify-center items-center gap-2 sm:gap-4 lg:mt-4'>
              <img src={workExp} alt="" />
              <div>
                <h1 className='font-semibold'>+{facultyList.workExp} Years</h1>
                <p className='text-gray-200 text-xs'>Work Experience</p>
              </div>
            </div>
            <div className='flex justify-center items-center gap-2 sm:gap-4 lg:mt-4'>
              <img src={teachingExp} alt="" />
              <div>
                <h1 className='font-semibold'>+{facultyList.teachingExp} Years</h1>
                <p className='text-gray-200 text-xs'>Teaching Experience</p>
              </div>
            </div>
          </div>
          

          <p className='px-2 md:px-5 lg:px-10 text-center text-gray-200 sm:text-xl lg:mt-4'>{facultyList.desc}</p>
        </div>
    </>
  )
}

export default FacultyCard
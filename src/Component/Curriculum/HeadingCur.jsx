import React from 'react'
import downArrow from '../Assests/downArrow.png'

const HeadingCur = () => {
  return (
    <>
        <div className='flex justify-between max-w-[600px] mx-auto px-[2%] bg-gray-200'>
            <div className=''>
                <h1 className='text-red-600'>Module 1</h1>
                <p className='text-sm pl-3'>Course Introduction</p>
            </div>
            <div>
                <img src={downArrow} alt="" />
            </div>
        </div>
    </>
  )
}

export default HeadingCur
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className='w-[80vw] h-[40vh] mx-auto text-center mt-5'>
            <h1 className='text-4xl sm:text-8xl'>404</h1>
            <p className='text-2xl sm:text-4xl'>Oops! Something is wrong.</p>
            <div className='mt-5'>
            <Link to={"/"} className='bg-green-600 text-white px-5 py-2 rounded-full '>Get Back</Link>
            </div>
            
        </div>
      
    </>
  )
}

export default NotFound
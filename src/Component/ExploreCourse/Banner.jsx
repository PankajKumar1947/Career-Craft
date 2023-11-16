import React from 'react'
import share from '../Assests/share.png'
import brain from '../Assests/brain.png'
import minElig from '../Assests/minElig.png'
import roles from '../Assests/roles.png'
import mode from '../Assests/mode.png'

const Banner = ({banner}) => {
  return (
    <>
        <div className='flex  flex-wrap bg-gray-500 text-black mt-5 w-full justify-around items-center gap-2 py-2'>
            <div className='flex gap-2 justify-center items-center'>
                <img src={brain} alt="" />
                <div>
                    <h1 className='font-semibold'>Skills You Will Gain</h1>
                    <p className='text-gray-200 text-sm'>{banner.skills}</p>
                </div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <img src={minElig} alt="" />
                <div>
                    <h1 className='font-semibold'>Minimum Eligibility</h1>
                    <p className='text-gray-200 text-sm'>{banner.eligibility}</p>
                </div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <img src={roles} alt="" />
                <div>
                    <h1 className='font-semibold'>Roles After Completion</h1>
                    <p className='text-gray-200 text-sm'>{banner.roles}</p>
                </div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <img src={mode} alt="" />
                <div>
                    <h1 className='font-semibold'>Learning Mode</h1>
                    <p className='text-gray-200 text-sm'>{banner.learningMode}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
import React from 'react'
import youTube from '../Assests/youTube.png'
import linkedIn from '../Assests/linkedIn.png'
import discord from '../Assests/discord.png'
import telegram from '../Assests/telegram.png'

const Join = () => {
  return (
    <>
        <div className='max-w-[80%] md:max-w-[60%]  mx-auto mt-5'>
            <h1 className='text-center text-2xl font-bold underline'>Join Our Family</h1>
            <div className='flex justify-around mt-8 flex-wrap gap-4'>
                <div className='w-[100px] cursor-pointer '>
                    <img src={youTube} alt="" className='' />
                    <p className='text-center text-red-500 font-bold '>YouTube</p>
                </div>
                
                <div className='w-[100px] cursor-pointer '>
                    <img src={linkedIn} alt="" className='' />
                    <p className='text-center text-[#03a5f0c4] font-bold '>LinkedIn</p>
                </div>
                <div className='w-[100px] cursor-pointer '>
                    <img src={discord} alt="" className='' />
                    <p className='text-center text-purple-200 font-bold '>Discord</p>
                </div>
                <div className='w-[100px] cursor-pointer '>
                    <img src={telegram} alt="" className='' />
                    <p className='text-center text-blue-400 font-bold '>Telegram</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Join
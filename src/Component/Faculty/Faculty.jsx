import React, {useState} from 'react'
import facultyList from '../DataFolder/facultyList'
import leftArrow from '../Assests/leftArrow.png'
import rightArrow from '../Assests/rightArrow.png'
import FacultyCard from './FacultyCard'

const Faculty = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if(currentIndex===0)
            setCurrentIndex(facultyList.length-1);
        else
            setCurrentIndex(currentIndex-1);
    };

  const handleNext = () => {
        if(currentIndex===facultyList.length-1)
            setCurrentIndex(0);
        else
            setCurrentIndex(currentIndex+1)
  };
  return (
    <>
        <div className=' mt-8 py-5 px-2 ' >
            <h1 className='text-2xl sm:text-4xl font-bold px-2 lg:px-8 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text '>Learn From the Best</h1>
            <p className='px-2 lg:px-8 text-gray-50 md:w-[75%] lg:w-[50%] mb-6'>Our instructors come with extensive industry experience and help you learn in a cohort-learning environment</p>
            
            <div className="max-w-[720px] mx-auto flex items-center justify-center">
                <div className="cursor-pointer hover:scale-110 " onClick={handlePrevious}>
                    <img src={rightArrow} alt="" className='w-[300px] rotate-180' />
                </div>
                <div className="flex overflow-x-hidden">
                    {facultyList.map((faculty, i) => (
                    <div
                        key={`faculty${i}`}
                        className={`flex-shrink-0 w-full  transform transition-transform 
                        }`}
                        style={{
                            transform:`translateX(-${currentIndex*100}%)`
                        }}
                    >
                        <FacultyCard facultyList={faculty} />
                    </div>
                    ))}
                </div>
                <div className="cursor-pointer hover:scale-110 " onClick={handleNext}>
                    <img src={rightArrow} alt="" className='w-[300px]' />
                </div>
                </div>

            
        </div>
    </>
  )
}

export default Faculty
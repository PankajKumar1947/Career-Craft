import React from 'react'
import CurrCard from './CurrCard'


const Curriculum = () => {
  return (
    <>
      <div>
        <CurrCard bgColor={"gray-200"} title={"Course Intro"} desc={"5videos"} />
        <div>
          <CurrCard bgColor={"white"} title={"Mentor Introduction"} desc={"10m 2s"} />
        </div>
        

      </div>
        
    </>
  )
}

export default Curriculum
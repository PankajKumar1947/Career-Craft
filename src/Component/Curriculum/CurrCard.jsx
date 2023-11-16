import React from 'react'

const CurrCard = (props) => {
  return (
    <div className={`flex justify-between px-4   border-gray-600 items-center text-black w-8/12 mx-auto bg-${props.bgColor}`}>
        <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        </div>
        <div>
        <i className="fa-solid fa-angle-down text-2xl"></i>
        </div>
    
  </div>
  )
}

export default CurrCard
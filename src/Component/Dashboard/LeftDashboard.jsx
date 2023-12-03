import React from 'react'
import { Link } from 'react-router-dom'

const LeftDashboard = () => {
  return (
    <>
        <div className="bg-[#E5E5E5] text-black h-[100vh] w-[50px] md:w-[60px] lg:w-[70px] pt-5">
            <div className="text-4xl text-center"><i className="fa-solid fa-laptop " ></i></div>
            <div className="text-xl flex flex-col items-center gap-4 mt-7">
                <div className="flex flex-col gap-1 items-center">
                    <i className="fa-solid fa-house"></i>
                    <p className="text-sm">Home</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <p className="text-sm">Search</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                    <i className="fa-solid fa-circle-play"></i>
                    <p className="text-sm">Courses</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <i className="fa-solid fa-bookmark"></i>
                    <p className="text-sm">Saved</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <i className="fa-solid fa-user"></i>
                    <Link to={"/dashboard/profile"}><p className="text-sm">Profile</p></Link>
                </div>
                
                
                
                
                
            </div>
        </div>
    </>
  )
}

export default LeftDashboard
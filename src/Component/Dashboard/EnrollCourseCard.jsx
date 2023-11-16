import React from 'react'


const EnrollCourseCard = () => {
  return (
        <>
            <div className="relative  bg-white text-black pt-2 px-2 rounded-xl cursor-pointer pb-3 shadow-gray-400 shadow-md">
                <div className="">
                    <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg" alt="" className="w-full rounded-xl h-[100px] -z-30 "/>
                </div>
                <div className="bg-white px-2 absolute top-3 right-3 py-1">
                    <i className="fa-solid fa-bookmark"></i>
                </div>
                <div className="bg-gray-100 shadow-sm shadow-gray-500 w-[60%] py-1 px-1 flex gap-1 rounded-md ml-2  -mt-4 z-30 absolute">
                    <img src="https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-[30px] h-[30px] rounded-full "/>
                    <p className="">Mansi</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-sm mt-3 font-semibold">Power BI</h2>
                    <ul className="mt-1 flex justify-between">
                        <li className="flex items-center gap-1 text-sm"><i className="fa-solid fa-clock text-sm"></i> <span className="text-xs">1h 53m</span> </li>
                        <li className="flex items-center gap-1 text-sm"><i className="fa-solid fa-star"></i> <span className="text-xs">4.9/5</span> </li>
                        <li className="bg-[#FCFB00] px-2 py-1">₹3500.00</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default EnrollCourseCard
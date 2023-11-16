import React from 'react'

const MyLearning = () => {
  return (
    <>
        <div className="w-[40%] flex gap-3 bg-white text-black py-2 px-2 rounded-md cursor-pointer">
            <div className="w-[36%]">
                <img src="https://images.pexels.com/photos/5303516/pexels-photo-5303516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-md"/>
            </div>
            <div className="w-[80%]">
                <div className="w-full flex justify-between items-center ">
                    <div>
                        <h2 className="font-semibold">Become a Data Scientist</h2>
                        <p className="text-sm -mt-2 text-gray-800">John Doe</p>
                    </div>
                    <div className="bg-indigo-300 px-2 py-1">
                        <i className="fa-solid fa-bookmark"></i>
                    </div>
                    
                </div>
                <div className="bg-gray-400 h-2 w-full rounded-md mt-4">
                    <div className="bg-red-500 h-2 w-[70%] rounded-md"></div>
                </div>
                <p className="text-xs mt-2 font-sans font-semibold">69% complete</p>
            </div>
        </div>
    </>
  )
}

export default MyLearning
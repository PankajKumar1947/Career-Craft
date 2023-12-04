import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div className='text-white max-w-[820px] mx-auto mt-4 flex gap-4 justify-center  px-4 py-4 flex-wrap'
    id="customBg">
        {/* left */}
        <div className='w-full md:w-[42%] border-[1px] border-gray-400  rounded-2xl px-2 pt-4  flex flex-col gap-1 justify-center text-sm  '>
            <h1 className='text-2xl font-bold px-3 tracking-widest'>FEEL FREE TO ASK <br /> ANYTHING 😊 </h1>
            <div className='flex justify-between items-center mt-4'>
                <h2>Full Name</h2>
                <input type="text" placeholder='Mohani' className='text-black rounded-md outline-0 min-w-[200px] px-2 py-1'/>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <h2>Email</h2>
                <input type="email" placeholder='mohanikholiya@gmail.com' className='text-black rounded-md outline-0 min-w-[200px] px-2 py-1'/>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <h2>Phone Number</h2>
                <input type="text" placeholder='+91 999999999' className='text-black rounded-md outline-0 min-w-[200px] px-2 py-1'/>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <textarea name="" id=""  placeholder='Your message here *' className='w-full text-black h-[110px] rounded-lg px-2 placeholder:text-black bg-gray-300 opacity-50'></textarea>
            </div>
            
            <div className='flex justify-center items-center my-3'>
                <button className='bg-red text-black font-semibold bg-red-600 hover:bg-red-500 px-7 py-2 rounded-md'>Send</button>
            </div>
        </div>
        {/* right */}
        <div className='flex-1 sm:block text-gray-200'>
            <h1 className='text-5xl text-white font-bold'>Contact Us</h1>
            <p className='mt-4 '>Welcome to Career Craft! We are here to assit you with any inquiries you might have. Whether you need information about our courses, have a suggestion to share, or encounter any issues while navigating our platform, please don't hesitate to get in touch</p>
            <div className='flex gap-2 items-center mt-4 '>
                <i className="fa-solid fa-envelope"></i>
                <p>support@careercraft@gmail.com</p>
            </div>
            <div className='flex gap-2 items-center mt-2'>
                <i className='fa-solid fa-phone'></i>
                <p>+91 9999999999</p>
            </div>

            <div className='mt-4 '>Our dedicated team is committed to providing you with the best educational exprerience possible. Feel free to reach out, and we'll be happy to help</div>

            <div className='my-4 '>Thank you for choosing Career Craft for your learning journey</div>
            
        </div>
    </div>
  )
}

export default Contact
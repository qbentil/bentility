import React from 'react'
import {FaClipboardList} from 'react-icons/fa'
const Unit = () => {
  return (
    <div className='w-full  flex items-center justify-between py-2 border-b-2 border-gray-200 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75'>
        <div className='flex items-center w-[80%] gap-8 font-sans '>
            <div className='w-20 h-10 flex justify-center text-yellow-700 items-center bg-yellow-200 rounded-sm group-hover:bg-white'>JS</div>
            <div className="flex flex-col mr-10">
                <h2 className='text-active'>JavaScript</h2>
                <p className='text-[0.7rem] text-[#9F9F9F]'>24 July, 2022</p>
            </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
            <div className="flex items-center justify-center gap-2 font-sans">
                <FaClipboardList className='text-[#6E6E6E]' />
                <p className='text-[#4B4B4B] text-[0.9rem]'>1200</p>
            </div>
        </div>
    </div>
  )
}

export default Unit
import React from 'react'
import { BsBook, BsEye } from 'react-icons/bs'

const Post = () => {
  return (
    <div className='w-full bg-white flex items-center justify-between py-2 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75 mb-1'>
        <div className='flex items-center w-[80%] gap-8 font-sans '>
            <div className='w-10 h-10 flex justify-center text-primary items-center bg-active-bg rounded-full group-hover:bg-white'>CP</div>
            <div className="flex flex-col mr-10">
                <h2 className='text-active'>CSS Performance</h2>
                <p className='text-[0.7rem] text-[#9F9F9F]'>24 July, 2022</p>
            </div>
            <div className="bg-red-200 py-1 px-5 rounded-sm">
                <p className='text-sm text-red-600'>Frontend</p>
            </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
            <div className="flex items-center justify-center gap-2 font-sans">
                <BsBook className='text-[#6E6E6E]' />
                <p className='text-[#4B4B4B] text-[0.9rem]'>1200</p>
            </div>
            <div className="flex items-center justify-center gap-2 font-sans">
                <BsEye className='text-[#6E6E6E]' />
                <p className='text-[#4B4B4B] text-[0.9rem]'>120K</p>
            </div>
        </div>
    </div>
  )
}

export default Post
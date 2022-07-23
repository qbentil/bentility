import React from 'react'
import { FaClipboardList, FaRegHeart } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { GrOverview } from 'react-icons/gr'

function Tabs() {
  return (
    <div className='w-full flex items-center justify-around'>
        {/* tab */}
        <div className="flex flex-col cursor-pointer hover:bg-active-bg transition-all duration-100 ease-in-out items-center justify-center bg-white rounded-lg h-full w-[20%] py-3 gap-1 ">
            <div className="h-10 w-10 rounded-xl bg-[#FFF5F7] text-[#EC3263] flex items-center justify-center">
                <FiUsers />
            </div>
            <p className='text-active font-semibold font-sans'>0</p>
            <p className='font-sans text-[#5C6E9A] text-[0.6rem]'>Followers</p>
        </div>
        <div className="flex flex-col cursor-pointer hover:bg-active-bg transition-all duration-100 ease-in-out items-center justify-center bg-white rounded-lg h-full w-[20%] py-3 gap-1 ">
            <div className="h-10 w-10 rounded-xl bg-[#E8F8F9] text-[#00AEB8] flex items-center justify-center">
                <FaClipboardList />
            </div>
            <p className='text-active font-semibold font-sans'>0</p>
            <p className='font-sans text-[#5C6E9A] text-[0.6rem]'>Posts</p>
        </div>
        <div className="flex flex-col cursor-pointer hover:bg-active-bg transition-all duration-100 ease-in-out items-center justify-center bg-white rounded-lg h-full w-[20%] py-3 gap-1 ">
            <div className="h-10 w-10 rounded-xl bg-[#EAF5FF] text-[#1081E8] flex items-center justify-center">
                <FaRegHeart />
            </div>
            <p className='text-active font-semibold font-sans'>0</p>
            <p className='font-sans text-[#5C6E9A] text-[0.6rem]'>Likes</p>
        </div>
        <div className="flex flex-col cursor-pointer hover:bg-active-bg transition-all duration-100 ease-in-out items-center justify-center bg-white rounded-lg h-full w-[20%] py-3 gap-1 ">
            <div className="h-10 w-10 rounded-xl bg-[#FDF7F0] text-[#FF8700] flex items-center justify-center">
                <GrOverview />
            </div>
            <p className='text-active font-semibold font-sans'>0</p>
            <p className='font-sans text-[#5C6E9A] text-[0.6rem]'>Viewers</p>
        </div>
    </div>
  )
}

export default Tabs
import React from 'react'
import { RiSoundModuleLine } from 'react-icons/ri'
import Post from '../post'

function PopularPosts() {
  return (
    <div className='w-[60%] flex flex-col items-center px-5 my-4'>
        {/* section head */}
        <div className='bg-white w-full rounded-t-lg flex justify-between items-center py-2 px-4 border-b-2 border-gray-200'>
            <p className=' text-active font-sans'>Popular Posts</p>
            <div className='flex items-center justify-center gap-3 border border-active-bg py-2 px-4 font-sans cursor-pointer'>
                <RiSoundModuleLine className='text-primary' />
                <p className=' text-active text-sm'>View All</p>
            </div>
        </div>
        {/* posts table */}
        <div className='w-full flex flex-col bg-white pt-2 gap-2 overflow-y-auto h-[59vh]'>
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    </div>
  )
}

export default PopularPosts
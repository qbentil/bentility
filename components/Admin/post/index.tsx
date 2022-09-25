import React, { useEffect, useState } from 'react'
import { BsBook, BsEye } from 'react-icons/bs'
import { Post } from '../../../types'

import { Writer, Categories } from '../posts'

const Post = ({ post }: { post: Post }) => {
	const names = post.title.split(' ')
	const initials =
		names[0].charAt(0).toUpperCase() +
		names[names.length - 1].charAt(0).toUpperCase()

	
    
    // funtion to return short date
    const shortDate = (word: any) => { 
        const date = new Date(word)
        const month = date.toLocaleDateString('default', { month: 'short' })
        const day = date.getDate()
        const year = date.getFullYear()
        const formattedDate = `${day} ${month}, ${year}`
        return formattedDate
    }

	const [date, setDate] = useState<string>(shortDate(post.createdAt))
	return (
		<div className='w-full  flex items-center justify-between py-2 border-b-2 border-gray-200 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75 '>
			<div className='flex items-center w-[80%] gap-8 font-sans '>
				<div className='w-10 h-10 flex justify-center text-primary items-center bg-active-bg rounded-full group-hover:bg-white'>
					{initials}
				</div>
				<div className='flex flex-col mr-10'>
					<h2 className='text-active truncate'>{post.title}</h2>
                    
                    <Writer id={post?.writer || ''} className={'text-[0.7rem] text-gray-500 flex gap-2 items-center'} />
                    
				</div>
                <div className=' flex max-w-[25%] overflow-auto gap-2 scrollbar-hidden mx-auto'>
                    
					<Categories ids={post.categories} />
				</div>
			</div>
			<div className='flex items-center justify-center gap-5'>
				<div className='flex items-center justify-center gap-2 font-sans'>
					<p className='text-[#4B4B4B] text-xs'>{date}</p>
				</div>
				<div className='flex items-center justify-center gap-2 font-sans'>
					<BsEye className='text-[#6E6E6E]' />
					<p className='text-[#4B4B4B] text-[0.9rem]'>{post.views}</p>
				</div>
			</div>
		</div>
	)
}

export default Post

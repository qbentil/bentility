/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { BsClock } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import { Post } from '../../types'
import { convertDate } from '../../util/functions'
import { Categories, Writer } from '../Admin/posts'

const SingleBlog = ({ data }: { data: Post }) => {
  const router = useRouter()
	const [readTime, setReadTime] = useState('')

	const readingTime = () => {
		const wordsPerMinute = 200
		const noOfWords = data.content.split(/\s/g).length
		const minutes = noOfWords / wordsPerMinute
		const readTime = Math.ceil(minutes)
		if (readTime <= 1) {
			setReadTime(`${readTime} min read`)
		} else {
			setReadTime(`${readTime} mins read`)
		}
	}

	useEffect(() => {
		readingTime()
  }, [])
  
  const viewPost = () => { 
    router.push({
      pathname: `blog/${data.slug}`,
      // query: { _id : data._id }
    })
  }

	return (
		<div className={`hover:cursor-pointer  mb-14`} onClick={viewPost}>
			<div className='h-[40vh] bg-white border-primary border items-center flex  justify-center shadow-sm shadow-gray-50 hover:shadow-lg mb-3  '>
				<div className='w-full md:w-[85%]  flex flex-col items-center justify-around h-[85%]  '>
					<div className='w-full lg:w-[80%]  px-5  font-bold text-gray-600'>
						<p className={`text-lg lg:text-xl `}>{data?.title}</p>

						<div className='text-sm font-normal text-gray-500 my-3'>
							<p>{data?.content.slice(0, 50)} ...</p>
						</div>
					</div>
          <div className='flex gap-3 overflow-hidden max-w-[80%]'>
          <Categories ids={data.categories} />
          </div>
					<div className='flex flex-col w-full gap-4'>
						<div className='flex gap-4 items-center mx-auto w-full px-4 max-w-[75%] justify-evenly'>
							<div>
								<Writer
									id={data?.writer || 'Shadrack Bentil'}
									className={
										'text-[0.7rem] text-gray-500 flex gap-2 items-center'
									}
								/>
							</div>
							<div className='flex items-center justify-center gap-x-2'>
								<MdDateRange className='text-[0.7rem] text-primary' />
								<p className='text-[0.7rem] text-gray-500 flex items-center gap-x-1'>
									{convertDate(data?.createdAt || '', 'short')}
								</p>
							</div>
							<div className='flex items-center justify-center gap-x-2'>
								<BsClock className='text-[0.7rem] text-primary ' />
								<p className='text-[0.7rem] text-gray-500 flex items-center gap-x-1'>
									{readTime}
								</p>
							</div>
						</div>
						<div className='flex w-max mx-auto  justify-center items-center'>
							<div className='h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 items-center flex justify-center rounded-full border border-gray-300 mr-2 cursor-pointer'>
								<Link href='/'>
									<img
										src='https://codersquiz.netlify.app/img/bentil.jpeg'
										alt='ben'
										className='w-[90%] h-[90%] border border-gray-200 rounded-full'
									/>
								</Link>
							</div>
							<p className='text-[0.5rem]  md:text-[0.8rem] text-gray-500 lg:w-[80%] w-[90%] font-semibold'>
								Poster by{' '}
								<span className='font-bold'>Bentility</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='px-2'>
				<div className='text-lg md:text-xl font-bold hover:text-blue-500 mb-2'>
					<p> {data.title}</p>
				</div>
				<div className='text-sm text-gray-500 mb-3'>
					<p>{data.content.slice(0, 100)} ...</p>
				</div>
				<div className='text-gray-400 text-sm'>
					<p>May 20th, 2021 | {readTime} </p>
				</div>
			</div> */}
		</div>
	)
}

export default SingleBlog

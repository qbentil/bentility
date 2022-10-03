import React, { useEffect } from 'react'
import { FaQuoteLeft, FaUserAlt } from 'react-icons/fa'
import { useStateValue } from '../../context/StateProvider'
import { FETCH_DATA } from '../../util'
import { useRouter } from 'next/router'
import { FiAtSign } from 'react-icons/fi'
import { BsClock, BsTelephone } from 'react-icons/bs'
import { Post } from '../../types'
import { WriterSignature } from '../Blog/item'
import { convertDate, readingTime } from '../../util/functions'
import { MdDateRange } from 'react-icons/md'
import CategoriesBadge from '../Categories/badge'
import Link from 'next/link'

const WriterProfile = () => {
	const [{ pusers, posts }, dispatch] = useStateValue()
	// TODO : you can enhance this by using a different method to get the id
	const router = useRouter()
	const { id } = router.query

	const fallbackImg =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU'

	// convert to string
	const idString = id?.toString()

    const writer = pusers.filter((user: any) => user._id === idString)[0]
    
    const writerPosts = posts.filter((post: any) => post.writer === idString)
    console.log(writerPosts)

	return (
		<div className='poppins flex flex-col gap-8'>
			<div>
				<img
					className='w-full h-full max-h-[250px] object-cover object-center relative'
					src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30896675.jpg'
					alt=''
				/>

				<div className='relative'>
					<div className=''>
						<img
							className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border-2 left-1/2 md:left-[150px] border-white absolute p-1 bg-blue-600 -bottom-[50px] md:-bottom-[70px] transform -translate-x-1/2 object-cover object-center'
							src={writer?.avatar || fallbackImg}
							alt=''
						/>
					</div>
				</div>
				<div className='w-full h-full bg-white px-7 py-16 md:py-6'>
					<div className='mx-auto   md:w-1/2'>
						<p className='text-center text-sm font-medium text-gray-600'>
							Hey there, I am{' '}
						</p>
						<h1 className='text-2xl md:text-4xl font-bold text-center text-primary'>
							{writer?.name}
						</h1>
                        <div>
                            <h1 className='text-primary'>
                                <FaQuoteLeft className='inline-block text-lg' />{' '}
                            </h1>
							<p className='text-center mt-4 font-medium text-gray-700'>
								{writer?.about}{' '}
                            </p>
                            <h1 className='text-primary text-right'>
                                <FaQuoteLeft className='inline-block text-lg transform rotate-180 ' />{' '}
                            </h1>
                            
						</div>

						<div className='flex flex-col mt-4 gap-2 md:flex-row items-center justify-between text-sm'>
							<div className='flex items-center gap-2'>
								<FaUserAlt className='text-primary ' />
								<p className='text-gray-600'>
									{writer?.username}
								</p>
							</div>
							<div className='flex items-center gap-2'>
								<FiAtSign className='text-primary ' />
								<p className='text-gray-600'>{writer?.email}</p>
							</div>
							<div className='flex items-center gap-2'>
								<BsTelephone className='text-primary ' />
								<p className='text-gray-600'>{writer?.phone}</p>
							</div>
						</div>
					</div>
				</div>
            </div>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    writerPosts && writerPosts.map((post: Post) => (
                        <WriterPosts key={post._id} data={post} />
                    ))
                }
                </div>
            </div>
		</div>
	)
}

const WriterPosts = ({ data }: { data: Post }) => {
    return (
        <Link href={`/blog/${data.slug}`}>
        <div className={`hover:cursor-pointer  mb-14`} >
        <div className="h-[40vh] bg-white border-primary border items-center flex  justify-center shadow-sm shadow-gray-50 hover:shadow-lg mb-3  ">
          <div className="w-full md:w-[85%]  flex flex-col items-center justify-around h-[85%]  ">
            <div className="w-full lg:w-[80%]  px-5  font-bold text-gray-600">
              <p className={`text-lg lg:text-xl `}>{data?.title}</p>
  
              <div className="text-sm font-normal text-gray-500 my-3">
                <p>{data?.content.slice(0, 50)} ...</p>
              </div>
            </div>
            <div className="flex gap-3 overflow-hidden max-w-[80%]">
              <CategoriesBadge ids={data?.categories} />
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="flex gap-4 items-center mx-auto w-full px-4 max-w-[75%] justify-evenly">
                <div className="flex items-center justify-center gap-x-2">
                  <MdDateRange className="text-[0.7rem] text-primary" />
                  <p className="text-[0.7rem] text-gray-500 flex items-center gap-x-1">
                    {convertDate(data?.createdAt || "", "long")}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                  <BsClock className="text-[0.7rem] text-primary " />
                  <p className="text-[0.7rem] text-gray-500 flex items-center gap-x-1">
                    {readingTime(data?.content || "")}
                  </p>
                </div>
              </div>
              <WriterSignature id={data?.writer || ""} />
            </div>
          </div>
        </div>
            </div>
            </Link>
    )
 }

export default WriterProfile

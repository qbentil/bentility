import React, { useEffect } from 'react'
import Button from '../../components/Button'
import { useRouter } from 'next/router'
import { useStateValue } from '../../context/StateProvider'
import { Category, User } from '../../types'
import { ColorOpacity, convertDate } from '../../util/functions'
import { FaUserAlt } from 'react-icons/fa'
import { FECTCH_ADMINS } from '../../util/admins'
import { MdDateRange } from 'react-icons/md'
import { BiArchiveIn } from 'react-icons/bi'

const ViewP = () => {
	const router = useRouter()
	const postId = router.query._id
	const [{ posts, user }, dispatch] = useStateValue()
	const post = posts.filter((post: any) => post._id === postId)[0]

	return (
		<div className='w-full h-full bg-white rounded p-4 poppins overflow-y-scroll '>
			<div className='flex items-center p-4 justify-between'>
				<div className='flex flex-col gap-3'>
					<h1 className='text-2xl font-bold capitalize text-primary'>
						{post.title}
					</h1>
					<div className='flex gap-4'>
						<Writer
							id={post?.writer || 'N/A'}
							className={
								'text-[0.7rem] text-gray-500 flex gap-2 items-center'
							}
						/>
						<div className='flex items-center justify-center gap-x-2'>
							<MdDateRange className='text-[0.7rem] text-primary' />
							<p className='text-[0.7rem] text-[#4B4B4B] flex items-center gap-x-1'>
								{convertDate(post.createdAt || '', 'long')}
							</p>
						</div>
					</div>
				</div>
				<div className='flex gap-2'>
					<Categories ids={post.categories} />
				</div>
            </div>
            <div className='p-4 w-full flex flex-col justify-between gap-8'>
                <div className='w-full text-gray-700'>
                    {post?.content}
                   
                </div>
                <div className='flex justify-end'>

                <Button text='Archive' icon={<BiArchiveIn />}  />
                </div>
            </div>
		</div>
	)
}

export const Categories = ({ ids }: { ids: string[] }) => {
	const [{ categories }, dispatch] = useStateValue()
	return (
		categories &&
		categories
			.filter((category: Category) => ids.includes(category?._id || ''))
			.map((category: Category) => (
				<div
					style={{
						backgroundColor: ColorOpacity(category.color || '', 20),
					}}
					className=' py-1 px-5 rounded-md'
					key={category._id}
				>
					<p
						style={{
							color: category.color,
						}}
						className='text-xs truncate'
					>
						{category.title}
					</p>
				</div>
			))
	)
}

type WriterProps = {
	id: string
	className: string
}

export const Writer = ({ id, className }: WriterProps) => {
	const [{ users, user }, dispatch] = useStateValue()

	// to make sure users are loaded
	useEffect(() => {
		if (users.length > 0) return
		if (!user) return
		FECTCH_ADMINS(user?.access_token, (data) => {
			dispatch({
				type: 'SET_USERS',
				users: data,
			})
		})
	}, [])
	return (
		<div className={className}>
			<FaUserAlt className='text-primary ' />
			<p>
				{(users &&
					users.filter((user: User) => user._id === id)[0]?.name) ||
					'N/A'}
			</p>
		</div>
	)
}

export default ViewP

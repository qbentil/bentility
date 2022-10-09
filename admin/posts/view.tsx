import React, { useEffect } from 'react'
import Button from '../../components/Button'
import { useRouter } from 'next/router'
import { useStateValue } from '../../context/StateProvider'
import { Category, User } from '../../types'
import { ColorOpacity, convertDate } from '../../util/functions'
import { FaUserAlt } from 'react-icons/fa'
import { FECTCH_ADMINS } from '../../util/admins'
import { MdDateRange, MdOutlinePublishedWithChanges } from 'react-icons/md'
import { BiAddToQueue, BiArchiveIn, BiArrowBack, BiLoaderCircle } from 'react-icons/bi'
import { BsArchive, BsPencil } from 'react-icons/bs'
import UtilButton from '../../components/UtilButton'
import Link from 'next/link'
import Preview from '../../components/Admin/Editor/preview'


const ViewP = () => {
	const router = useRouter()
	const path = router.asPath
	const paths = path.split('/')
	const slug = paths[paths.length - 1]
	const [{ posts, user }, dispatch] = useStateValue()
	const post = posts.filter((post: any) =>
		post.slug.toLowerCase().includes(slug.toLowerCase())
	)[0]

	return (
		<div className='w-full h-full bg-white rounded p-4 poppins overflow-y-scroll scrollbar-hidden '>
			<div className='flex items-center justify-between p-4'>
			<div className='flex items-center justify-start gap-x-5 px-4'>
				{/* back button */}
				<UtilButton
					icon={<BiArrowBack />}
					color='blue-600'
					title='Go back'
					onClick={() => router.back()}
				/>
				
				<Link href={`/admin/posts/edit/${post.slug}`}>
					<UtilButton
						icon={<BsPencil />}
						color='black'
						title='Edit'
						
					/>
				</Link>
			</div>
				{
					post?.status !== 'draft' ? (<UtilButton
						icon={<BsArchive />}
						color='blue-600'
						title='Draft'
						onClick={() => null}
					/>):(<UtilButton
					icon={<MdOutlinePublishedWithChanges />}
					color='blue-600'
					title='Publish'
					onClick={() => null}
				/>)
				}
			</div>
			<div className='flex items-center p-4 justify-between'>
				<div className='flex flex-col gap-3'>
					<h1 className='text-2xl font-bold capitalize text-primary'>
						{post?.title || 'N/A'}
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
								{convertDate(post?.createdAt || '', 'long')}
							</p>
						</div>
					</div>
				</div>
				<div className='flex gap-2'>
					<Categories ids={post?.categories} />
				</div>
			</div>
			<div
				className='py-5 px-4 w-full text-gray-700'
				contentEditable={false}
			>
				<Preview content={post?.content || ''} />
			</div>
		</div>
	)
}

export const Categories = ({ ids }: { ids: string[] }) => {
	const [{ categories }, dispatch] = useStateValue()
	return (
		categories &&
		categories
			.filter((category: Category) => ids?.includes(category?._id || ''))
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

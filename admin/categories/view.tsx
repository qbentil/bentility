/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {
	BiArchiveIn,
	BiArrowBack,
	BiCategoryAlt,
	BiPencil,
	BiTrashAlt,
} from 'react-icons/bi'
import { BsEye, BsPencil } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { MdDateRange, MdOutlinePublishedWithChanges } from 'react-icons/md'
import { toast } from 'react-toastify'
import UtilButton from '../../components/UtilButton'
import { useStateValue } from '../../context/StateProvider'
import { Category, Post, User } from '../../types'
import { FECTCH_ADMINS } from '../../util/admins'
import {
	CategoryPostCount,
	ColorOpacity,
	convertDate,
	generateInitials,
} from '../../util/functions'

const ViewC = () => {
	const router = useRouter()
	const path = router.asPath
	const paths = path.split('/')
	const cslug = paths[paths.length - 1]
	const [{ categories, posts, user }, dispatch] = useStateValue()

	const cat = categories.filter((category: any) =>
		category.slug.toLowerCase().includes(cslug.toLowerCase())
	)[0]

	return (
		<div className='bg-white h-full w-full rounded-lg flex flex-col overflow-y-scroll relative  p-2 poppins'>
			<div
				className=' p-3  rounded-lg flex justify-between fixed '
				style={{
					// backgroundColor: ColorOpacity(cat?.color || '', 15),
					color: cat?.color || 'black',
				}}
			>
				<div className='flex gap-4'>
					<div
						className=' rounded-xl'
						style={{
							backgroundColor: ColorOpacity(cat?.color || '', 20),
							color: cat?.color || 'black',
							height: '100px',
							width: '150px',
						}}
					>
						{cat?.imageURL ? (
							<div className=' rounded-xl'>
								<img
									src={cat?.imageURL}
									alt={cat?.slug}
									className='object-cover rounded-xl '
									style={{
										height: '100px',
										width: '150px',
									}}
								/>
							</div>
						) : (
							<div className='w-full h-full flex items-center justify-center '>
								<p className='poppins text-3xl'>
									{generateInitials(cat?.title)}
								</p>
							</div>
						)}
					</div>
					<div className='flex flex-col items-start py-3'>
						<h1 className='font-bold text-2xl'> {cat?.title} </h1>
						<p className='text-black text-sm font-medium'>
							{cat?.description}
						</p>
						<div className='flex items-center gap-1 '>
							<BiCategoryAlt />

							<p className='text-gray-600 font-medium text-sm '>
								{CategoryPostCount(cat._id || '', posts)} posts
								in category
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className='flex items-center justify-start gap-x-5 p-4'>
						{/* back button */}
						<UtilButton
							icon={<BiArrowBack />}
							color='blue-600'
							title='Back'
							onClick={() => router.back()}
						/>
						<UtilButton
							icon={<BiArchiveIn />}
							color='red-600'
							title='Archive'
						/>
						<Link href={`/admin/categories/edit/${cat?.slug}`}>
							<UtilButton
								icon={<BsPencil />}
								color='black'
								title='Edit'
							/>
						</Link>
					</div>
				</div>
			</div>
			{/* Table */}
			<div>
				<div className=''>
					<div className='w-full  grid grid-cols-3 text-center py-2 border-b-2 border-gray-400 px-4  group cursor-pointer transition-all ease-in-out duration-75'>
						<div className='flex justify-start'>
							<p
								className='text-sm font-semibold '
								style={{
									// backgroundColor: ColorOpacity(cat?.color || '', 15),
									color: cat?.color || 'black',
								}}
							>
								Post Name
							</p>
						</div>
						<div>
							{/* <p className='text-sm font-semibold text-blue-500'>Category Tags</p> */}
						</div>
						<div className='flex justify-end'>
							<p
								className='text-sm font-semibold '
								style={{
									// backgroundColor: ColorOpacity(cat?.color || '', 15),
									color: cat?.color || 'black',
								}}
							>
								Action Buttons
							</p>
						</div>
					</div>
				</div>
				<div>
					{posts
						.filter((post: Post) =>
							post.categories.includes(cat._id)
						)
						.map((post: Post) => (
							<Unit post={post} key={post._id} />
						))}
				</div>
			</div>
		</div>
	)
}

export const Unit = ({ post }: { post: Post }) => {
	const router = useRouter()

	const path = router.asPath
	const paths = path.split('/')
	const cslug = paths[paths.length - 1]

	const [{ categories }, dispatch] = useStateValue()

	const cat = categories.filter((category: any) =>
		category.slug.toLowerCase().includes(cslug.toLowerCase())
	)[0]

	const catColor = cat.color
	console.log(catColor)

	const deletePost = () => {
		toast.success('Deleted Successfully !')
	}
	const editPost = () => {
		router.push({
			pathname: `/admin/posts/edit/${post.slug}`,
		})
	}
	const viewPost = () => {
		router.push({
			pathname: `/admin/posts/view/${post.slug}`,
		})
	}

	const publishPost = () => {
		toast.success('Published Successfully !')
	}

	return (
		<div className='w-full  flex items-center justify-between py-2 border-b-2 border-gray-200 px-4  group cursor-pointer transition-all ease-in-out duration-75'>
			<div
				className='flex items-center flex-1  gap-8 font-sans '
				onClick={viewPost}
			>
				<div
					className={`px-5 py-2 flex justify-center  items-center   group-hover:bg-white uppercase`}
					style={{
						backgroundColor: ColorOpacity(catColor || '', 15),
						color: catColor || 'black',
					}}
				>
					{generateInitials(post.title)}
				</div>
				<div className='flex items-center justify-between gap-x-8 w-full'>
					<div className='flex flex-col max-w-[45%]'>
						<h2 className=' capitalize truncate font-semibold' style={{
										color: catColor || 'black',
									}} >
							{post.title}
						</h2>
            <div className='flex items-center justify-start gap-x-2'>
            <div>
								<FaUserAlt
									className='text-[0.7rem] '
									style={{
										color: catColor || 'black',
									}}
								/>
							</div>
							<Writer
								id={post?.writer || 'N/A'}
								className={'text-[0.7rem] text-gray-500 '}
							/>
							
							<div className='flex items-center justify-center gap-x-2'>
								<MdDateRange
									className='text-[0.7rem] '
									style={{
										color: catColor || 'black',
									}}
								/>
								<p className='text-[0.7rem] text-[#4B4B4B] flex items-center gap-x-1'>
									{convertDate(post.createdAt || '', 'long')}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center gap-5'>
				{post.status === 'draft' ? (
					<UtilButton
						icon={<MdOutlinePublishedWithChanges />}
						title={`Publish`}
						color='primary'
						onClick={publishPost}
					/>
				) : (
					<div className='flex items-center justify-center gap-2 font-sans mr-10'>
						<UtilButton icon={<BsEye />} title={`Views`} />
						<p className='text-[#4B4B4B] text-[0.9rem]'>
							{post.views}
						</p>
					</div>
				)}

				<UtilButton
					icon={<BiTrashAlt />}
					title='delete'
					color='red-500'
					onClick={deletePost}
				/>

				<UtilButton
					icon={<BiPencil />}
					title='edit'
					color='yellow-500'
					onClick={editPost}
				/>
			</div>
		</div>
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
			<p>
				{(users &&
					users.filter((user: User) => user._id === id)[0]?.name) ||
					'N/A'}
			</p>
		</div>
	)
}

export default ViewC

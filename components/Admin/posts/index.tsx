import React, { useEffect, useState } from 'react'
import { BsBook, BsEye } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { RiSoundModuleLine } from 'react-icons/ri'
import { useStateValue } from '../../../context/StateProvider'
import { FaThList } from 'react-icons/fa'
import { Category, Post, User } from '../../../types'
import UtilButton from '../../UtilButton'
import { BiPencil, BiTrashAlt } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { ColorOpacity } from '../../../util/functions'
import { FECTCH_ADMINS } from '../../../util/admins'

const AllPosts = () => {
	const [{ posts }, dispatch] = useStateValue()

	return (
		<div className='bg-white h-full px-4'>
			{posts && posts.length > 0 ? (
				<div>
					<div className='bg-white w-full rounded-t-lg flex justify-between items-center py-2 px-4 border-b-2 border-gray-200'>
						<p className='  font-semibold text-primary'>Posts</p>
						<div className='flex items-center justify-center gap-3 border border-active-bg py-2 px-4 font-sans cursor-pointer'>
							<RiSoundModuleLine className='text-primary' />
							<p className=' text-active text-sm'>View All</p>
						</div>
					</div>
					<div>
						{posts &&
							posts.map((post: any) => (
								<Unit post={post} key={post._id} />
							))}
					</div>
				</div>
			) : (
				<div className='w-full h-full flex flex-col items-center justify-center gap-4 text-blue-500'>
					<FaThList className='text-blue-600 text-6xl' />
					<p>No posts yet. Create a post to see it here.</p>
				</div>
			)}
		</div>
	)
}

const Unit = ({ post }: { post: Post }) => {
	const names = post.title.split(' ')
	const initials =
		names[0].charAt(0).toUpperCase() + names[names.length-1].charAt(0).toUpperCase()

	const convertDate = (word: any) => {
		const date = new Date(word)
		const month = date.toLocaleString('default', { month: 'long' })
		const day = date.getDate()
		const year = date.getFullYear()
		const formattedDate = `${day} ${month}, ${year}`
		return formattedDate
	}

	const [date, setDate] = useState<string>(convertDate(post.createdAt))

	const deletePost = () => {
		toast.success('Deleted Successfully !')
	}
	const editPost = () => {}
	const viewPost = () => {}

	return (
		<div className='w-full  flex items-center justify-between py-2 border-b-2 border-gray-200 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75'>
			<div className='flex items-center w-[50%] gap-8 font-sans '>
				<div className='px-5 py-2 flex justify-center text-primary items-center bg-active-bg  group-hover:bg-white uppercase'>
					{initials}
				</div>
				<div className='flex items-center justify-between gap-x-4 w-full'>
					<div className='flex flex-col w-[40%]'>
						<h2 className='text-active capitalize truncate'>
							{post.title}
						</h2>
						<p className='text-[0.7rem] text-[#9F9F9F]'>{date}</p>
					</div>
					<div className='flex items-center justify-center gap-x-2 w-[60%]'>
					<Categories ids={post.categories} />
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center gap-5'>
				<div className='flex items-center justify-center gap-2 font-sans'>
					<FaUserAlt className='text-primary' />
					<Writer id = {post?.writer || ''} />
				</div>
				<div className='flex items-center justify-center gap-2 font-sans'>
					<BsEye className='text-[#6E6E6E]' />
					<p className='text-[#4B4B4B] text-[0.9rem]'>{post.views}</p>
				</div>
			</div>
			<div className='flex items-center justify-center gap-5'>
				<UtilButton
					icon={<BiTrashAlt />}
					color='delete'
					onClick={deletePost}
				/>
				<UtilButton
					icon={<BiPencil />}
					color='edit'
					onClick={editPost}
				/>
				<UtilButton icon={<BsEye />} color='view' onClick={viewPost} />
			</div>
		</div>
	)
}

const Categories = ({ids}:{ids: string[]}) => {
	const [{categories}, dispatch] = useStateValue()
	return (
		categories && categories.filter((category: Category) => ids.includes(category?._id ||'')).map((category:Category) => (
			<div style={{
				backgroundColor: ColorOpacity(category.color || '', 20),
			}} className=' py-1 px-5 rounded-md' key={category._id}>
				<p style={{
				color: category.color
			}} className='text-sm'>{category.title}</p>
			</div>
		))

	)
}

const Writer = ({id}:{id: string}) => {
	const [{users, user}, dispatch] = useStateValue()

	// to make sure users are loaded
	useEffect(() => {
		if(users.length > 0) return;
		if(!user) return;
		FECTCH_ADMINS(user?.access_token, (data)=> {
		  dispatch({
			type: "SET_USERS",
			users: data
		  })
		});
	  }, []);
	return (
		<p className='text-[0.9rem] text-[#4B4B4B]'>
			{users && users.filter((user: User) => user._id === id)[0]?.name || 'N/A'}
		</p>
	)
}

export default AllPosts
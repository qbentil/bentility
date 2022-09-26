/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useStateValue } from '../../../context/StateProvider'
import { User } from '../../../types'
import { toast } from 'react-toastify'
import { RiSoundModuleLine } from 'react-icons/ri'
import { FaThList } from 'react-icons/fa'
import UtilButton from '../../UtilButton'
import { BiPencil, BiTrashAlt,  } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'
import { RiAdminLine, RiUser3Line } from 'react-icons/ri'
import Button from '../../Button'
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai'
import Link from 'next/link'

const AllUsers = () => {
	const [{ users }, dispatch] = useStateValue()
	console.log(users)
	return (
		<div className='w-full h-full bg-white'>
			<div className='bg-white h-full px-4'>
				{users && users.length > 0 ? (
					<div>
						<div className='bg-white w-full rounded-t-lg flex justify-between items-center py-2 px-4 border-b-2 border-gray-200'>
							<p className='  font-semibold text-primary'>
								Users
							</p>
							<Link 
							  href = "users/new"
							>
								<Button text='Add User' icon={<AiOutlineUsergroupAdd />} shape="rounded-md" />
							</Link>
						</div>
						<div>
							{users &&
								users.map((user: any) => (
									<Unit user={user} key={user._id} />
								))}
						</div>
					</div>
				) : (
					<div className='w-full h-full flex flex-col items-center justify-center gap-4 text-blue-500'>
						<FaThList className='text-blue-600 text-6xl' />
						<p>No users yet. Create a post to see it here.</p>
					</div>
				)}
			</div>
		</div>
	)
}

const Unit = ({ user }: { user: User }) => {
	return (
		<div className='w-full  flex items-center justify-between py-2 border-b-2 border-gray-200 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75'>
			<div className='flex items-center  gap-8  '>
				<img
					src={user.avatar}
					alt=''
					className='object-cover w-10 h-10 rounded-full'
				/>
				<div className='flex items-center justify-between gap-x-8 '>
					<div className='flex flex-col '>
						<h2 className='text-active capitalize truncate'>
							{user.name}
						</h2>
						<p
							className={`text-[0.7rem] ${
								user.role === 'admin'
									? 'text-primary'
									: 'text-gray-600'
							} flex items-center `}
						>
							{user.role === 'admin' ? (
								<RiAdminLine className=' text-md mr-1 inline-block' />
							) : (
								<RiUser3Line className='text-md mr-1 inline-block' />
							)}
							{user.email}
						</p>
					</div>
				</div>
			</div>
			<p className='text-[#4B4B4B] text-sm'>{user.username}</p>
			<div className='flex items-center justify-between gap-4  '>
				<div className='flex items-center justify-center gap-5'>
					{user.role === 'admin' ? (
						<>
							<UtilButton
								icon={<BsEye />}
								color='view'
								onClick={() => {}}
							/>
						</>
					) : (
						<>
							<UtilButton
								icon={<BiTrashAlt />}
								color='delete'
								onClick={() => {}}
							/>
							<UtilButton
								icon={<BiPencil />}
								color='edit'
								onClick={() => {}}
							/>
							<UtilButton
								icon={<BsEye />}
								color='view'
								onClick={() => {}}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default AllUsers

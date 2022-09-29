/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBlog, FaUserLock } from 'react-icons/fa'
import { RiSearch2Line } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { BiLogOutCircle } from 'react-icons/bi'
import { useStateValue } from '../../../context/StateProvider'
import { LOGOUT } from '../../../util'
import Searchbar from '../Searchbar'
const Navbar = () => {
	return (
		<div className='bg-white py-2 px-4 w-screen h-[10vh] flex items-center z-40'>
			{/* Brand */}
			<div className='flex justify-center items-center w-[20%] gap-5'>
				<Link href='/admin'>
					<div className='w-10 h-10 flex items-center justify-center border border-active-bg rounded-full'>
						<img
							src='https://codersquiz.netlify.app/img/bentil.jpeg'
							alt=''
							className='w-[90%] h-[90%] border border-active-bg rounded-full'
						/>
					</div>
				</Link>
				<Link href='/'>
					<h1 className='font-brand font-[500] text-3xl cursor-pointer'>
						Bentility
					</h1>
				</Link>
			</div>
			{/* main */}
			<div className='flex justify-between items-center w-[80%]'>
				{/* searchbar */}
				<Searchbar tweek />
				{/* user profile */}
				<UserProfile />
			</div>
		</div>
	)
}


export const UserProfile = () => {
	const [{ user }, dispatch] = useStateValue()
	const [isMenu, setIsMenu] = useState(false)

	const showMenu = () => {
		setIsMenu((menu) => !menu)
	}

	return (
		<div className='flex items-center gap-4 group relative'>
			<div onClick={showMenu} className='flex flex-col items-end font-sans cursor-pointer'>
				<p className='text-active'>{user?.username || 'username'}</p>
				<p className='text-[#888A91] text-sm capitalize'>
					{user.role}
				</p>
			</div>
			<div
				className='w-10 h-10 flex items-center justify-center border border-active-bg rounded-full cursor-pointer'
				onClick={showMenu}
			>
				<img
					src={user?.avatar}
					alt=''
					className='w-[90%] h-[90%] border border-active-bg rounded-full'
				/>
				{isMenu && (
					<div className=' bg-white rounded-lg shadow-xl gap-0  flex-col absolute right-0 z-50 top-14 p-2 font-sans flex min-w-[12rem]'>
						<div
							className='text-active flex gap-2 items-center '
							onClick={showMenu}
						>
							<FaUserLock className='text-lg' />
							<p>{user.name}</p>
						</div>
						<div className='w-full h-[2px] my-2 bg-active-bg'></div>
						<Link href='/admin/settings' onClick={showMenu}>
							<div className='flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2'>
								<FiSettings className='text-lg' />
								<p>settings</p>
							</div>
						</Link>
						<div
							onClick={() => LOGOUT(dispatch)}
							className='flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2'
						>
							<BiLogOutCircle className='text-lg' />
							<p>Logout</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar

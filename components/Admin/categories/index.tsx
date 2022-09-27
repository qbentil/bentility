import React, { useState } from 'react'
import { RiLayoutGridFill } from 'react-icons/ri'
import {BiBookAdd} from 'react-icons/bi'
import Button from '../../Button'
import { Category } from '../../../types'
import { CgListTree } from 'react-icons/cg'
import Link from 'next/link'
import Tableunit from './tableunit'
import Unit from './unit'
import { useStateValue } from '../../../context/StateProvider'

function Categories() {
	const [{ categories }, dispatch] = useStateValue()
	const [view, setView] = useState('card')

	const changeView = (view: string) => {
		setView(view)
	}

	return (
		<div className='bg-white p-5 max-h-[90vh] h-full poppins overflow-y-auto scrollbar-hidden'>
			<div className='bg-transparent w-full flex items-center justify-between px-5 mb-5 py-2 rounded-lg '>
				<h3 className='text-2xl md:text-3xl font-semibold text-primary poppins'>
					Categories
				</h3>
				{/* New Category button */}
				<div className='flex gap-4 '>
					<Link href='/admin/categories/new'>
						<Button text='New ' shape='rounded-md' icon={<BiBookAdd />} />
					</Link>
					{view === 'card' ? (
						<Button
							text='Table'
							icon={<CgListTree />}
							onClick={() => changeView('table')}
							shape='rounded-md'
						/>
					) : (
						<Button
							text='Card'
							icon={<RiLayoutGridFill />}
							onClick={() => changeView('card')}
							shape='rounded-md'
						/>
					)}
				</div>
			</div>
			{view === 'card' ? (
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-7'>
					{categories.map((category: Category) => (
						<Unit key={category._id} data={category} />
					))}
				</div>
			) : (
				<div className='w-full h-full pr-4 mb-20 scrollbar-hidden'>
						<div>
						<div className='' >
								<div className='w-full  grid grid-cols-3 text-center py-2 border-b-2 border-gray-400 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75'>
									<div className='flex justify-start'>
										<p className='text-sm font-semibold text-blue-500'>Category</p>
									</div>
									<div>
										<p className='text-sm font-semibold text-blue-500'>Number of Posts</p>
									</div>
									<div className='flex justify-end'>
										<p className='text-sm font-semibold text-blue-500'>Action Buttons</p>
									</div>
							</div>
						</div>
						{categories.map((category: Category) => (
							<Tableunit key={category._id} data={category} />
						))}
						
					</div>
				</div>
			)}
		</div>
	)
}

export default Categories

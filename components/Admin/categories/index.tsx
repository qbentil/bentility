import React, { useState } from 'react'
import Unit from './unit'
import Link from 'next/link'
import { CgListTree } from 'react-icons/cg'
import { BsTable } from 'react-icons/bs'
import { RiLayoutGridFill, RiSoundModuleLine } from 'react-icons/ri'
import { useStateValue } from '../../../context/StateProvider'
import { Category } from '../../../types'
import Button from '../../Button'
import Tableunit from './tableunit'

function Categories() {
	const [{ categories }, dispatch] = useStateValue()
	const [view, setView] = useState('card')

	const changeView = (view: string) => {
		setView(view)
	}

	return (
		<div className='bg-white p-5 max-h-[90vh] h-full poppins overflow-y-scroll'>
			<div className='bg-transparent w-full flex items-center justify-between px-5 mb-5 py-2 rounded-lg '>
				<h3 className='text-2xl md:text-3xl font-semibold text-primary poppins'>
					Categories
				</h3>
				{/* New Category button */}
				<div className='flex gap-4 '>
					<Link href='/admin/categories/new'>
						<Button text='New ' icon={<CgListTree />} />
					</Link>
					{view === 'card' ? (
						<Button
							text='Table'
							icon={<BsTable />}
							onClick={() => changeView('table')}
						/>
					) : (
						<Button
							text='Card'
							icon={<RiLayoutGridFill />}
							onClick={() => changeView('card')}
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
				<div className='w-full h-full pr-4 mb-20'>
					<div>
				
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

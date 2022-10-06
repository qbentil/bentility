import Link from 'next/link'
import React from 'react'
import { BiArchiveIn } from 'react-icons/bi'
import { useStateValue } from '../../../context/StateProvider'
import { Category } from '../../../types'
import { Empty } from '../../Promises'
import Tableunit from '../categories/tableunit'
import { Unit } from '../posts'

const ArchiveOptions = () => {
    const [{posts, categories}, dispatch] = useStateValue()

	const [view, setView] = React.useState('posts')

	const changeView = (view: string) => {
		setView(view)
	}

	return (
		<div className='bg-white w-full h-full py-5 px-8 overflow-y-scroll'>
			<h1 className='text-primary font-bold text-3xl'>Archives</h1>
			<div className='flex flex-col'>
				<div className=' flex justify-center  mt-4 font-medium  gap-8'>
					<div className='border-b-2 border-blue-200 flex gap-8 text-xl'>
						<p
							className={`cursor-pointer ${
								view === 'posts'
									? 'border-b-4 border-primary h-[110%] text-primary'
									: 'text-gray-600'
							}`}
							onClick={() => changeView('posts')}
						>
							Posts
						</p>
						<p
							className={`cursor-pointer ${
								view === 'categories'
									? 'border-b-4 border-primary h-[110%] text-primary'
									: 'text-gray-600'
							}`}
							onClick={() => changeView('categories')}
						>
							Categories
						</p>
					</div>
				</div>
				<div className='mt-8'>
					{view === 'posts' && (
						<div>
							<div>
								<div>
									<div className=''>
										<div className='w-full  grid grid-cols-3 text-center py-2 border-b-2 border-gray-400 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75'>
											<div className='flex justify-start'>
												<p className='text-sm font-semibold text-blue-500'>
													Post Name
												</p>
											</div>
											<div>
												{/* <p className='text-sm font-semibold text-blue-500'>Category Tags</p> */}
											</div>
											<div className='flex justify-end'>
												<p className='text-sm font-semibold text-blue-500'>
													Action Buttons
												</p>
											</div>
										</div>
									</div>
									{posts && posts.length > 0 ? (
										posts.map((post: any) => (
											<Unit post={post} key={post._id} />
										))
									) : (
										<div className='w-full h-full flex flex-col items-center justify-center gap-4 text-blue-500'>
											<Empty
												text={
													'No posts yet. Create a post to see it here.'
												}
											/>
										</div>
									)}
								</div>
							</div>
						</div>
					)}
					{view === 'categories' && (
						<div>
							<div className='w-full h-full pr-4 mb-20 scrollbar-hidden'>
								<div>
									<div className=''>
										<div className='w-full  grid grid-cols-3 text-center py-2 border-b-2 border-gray-400 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75'>
											<div className='flex justify-start'>
												<p className='text-sm font-semibold text-blue-500'>
													Category
												</p>
											</div>
											<div>
												<p className='text-sm font-semibold text-blue-500'>
													Number of Posts
												</p>
											</div>
											<div className='flex justify-end'>
												<p className='text-sm font-semibold text-blue-500'>
													Action Buttons
												</p>
											</div>
										</div>
									</div>
									{categories && categories.length > 0 ? (
										categories.map((category: Category) => (
											<Tableunit key={category._id} data={category} />
										))
									) : (
										<div className='w-full h-full flex items-center justify-center'>
											<Empty text='No archived Categories yet' />
										</div>
									)}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}



export default ArchiveOptions

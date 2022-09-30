import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { ColorOpacity, generateInitials } from '../../util/functions'

const ViewC = () => {
	const router = useRouter()
	const postId = router.query._id
	const [{ categories }, dispatch] = useStateValue()
	const cat = categories.filter((post: any) => post._id === postId)[0]
	return (
		<div className='bg-white h-full w-full rounded-lg'>
			<div className='bg-white w-full h-full rounded-md shadow-md p-5 flex gap-8'>
				<div
					className='w-full h-full text-7xl flex justify-center items-center rounded-md group-hover:bg-white'
					style={{
						backgroundColor: ColorOpacity(cat.color || '', 20),
						color: cat.color || 'black',
					}}
				>
					{cat.imageURL ? (
						<div className='h-full w-full rounded-xl'>
							<img
								src={cat.imageURL}
								alt={cat.slug}
								className='w-full  overflow-hidden h-full object-contain '
							/>
						</div>
					) : (
						<div>
							<p
								style={{
									fontSize: '6rem',
                                    }}
                                    className='poppins'
							>
								{generateInitials(cat.title)}
							</p>
						</div>
					)}
				</div>
                <div className='flex h-full w-full items-center justify-center flex-col'>
                    <h1 className='text-2xl font-bold poppins text-primary' style={{ color: cat.color }}>{cat.title}</h1>
                    <p>{cat.description}</p>
                </div>
			</div>
		</div>
	)
}

export default ViewC

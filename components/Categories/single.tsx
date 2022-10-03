import { useRouter } from 'next/router'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import { FaThList } from 'react-icons/fa'
import {
	CategoryPostCount,
	ColorOpacity,
	convertDate,
} from '../../util/functions'
import SectionTitle from '../SectionTitle'
import { Seperator } from '../Seperator'
import UtilButton from '../UtilButton'
import { Category } from '../../types'
import { Writer } from '../Blog/item'
import { AiOutlineNumber } from 'react-icons/ai'
import { useStateValue } from '../../context/StateProvider'
import CategoryRelatedPosts from '../Blog/crelated'

const SingleCategory = ({ category }: { category: Category }) => {
	const [{ posts }, dispatch] = useStateValue()
	const router = useRouter()
	return (
		<div className='bg-transparent py-10 flex flex-col gap-8'>
			<div
				className='w-full bg-red-100 h-[500px] max-h-[500px] flex flex-col md:flex-row items-center justify-center gap-10'
				style={{
					backgroundColor: ColorOpacity(category?.color || '', 10),
				}}
			>
				<div>
					<img
						className='w-full h-full object-contain max-h-[300px] object-center'
						src={category?.imageURL || ''}
						alt=''
					/>
				</div>
				<div>
					<div className='flex items-center flex-col'>
						<p
							style={{ color: category?.color || 'black' }}
							className={`text-5xl md:text-6xl font-bold`}
						>
							{' '}
							{category?.title}
						</p>
						<p
							// style={{ color: category?.color || 'black' }}
							className={`text-base text-gray-700 poppins mt-4`}
						>
							{' '}
							{category?.description}
						</p>
					</div>
					<div className='flex gap-4 items-center poppins'>
						<UtilButton
							icon={<BiArrowBack />}
							color='blue-600'
							title='back'
							onClick={() => router.back()}
						/>
						<div
							className='text-gray-700 flex items-center gap-2 text-sm'
							style={{ color: category?.color || 'black' }}
						>
							<MdDateRange />{' '}
							<span>
								{convertDate(category?.createdAt || '')}
							</span>
						</div>
						<div
							className='text-gray-700 flex items-center gap-2 text-sm'
							style={{ color: category?.color || 'black' }}
						>
							<FaThList />{' '}
							<span>
								{CategoryPostCount(category?._id || '', posts)}{' '}
								Posts
							</span>
						</div>
					</div>
				</div>
			</div>
			
			<Seperator width='2' />
			<SectionTitle title='Articles in Category' tp='start' />
			<CategoryRelatedPosts categories={[category?._id || '']} />
		</div>
	)
}

export default SingleCategory

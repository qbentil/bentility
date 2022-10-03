import Link from 'next/link'
import React from 'react'
import SectionTitle from '../SectionTitle'
import { categories } from '../../util/data'
import { useStateValue } from '../../context/StateProvider'
import { ColorOpacity } from '../../util/functions'
import { useRouter } from 'next/router'
import { Category } from '../../types'

interface Props {
	titlePosition?: string
}
const Categories: React.FC<Props> = ({ titlePosition }) => {
	const router = useRouter()

	const [{ categories }, dispatch] = useStateValue()
	const goToCategory = (category: Category) => {
		router.push(`/category/${category.slug}`)
	}
	return (
		<div className='w-full bg-transparent min-h-[20vh] mb-10'>
			<SectionTitle title='Categories' tp={titlePosition} />
			<div className='w-full pb-20 bg-white grid grid-flow-row grid-cols-2 gap-1 md:grid-cols-5 lg:grid-cols-7 md:gap-2 col-start-auto p-2'>
				{categories.map((category: any) => (
					<Link
						href={`category/${category.slug}`}
						key={category._id}
					>
						<div
							style={{
								backgroundColor: ColorOpacity(
									category.color || '',
									20
								),
							}}
							className=' py-2 px-5 rounded-sm'
							key={category._id}
							onClick={() => goToCategory(category)}
						>
							<p
								style={{
									color: category.color,
								}}
								className='text-center truncate cursor-pointer'
							>
								{category.title}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Categories

import React, { useState } from 'react'
import { FaClipboardList } from 'react-icons/fa'
import { Category } from '../../../types'
import { ColorOpacity } from '../../../util/functions'

const Unit = ({ data }: { data: Category }) => {
	const initials =
		data.title.split(' ').length > 1
			? data.title
					.split(' ')
					.map((word: string) => word.charAt(0).toUpperCase())
					.join('')
			: data.title.charAt(0).toUpperCase() +
            data.title.charAt(1).toUpperCase()
    
            const shortDate = (word: any) => { 
                const date = new Date(word)
                const month = date.toLocaleDateString('default', { month: 'short' })
                const day = date.getDate()
                const year = date.getFullYear()
                const formattedDate = `${day} ${month}, ${year}`
                return formattedDate
    }
    
    const [date, setDate] = useState<string>(shortDate(data.createdAt))

	return (
		<div className='w-full  flex items-center justify-between py-2 border-b-2 border-gray-200 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75'>
			<div className='flex items-center w-[80%] gap-8 font-sans '>
				<div className='w-20 h-10 flex justify-center items-center rounded-md group-hover:bg-white' style={{
                    backgroundColor: ColorOpacity(data.color || '', 20),
                    color: data.color || 'black'
					}}>
					{initials}
				</div>
				<div className='flex flex-col mr-10'>
					<h2 className='text-active'>{data.title}</h2>
					<p className='text-[0.7rem] text-[#9F9F9F]'>
						{date}
					</p>
				</div>
			</div>
			<div className='flex items-center justify-center gap-5'>
				<div className='flex items-center justify-center gap-2 font-sans'>
					<FaClipboardList className='text-[#6E6E6E]' />
					<p className='text-[#4B4B4B] text-[0.9rem]'>1200</p>
				</div>
			</div>
		</div>
	)
}

export default Unit

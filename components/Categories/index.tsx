import Link from 'next/link'
import React from 'react'
import { categories } from '../../data'
import SectionTitle from '../SectionTitle'

const Categories = () => {
  return (
    <div className='w-full bg-transparent min-h-[20vh]'>
        <SectionTitle title='Categories' />
        <div className='w-full bg-white grid grid-flow-row grid-cols-2 gap-1 md:grid-cols-5 lg:grid-cols-7 md:gap-2 col-start-auto p-2'>
        {
            categories.map(category => (
                <Link  href={`cateory/${category.title}`} key={category.id}>
                    <p className='py-3 cursor-pointer border border-gray-200 text-blue-600 bg-gray-200 text-center hover:bg-gray-100'>{category.title}</p>
                </Link>
            ))
        }

        </div>
    </div>
  )
}

export default Categories
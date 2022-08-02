import Link from 'next/link'
import React from 'react'
import SectionTitle from '../SectionTitle'
import {categories} from '../../util/data'

interface Props{
  titlePosition?:string
}
const Categories:React.FC<Props> = ({titlePosition}) => {
  return (
    <div className='w-full bg-transparent min-h-[20vh] mb-10'>
        <SectionTitle title='Categories' tp = {titlePosition} />
        <div className='w-full pb-20 bg-white grid grid-flow-row grid-cols-2 gap-1 md:grid-cols-5 lg:grid-cols-7 md:gap-2 col-start-auto p-2'>
        {
            categories.map(category => (
                <Link  href={`cateory/${category.name}`} key={category._id}>
                    <p className='py-3 cursor-pointer border border-gray-200 text-blue-600 bg-gray-200 text-center hover:bg-gray-100'>{category.name}</p>
                </Link>
            ))
        }

        </div>
    </div>
  )
}

export default Categories
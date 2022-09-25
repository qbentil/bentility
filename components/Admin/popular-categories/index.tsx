import Link from 'next/link'
import React from 'react'
import { RiSoundModuleLine } from 'react-icons/ri'
import { useStateValue } from '../../../context/StateProvider'

import Unit from './unit'

function PopularCategories() {
  const [{categories}, dispatch] = useStateValue()
  return (
    <div className='w-[40%] flex flex-col items-center px-5 my-4'>
        {/* section head */}
      <div className='bg-white w-full rounded-t-lg flex justify-between items-center py-2 px-4 border-b-2 border-gray-200'>
            <p className=' text-active font-sans'>Popular Categories</p>
        <Link href='/admin/categories'>
            <div className='flex items-center justify-center gap-3 border border-active-bg py-2 px-4 font-sans cursor-pointer hover:bg-active-bg ease-in-out duration-300 transition-colors'>
                <RiSoundModuleLine className='text-primary' />
                <p className=' text-active text-sm'>View All</p>
          </div>
        </Link>
        </div>
        {/* posts table */}
        <div className='w-full flex flex-col bg-white pt-2 gap-2'>
        {
					
					categories &&
						categories
							.slice(0, 8)
							.map((cat : any) => <Unit data={cat} key={cat._id} />)
				}
        </div>
    </div>
  )
}

export default PopularCategories
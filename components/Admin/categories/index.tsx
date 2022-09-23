import React, {useState} from 'react'
import Unit from './unit'
import Link from 'next/link'
import { CgListTree } from 'react-icons/cg'
import { useStateValue } from '../../../context/StateProvider'
import { Category } from '../../../types'

function Categories() {
const [{categories}, dispatch] = useStateValue()

  return (
    <div className='bg-white p-5 max-h-[90vh] h-full'>
        <div className="bg-transparent w-full flex items-center justify-between px-5 mb-5 py-2 rounded-lg ">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary poppins">
            Categories
          </h3>
          {/* New Category button */}
          <div className="">
          <Link href="/admin/categories/new">
            <div className={`flex gap-3 justify-center items-center cursor-pointer bg-primary text-white hover:bg-active-bg hover:text-active py-2 px-5 w-full rounded-full transition-all duration-75 ease-in-out`}>
              <CgListTree />
              <p>Add New</p>
            </div>
          </Link>
        </div>
        </div>
      <div className='grid grid-cols-4 gap-7'>
        
          {
            categories.map((category:Category) => (
              <Unit key={category._id} data={category} />
            ))
          }
        
        

        </div>
    </div>
  )
}

export default Categories
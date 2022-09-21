import React, {useState} from 'react'
import Unit from './unit'
import {categories as Cats} from '../../../util/data'
import Link from 'next/link'
import { CgListTree } from 'react-icons/cg'
import axios from 'axios'

function Categories() {

  const [categories, setCategories] = useState([])

  axios.get("https://bentility-api.herokuapp.com/categories").then(
            (res) => {            
              setCategories(res.data.categories);
            }
          ).catch((error) => {
            console.log(error)
          })
  
  
  
  return (
    <div>
        <div className="bg-white w-full flex items-center justify-between px-5 mb-2 py-2 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl font-semibold text-active">
            Categories
          </h3>
          {/* New Catgory button */}
          <div className="">
          <Link href="/admin/categories/new">
            <div className={`flex gap-3 justify-center items-center cursor-pointer bg-primary text-white hover:bg-active-bg hover:text-active py-2 px-5 w-full rounded-full transition-all duration-75 ease-in-out`}>
              <CgListTree />
              <p>Add New</p>
            </div>
          </Link>
        </div>
        </div>
      <div className='grid grid-cols-3 gap-4'>
        
          {
            categories.map((Cat, index) => (
              <Unit key={index} data={Cat} />
            ))
          }
        
        

        </div>
    </div>
  )
}

export default Categories
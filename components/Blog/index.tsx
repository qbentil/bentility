import React from 'react'
import SingleBlog from './item'

const blogs = [1, 5, 2, 4, 5, 6,]
const Blog = () => {
  return (
        <div className='py-2 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-2'>
        {            
            blogs.map((b, index) => (
                <SingleBlog key={index} />
            ))  
            }
        </div>
  )
}

export default Blog
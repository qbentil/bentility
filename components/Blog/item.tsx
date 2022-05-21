/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from 'react'

const SingleBlog = () => {
  return (
    <div className='min-h-[15vh] bg-orange-50 border border-orange-300 items-center flex justify-center'>
      <div className="w-full flex flex-col items-center justify-around min-h-[20vh]">
        <div className="w-full lg:w-[80%] text-lg lg:text-xl  font-bold text-gray-600">
          <p className={``}>
          How to concat two strings in javascript?
          </p>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="h-6 w-6 md:h-12 md:w-12 lg:h-10 lg:w-10 items-center flex justify-center rounded-full border border-gray-300 mr-2 cursor-pointer">
            <Link href="/">
              <img
                src="https://codersquiz.netlify.app/img/bentil.jpeg"
                alt="ben"
                // width={"50px"}
                // height={"50px"}
                className="w-[90%] h-[90%] border border-gray-200 rounded-full"
              />
            </Link>
          </div>
          <p className="md:text-lg text-sm text-gray-500 lg:w-[60%] w-[90%] font-semibold">
            Bentility, <span className="font-normal">January 24, 2021 . 6 min read</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
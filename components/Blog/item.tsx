/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

interface Props{
  position: number 
}
const SingleBlog: React.FC<Props> = ({position}) => {
  return (
    <div className={`hover:cursor-pointer mb-14`}>
      <div className="h-[43vh] bg-orange-50 items-center flex  justify-center shadow-sm shadow-gray-50 hover:shadow-lg mb-3 mr-2">
        <div className="w-full md:w-[85%] flex flex-col items-center justify-around min-h-[20vh]">
          <div className="w-full lg:w-[80%] text-lg lg:text-xl px-5  font-bold text-gray-600">
            <p className={``}>How to concat two strings in javascript?</p>
          </div>
          <div className="flex w-full justify-center items-center">
            <div className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 items-center flex justify-center rounded-full border border-gray-300 mr-2 cursor-pointer">
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
            <p className="text-[0.5rem] md:text-[0.8rem] text-gray-500 lg:w-[60%] w-[90%] font-semibold">
              Poster by <span className="font-bold">Bentility</span>
            </p>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="text-lg md:text-xl font-bold hover:text-blue-500 mb-2">
          <p>How to concat two strings in javascript?</p>
        </div>
        <div className="text-sm text-gray-500 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde
          ut debitis sapiente aperiam.
        </div>
        <div className="text-gray-400 text-sm">
          <p>May 20th, 2021 | 1 min read</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

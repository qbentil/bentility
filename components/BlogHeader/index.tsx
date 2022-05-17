/* eslint-disable @next/next/no-img-element */

import {CgListTree} from 'react-icons/cg'
import {FaList} from 'react-icons/fa'
import Image from "next/image";
import Link from 'next/link';
import React from "react";

const BlogHeader = () => {
  return (
    <div className="w-full min-h-[20vh] md:flex items-center justify-between my-4 hidden md:visible">
      <div className="w-[80%] lg:w-[70%] flex items-center">
      <Link href = "/">
      <div className="h-10 w-10 lg:h-16 lg:w-16 items-center flex justify-center rounded-full border border-gray-300 mr-2 cursor-pointer">
          <img
            src="https://codersquiz.netlify.app/img/bentil.jpeg"
            alt="ben"
            // width={"50px"}
            // height={"50px"}
            className="w-[90%] h-[90%] border border-gray-200 rounded-full"
          />

        </div>
      </Link>
        <p className="md:text-sm text-[0.7rem]  text-gray-500 lg:w-[60%] w-[90%] font-semibold">
          Bentility is a tech blog created with the sole purpose of explaining
          complex tech in a simple and concise way thus creating value for
          budding developers out there.
        </p>
      </div>
      <div className="md:w-[8%] w-[15%]  flex items-center  justify-between">
          <CgListTree  className="text-xl lg:text-3xl text-gray-400 cursor-pointer hover:text-black"/>
        <FaList className="text-xl lg:text-3xl text-gray-400 cursor-pointer hover:text-black"/>
      </div>
    </div>
  );
};

export default BlogHeader;

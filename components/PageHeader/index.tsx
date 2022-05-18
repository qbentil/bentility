/* eslint-disable @next/next/no-img-element */

import { CgListTree } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
}
const Pageheader: React.FC<Props> = ({ title }) => {
  return (
    <div className="w-full  min-h-[20vh] md:flex items-center justify-between my-4 ">
      <div className="w-full flex flex-col items-center justify-around min-h-[20vh]">
        <div className="w-full lg:w-[80%] text-3xl lg:text-5xl  font-bold text-gray-600">
          <p className={``}>{title}</p>
        </div>
        <div className="flex w-full lg:w-[80%] md:w-[90%] items-center">
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
  );
};

export default Pageheader;

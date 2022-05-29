/* eslint-disable @next/next/no-img-element */
import { BsMoonFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className={
        "lg:h-[25vh] md:h-[20vh] w-full flex flex-col items-center justify-center h-[10vh]"
      }
    >
      <div className="md:w-[80%] flex justify-between items-center w-[90%]">
        <div className = "flex justify-center items-center">
        <Link href="/">
        <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
        <img
              src="https://codersquiz.netlify.app/img/bentil.jpeg"
              alt="ben"
              // width={"50px"}
              // height={"50px"}
              className="w-[90%] h-[90%] border border-gray-200 rounded-full"
            />
        </div>
          </Link>
          <Link href="/">
            <h1 className="font-brand font-[500] text-2xl md:text-5xl cursor-pointer">
              Bentility
            </h1>
          </Link>
        </div>
        <div className="w-[25%] flex items-center justify-around md:w-[10%]">
          <a
            href="https://github.com/qbentil"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub className={`text-gray-600 mr-2 text-xl lg:text-3xl hover:text-black`} />
          </a>
          <BsMoonFill className={`text-gray-600 ml-2 text-xl lg:text-3xl cursor-pointer hover:text-black`} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

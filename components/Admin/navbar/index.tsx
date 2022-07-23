/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaUserLock } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";
function Navbar() {
  return (
    <div className="bg-white py-2 px-4 w-screen h-[10vh] flex items-center">
      {/* Brand */}
      <div className="flex justify-center items-center w-[20%] gap-5">
        <Link href="/admin">
          <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
            <img
              src="https://codersquiz.netlify.app/img/bentil.jpeg"
              alt=""
              className="w-[90%] h-[90%] border border-gray-200 rounded-full"
            />
          </div>
        </Link>
        <Link href="/">
          <h1 className="font-brand font-[500] text-3xl cursor-pointer">
            Bentility
          </h1>
        </Link>
      </div>
      {/* main */}
      <div className="flex justify-between items-center w-[80%]">
        {/* searchbar */}
        <Searchbar />
        {/* user profile */}
        <UserProfile />
      </div>
    </div>
  );
}

export const Searchbar = () => {
  return (
    <div className="bg-active-bg h-10 w-80 rounded-full flex items-center px-2 gap-2 ">
      <RiSearch2Line className="text-lg text-active cursor-pointer" />
      <input
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="search here..."
        className="bg-transparent text-base focus:outline-none border-0 w-[90%] placeholder:text-active text-active"
      />
    </div>
  );
};

export const UserProfile = () => (
  <div className="flex items-center gap-4 group relative">
    <div className="flex flex-col items-end font-sans cursor-pointer">
      <p className="text-active">qBentil</p>
      <p className="text-[#888A91] text-sm">Administrator</p>
    </div>
    <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full cursor-pointer">
      <img
        src="https://codersquiz.netlify.app/img/bentil.jpeg"
        alt=""
        className="w-[90%] h-[90%] border border-gray-200 rounded-full"
      />
    </div>
    <div className="hidden bg-white rounded-lg shadow-xl gap-0  flex-col absolute right-0 top-14 p-2 font-sans group-hover:flex w-48">
      <div className="text-active flex gap-2 items-center ">
        <FaUserLock className="text-lg" />
        <p>Shadrack Bentil</p>
      </div>
      <div className="w-full h-[2px] my-2 bg-active-bg"></div>
      <Link href="/admin/settings">
        <div className="flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2">
          <FiSettings className="text-lg" />
          <p>settings</p>
        </div>
      </Link>
      <Link href="/">
        <div className="flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2">
          <BiLogOutCircle className="text-lg" />
          <p>Logout</p>
        </div>
      </Link>
    </div>
  </div>
);

export default Navbar;

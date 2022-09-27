import { FaClipboardList } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";

import { CgListTree } from "react-icons/cg";
import { GrOverview } from "react-icons/gr";
import React from "react";
import { TotalViewsCount } from "../../../util/functions";
import { useStateValue } from "../../../context/StateProvider";
import Link from "next/link";

function Tabs() {
  const [{ posts, categories, users }, dispatch] = useStateValue();
  return (
    <div className="w-full flex items-center justify-around">
      {/* tab */}
      <Link href="/admin/categories">
        <div className="flex flex-col cursor-pointer hover:bg-active-bg transition-all duration-100 ease-in-out items-center justify-center bg-white rounded-lg h-full w-[20%] py-3 gap-1 ">
          <div className="h-10 w-10 rounded-xl bg-[#FFF5F7] text-[#EC3263] flex items-center justify-center">
            <CgListTree />
          </div>
          <p className="text-active font-semibold font-sans">
            {categories.length}
          </p>
          <p className="font-sans text-[#5C6E9A] text-[0.6rem]">Categories</p>
        </div>
      </Link>
      <Link href="/admin/posts">
        <div className="flex flex-col cursor-pointer hover:bg-active-bg transition-all duration-100 ease-in-out items-center justify-center bg-white rounded-lg h-full w-[20%] py-3 gap-1 ">
          <div className="h-10 w-10 rounded-xl bg-[#E8F8F9] text-[#00AEB8] flex items-center justify-center">
            <FaClipboardList />
          </div>
          <p className="text-active font-semibold font-sans">{posts.length}</p>
          <p className="font-sans text-[#5C6E9A] text-[0.6rem]">Posts</p>
        </div>
      </Link>
      <Link href="/admin/users">
        <div className="flex flex-col cursor-pointer hover:bg-active-bg transition-all duration-100 ease-in-out items-center justify-center bg-white rounded-lg h-full w-[20%] py-3 gap-1 ">
          <div className="h-10 w-10 rounded-xl bg-[#EAF5FF] text-[#1081E8] flex items-center justify-center">
            <HiOutlineUsers />
          </div>
          <p className="text-active font-semibold font-sans">{users.length}</p>
          <p className="font-sans text-[#5C6E9A] text-[0.6rem]">Users</p>
        </div>
      </Link>
      <div className="flex flex-col cursor-pointer hover:bg-active-bg transition-all duration-100 ease-in-out items-center justify-center bg-white rounded-lg h-full w-[20%] py-3 gap-1 ">
        <div className="h-10 w-10 rounded-xl bg-[#FDF7F0] text-[#FF8700] flex items-center justify-center">
          <GrOverview />
        </div>
        <p className="text-active font-semibold font-sans">
          {TotalViewsCount(posts)}
        </p>
        <p className="font-sans text-[#5C6E9A] text-[0.6rem]">Viewers</p>
      </div>
    </div>
  );
}

export default Tabs;
